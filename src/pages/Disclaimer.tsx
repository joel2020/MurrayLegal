import LegalDocument from '../components/LegalDocument';
import SEOHead from '../components/SEOHead';
import { JURISDICTION_NOTICE, SITE_URL } from '../lib/firm';

const sections = [
  { heading: 'General information only', paragraphs: ['This website provides general information for educational purposes. It is not legal advice and should not be used as a substitute for advice from qualified counsel who has reviewed the facts and law applicable to a specific matter.'] },
  { heading: 'No attorney-client relationship', paragraphs: ['Viewing this website, sending an inquiry, or communicating with Murray Legal through a website form or email does not create an attorney-client relationship. An attorney-client relationship begins only after the firm confirms an engagement in writing. Do not send confidential or time-sensitive information before that confirmation.'] },
  { heading: 'Jurisdiction and availability', paragraphs: [JURISDICTION_NOTICE, 'Past results, representative matters, or descriptions of experience do not guarantee a similar outcome. Legal outcomes depend on the facts, applicable law, forum, and other circumstances of each matter.'] },
  { heading: 'Third-party information', paragraphs: ['Links or references to third-party resources are provided for convenience and do not constitute an endorsement. Murray Legal does not control and is not responsible for third-party content, availability, security, or privacy practices.'] },
];

export default function Disclaimer(): JSX.Element {
  return <main><SEOHead title="Website Disclaimer | Murray Legal" description="Important information about legal advice, attorney-client relationships, jurisdiction, and use of the Murray Legal website." canonical={`${SITE_URL}/disclaimer`} /><LegalDocument title="Disclaimer" description="Important terms governing the information and communications available through this website." updated="August 18, 2026" sections={sections} /></main>;
}
