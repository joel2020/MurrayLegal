import { Scale, Building2, FileText, Users, Phone, Mail, Linkedin, MapPin, Award, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Scale className="w-8 h-8 text-slate-800" strokeWidth={2} />
              <div>
                <h1 className="text-xl font-semibold text-slate-900">Murray Legal Firm</h1>
                <p className="text-xs text-slate-600">Commercial Real Estate & Corporate Law</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">About</a>
              <a href="#practice" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Practice Areas</a>
              <a href="#experience" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Experience</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Licensed in New York & Pennsylvania</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Strategic Legal Solutions for Complex Transactions
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Specializing in commercial real estate transactions, corporate law, and sophisticated deal structures across the United States.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl">
                  <span>Schedule Consultation</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#practice" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                  <span>Practice Areas</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">About Edward B. Murray</h3>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Experienced Attorney with a Track Record of Success</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Edward B. Murray is a skilled attorney specializing in commercial real estate transactions and corporate law. With a strong educational foundation from Villanova Law School and Tulane University, Edward brings comprehensive expertise to complex legal matters.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  His experience spans high-value commercial transactions, due diligence, financing structures, and corporate governance, serving clients across diverse industries including real estate, sports, and corporate entities.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <GraduationCap className="w-8 h-8 text-slate-700 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-1">Education</h4>
                    <p className="text-sm text-slate-600">JD, Villanova Law<br/>BA, Tulane University</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <Award className="w-8 h-8 text-slate-700 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-1">Bar Admissions</h4>
                    <p className="text-sm text-slate-600">New York (pending)<br/>Pennsylvania</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Credentials & Recognition</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2"></div>
                    <span className="text-slate-700">Dean's Merit Scholar at Villanova Law School</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2"></div>
                    <span className="text-slate-700">Jason Gamba Scholar</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2"></div>
                    <span className="text-slate-700">Urban Land Institute Real Estate Modeling Certificate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2"></div>
                    <span className="text-slate-700">Associate Editor, Sports Law Journal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2"></div>
                    <span className="text-slate-700">Founder & President, Real Estate Law Society</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2"></div>
                    <span className="text-slate-700">Youngest Board Member in History, City of Yonkers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">Practice Areas</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Legal Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Delivering sophisticated legal counsel across multiple practice areas with meticulous attention to detail.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Real Estate Transactions</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Purchase and sale agreements, lease agreements, amendments, assignments, subleases, and closing documents for transactions nationwide.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Property acquisitions and dispositions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Joint venture agreements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Operating agreements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real Estate Finance</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Lender and borrower-side financing documents including mortgages, notes, guarantees, and related security instruments.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Acquisition financing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Construction loans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Refinancing transactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Due Diligence & Title</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Comprehensive legal due diligence including review and analysis of title reports, surveys, zoning materials, and environmental reports.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Title and survey resolution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Zoning analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Environmental compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Leasing</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  High-value commercial leasing matters for office, retail, and mixed-use properties including lease abstracts and risk analyses.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Landlord and tenant representation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Lease negotiations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Lease restructuring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate Transactions</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Transactional and corporate-related documents for real estate entities, including organizational documents and resolutions.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Entity formation and governance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Mergers and acquisitions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Strategic partnerships</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Zoning & Land Use</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Legal research and memoranda on zoning regulations, land use restrictions, and development approvals.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Zoning compliance review</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Development approvals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Land use planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">Additional Practice Areas</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Diverse Legal Expertise</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our firm brings experience across a wide range of legal disciplines, serving clients from diverse industries and sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sports & Entertainment Law</h3>
                <p className="text-slate-600 leading-relaxed">
                  Legal counsel for professional sports organizations, content licensing, sponsorship agreements, gaming contracts, and media distribution deals.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pro Bono & Community Legal Services</h3>
                <p className="text-slate-600 leading-relaxed">
                  Legal representation for underserved communities, community outreach initiatives, and advocacy for individuals in need of legal assistance.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Intellectual Property</h3>
                <p className="text-slate-600 leading-relaxed">
                  IP enforcement, trademark protection, counterfeit identification, brand management, and intellectual property rights protection strategies.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Municipal & Land Use Planning</h3>
                <p className="text-slate-600 leading-relaxed">
                  Site development approvals, affordable housing ordinances, waterfront development, municipal legislation, and government relations.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real Estate Development & Investment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Property acquisition strategies, financial modeling, proforma analysis, tax credit implementation, and development project coordination.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Privacy & Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Data privacy regulations, compliance initiatives, risk assessments, policy development, and regulatory mandate implementation.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Employment Law</h3>
                <p className="text-slate-600 leading-relaxed">
                  Employment agreements, workplace policies, compliance matters, and counsel on employer-employee relations across various industries.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cross-Border Transactions</h3>
                <p className="text-slate-600 leading-relaxed">
                  International corporate transactions, project finance, strategic alliances, and legal counsel for multi-jurisdictional business matters.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Litigation Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Legal research, motion drafting, brief preparation, and comprehensive support for complex litigation matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Get In Touch</h3>
                <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Legal Needs</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Whether you're navigating a complex commercial transaction or need strategic legal counsel, Murray Legal Firm is ready to help. Contact us today to schedule a consultation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:eddie@murraylegalfirm.com" className="text-slate-300 hover:text-white transition-colors">
                        eddie@murraylegalfirm.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:+19146207655" className="text-slate-300 hover:text-white transition-colors">
                        (914) 620-7655
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">LinkedIn</p>
                      <a href="https://linkedin.com/in/ebrandonmurray" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                        linkedin.com/in/ebrandonmurray
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-slate-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-slate-400 resize-none"
                      placeholder="Tell us about your legal needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Scale className="w-6 h-6 text-slate-400" />
                <div>
                  <p className="font-semibold text-white">Murray Legal Firm</p>
                  <p className="text-sm text-slate-500">Commercial Real Estate & Corporate Law</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm">Bar Admissions: New York (pending), Pennsylvania</p>
                <p className="text-sm mt-1">&copy; {new Date().getFullYear()} Murray Legal Firm. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
