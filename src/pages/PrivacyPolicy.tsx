import LegalDocument from '../components/LegalDocument';
import SEOHead from '../components/SEOHead';
import { EMAIL, SITE_URL } from '../lib/firm';

const sections = [
  { heading: 'Information you provide', paragraphs: ['Murray Legal may receive information you voluntarily provide, including your name, contact details, company, preferred contact method, and a general description of your inquiry. Please do not submit confidential, privileged, or highly sensitive information before the firm confirms an engagement in writing.'] },
  { heading: 'How information is used', paragraphs: ['Inquiry information may be used to evaluate a request, check matter fit and jurisdiction, communicate with you, maintain website security, and meet legal or professional obligations. Submitting an inquiry does not create an attorney-client relationship.'] },
  { heading: 'Service providers and retention', paragraphs: ['Information may be handled by service providers that support website hosting, communications, and security. Murray Legal does not sell personal information. Information is retained only as reasonably needed for the purposes described here and applicable recordkeeping obligations.'] },
  { heading: 'Security and your choices', paragraphs: [`Reasonable measures are used to protect information, but no internet transmission is guaranteed to be secure. You may contact ${EMAIL} to ask about personal information submitted through this website or to request a correction or deletion, subject to legal and professional obligations.`] },
  { heading: 'Policy updates', paragraphs: ['This policy may be updated as website practices or applicable requirements change. The date shown above identifies the most recent revision.'] },
];

export default function PrivacyPolicy(): JSX.Element {
  return <main><SEOHead title="Privacy Policy | Murray Legal" description="Learn how Murray Legal handles information submitted through its website and consultation inquiry form." canonical={`${SITE_URL}/privacy-policy`} /><LegalDocument title="Privacy Policy" description="How information submitted through the Murray Legal website is collected, used, and protected." updated="August 18, 2026" sections={sections} /></main>;
}
