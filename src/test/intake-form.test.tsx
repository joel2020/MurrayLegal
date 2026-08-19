import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import IntakeForm from '../components/IntakeForm';

afterEach(() => vi.unstubAllGlobals());

async function completeRequiredFields(): Promise<void> {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/Full name/i), 'Jordan Client');
  await user.type(screen.getByLabelText(/Email address/i), 'jordan@example.com');
  await user.type(screen.getByLabelText(/Phone number/i), '215-555-0123');
  await user.selectOptions(screen.getByLabelText(/Practice area/i), 'Corporate Law');
  await user.type(screen.getByLabelText(/State or jurisdiction/i), 'Pennsylvania');
  await user.type(screen.getByLabelText(/Brief description/i), 'Contract review for a proposed business transaction.');
  await user.click(screen.getByLabelText(/I understand that submitting/i));
}

describe('consultation intake form', () => {
  it('keeps the approved action label and legal warning after validation failure', async () => {
    render(<IntakeForm />);
    await userEvent.click(screen.getByRole('button', { name: 'Request a consultation' }));
    expect(await screen.findByRole('alert')).toHaveTextContent('highlighted fields');
    expect(screen.getByText(/does not create an attorney-client relationship/i)).toBeVisible();
    expect(screen.getByRole('button', { name: 'Request a consultation' })).toBeEnabled();
    await waitFor(() => expect(screen.getByRole('textbox', { name: /Full name/i })).toHaveFocus());
  });

  it('shows field-specific errors for an incomplete request', async () => {
    render(<IntakeForm />);
    await userEvent.click(screen.getByRole('button', { name: /Request a consultation/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(/highlighted fields/i);
    expect(screen.getByText('Enter your full name.')).toBeInTheDocument();
    expect(screen.getByText(/Confirm that you understand/i)).toBeInTheDocument();
  });

  it('submits the complete payload and clears fields after success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    render(<IntakeForm />);
    await completeRequiredFields();
    fireEvent.change(screen.getByLabelText('Website'), { target: { value: 'bot-field.example' } });
    await userEvent.click(screen.getByRole('button', { name: /Request a consultation/i }));
    expect(await screen.findByRole('status')).toHaveTextContent(/request has been received/i);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const request = fetchMock.mock.calls[0];
    expect(request[0]).toBe('/api/intake');
    expect(JSON.parse(request[1].body)).toMatchObject({ name: 'Jordan Client', email: 'jordan@example.com', consent: true, practiceArea: 'Corporate Law', website: 'bot-field.example' });

    await userEvent.click(screen.getByRole('button', { name: 'Submit another request' }));
    expect(screen.getByRole('textbox', { name: /Full name/i })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: /Email address/i })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: /Phone number/i })).toHaveValue('');
    expect(screen.getByRole('combobox', { name: /Practice area/i })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: /State or jurisdiction/i })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: /Brief description/i })).toHaveValue('');
    expect(screen.getByRole('checkbox', { name: /I understand that submitting/i })).not.toBeChecked();
  });

  it('blocks duplicate submits while a request is pending', async () => {
    let resolveFetch!: (value: { ok: boolean }) => void;
    const fetchMock = vi.fn(() => new Promise<{ ok: boolean }>((resolve) => { resolveFetch = resolve; }));
    vi.stubGlobal('fetch', fetchMock);
    render(<IntakeForm />);
    await completeRequiredFields();

    await userEvent.click(screen.getByRole('button', { name: 'Request a consultation' }));
    const pendingButton = await screen.findByRole('button', { name: 'Sending request…' });
    expect(pendingButton).toBeDisabled();
    const form = pendingButton.closest('form');
    expect(form).not.toBeNull();
    fireEvent.submit(form!);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    resolveFetch({ ok: true });
    expect(await screen.findByRole('status')).toHaveTextContent(/request has been received/i);
  });

  it('preserves entered information after failure and retries successfully', async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce({ ok: false }).mockResolvedValueOnce({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    render(<IntakeForm />);
    await completeRequiredFields();
    await userEvent.click(screen.getByRole('button', { name: /Request a consultation/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(/could not send/i);
    await waitFor(() => expect(screen.getByLabelText(/Full name/i)).toHaveValue('Jordan Client'));
    const retryButton = screen.getByRole('button', { name: 'Request a consultation' });
    expect(retryButton).toBeEnabled();

    await userEvent.click(retryButton);
    expect(await screen.findByRole('status')).toHaveTextContent(/request has been received/i);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(JSON.parse(fetchMock.mock.calls[1][1].body)).toMatchObject({
      name: 'Jordan Client',
      email: 'jordan@example.com',
      practiceArea: 'Corporate Law',
      jurisdiction: 'Pennsylvania',
      consent: true,
    });
  });
});
