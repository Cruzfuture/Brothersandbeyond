import { useState } from 'react';
import { Menu, X, Scale, Gavel, Banknote, Shield, Clock, CheckCircle, Award, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    setFormData({ name: '', phone: '', email: '', caseType: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-100">
        <nav className="container-width flex items-center justify-between h-20 px-4 md:px-8">
          <a href="#" className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-crimson" />
            <span className="font-serif font-bold text-lg text-slate-900 tracking-tight">BROTHERS & BEYOND <span className="text-crimson">SERVICES</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-crimson transition-colors font-medium">Home</a>
            <a href="#services" className="text-slate-600 hover:text-crimson transition-colors font-medium">Services</a>
            <a href="#about" className="text-slate-600 hover:text-crimson transition-colors font-medium">About</a>
            <a href="#contact" className="text-slate-600 hover:text-crimson transition-colors font-medium">Contact</a>
          </div>

          <a href="tel:+256777115345" className="hidden lg:inline-flex items-center gap-2 btn-accent">
            <Phone className="w-4 h-4" />
            Call Director: +256 777 115 345
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-slate-600 hover:text-crimson transition-colors font-medium py-2">Home</a>
              <a href="#services" className="text-slate-600 hover:text-crimson transition-colors font-medium py-2">Services</a>
              <a href="#about" className="text-slate-600 hover:text-crimson transition-colors font-medium py-2">About</a>
              <a href="#contact" className="text-slate-600 hover:text-crimson transition-colors font-medium py-2">Contact</a>
              <a href="tel:+256777115345" className="btn-accent text-center">
                <Phone className="w-4 h-4 inline mr-2" />
                Call Director
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-crimson/5 via-transparent to-transparent" />
        <div className="container-width px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-crimson/10 text-crimson px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Licensed & Certified Legal Professionals
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 text-balance">
                Professional Financial Recovery & Legal Enforcement Services in Uganda
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                Licensed Court Bailiffs, Certified Auctioneers, and Assertive Debt & Rent Collectors. We execute judicial directives and secure your cash flow with absolute legal compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-accent text-lg px-8 py-4">
                  Request Immediate Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="btn-primary bg-transparent text-crimson border-2 border-crimson hover:bg-crimson hover:text-white">
                  Our Services
                </a>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-crimson">10+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-crimson">100+</div>
                  <div className="text-sm text-slate-500">Cases Resolved</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-crimson">98%</div>
                  <div className="text-sm text-slate-500">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-crimson/10 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-crimson/20 rounded-lg">
                      <Gavel className="w-6 h-6 text-crimson" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Court-Appointed Authority</h3>
                      <p className="text-slate-400 text-sm">Fully licensed to execute court warrants and directives across Uganda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald/20 rounded-lg">
                      <Banknote className="w-6 h-6 text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Asset Recovery Specialists</h3>
                      <p className="text-slate-400 text-sm">Expert recovery of commercial arrears and property collections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-crimson/20 rounded-lg">
                      <Scale className="w-6 h-6 text-crimson" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Absolute Legal Compliance</h3>
                      <p className="text-slate-400 text-sm">Every action executed within full legal framework and jurisdiction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson/10 text-crimson px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Legal Enforcement Services
            </h2>
            <p className="text-lg text-slate-600">
              From warrant execution to asset liquidation, we provide end-to-end solutions that protect your interests and recover what's rightfully yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="card group">
              <div className="p-4 bg-crimson/10 rounded-xl w-fit mb-6 group-hover:bg-crimson transition-colors">
                <Gavel className="w-8 h-8 text-crimson group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Court Bailiff Services</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Execution of court warrants, asset attachment, and lawful evictions carried out with precision and full legal authority.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Warrant execution</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Asset attachment & seizure</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Lawful property evictions</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="card group">
              <div className="p-4 bg-emerald/10 rounded-xl w-fit mb-6 group-hover:bg-emerald transition-colors">
                <Banknote className="w-8 h-8 text-emerald group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Official Auctioneering</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                High-visibility public auctions and rapid asset liquidation ensuring fair market value for all stakeholders involved.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Public auction management</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Rapid asset liquidation</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Fair market valuation</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="card group md:col-span-2 lg:col-span-1">
              <div className="p-4 bg-crimson/10 rounded-xl w-fit mb-6 group-hover:bg-crimson transition-colors">
                <Scale className="w-8 h-8 text-crimson group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Debt & Rent Collection</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Professional recovery of commercial arrears and property rent, minimizing friction while maximizing results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Commercial debt recovery</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Property rent collection</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span>Tenant dispute resolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Businesses Across Uganda
            </h2>
            <p className="text-lg text-slate-600">
              Our commitment to excellence and legal precision makes us the premier choice for enforcement services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-crimson to-crimson-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">End-to-End Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                From initial assessment to final recovery, we handle every step of the process with unwavering professionalism and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald to-emerald-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Absolute Legal Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Every action we take is fully backed by legal authority. Your interests are protected within the complete framework of Ugandan law.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-crimson to-crimson-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Rapid Turnaround Times</h3>
              <p className="text-slate-600 leading-relaxed">
                Time is money. Our streamlined processes ensure swift execution of court orders and rapid recovery of outstanding dues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-crimson/10 text-crimson px-4 py-2 rounded-full text-sm font-medium mb-6">
                About Our Firm
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                A Legacy of Professional Excellence in Legal Enforcement
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Brothers & Beyond Services stands as a cornerstone of professional legal enforcement in Uganda. Founded on principles of integrity, efficiency, and unwavering compliance with judicial directives, we have built a reputation as the trusted partner for businesses and individuals seeking reliable asset recovery solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our operational infrastructure spans across Kampala and beyond, with a network of experienced professionals dedicated to executing your legal rights. Under the leadership of Director <span className="font-semibold text-slate-900">Muhanguzi Innocent Frank</span>, we have successfully resolved over 100 cases, recovering outstanding debts and ensuring justice is served.
              </p>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-crimson to-crimson-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-serif font-bold text-xl">MF</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Muhanguzi Innocent Frank</h4>
                    <p className="text-sm text-crimson font-medium mb-2">Director & Lead Enforcement Officer</p>
                    <p className="text-slate-600 text-sm">
                      With over 10 years of experience in legal enforcement and asset recovery, Director Muhanguzi leads our team with distinction and unwavering commitment to client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-crimson/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-crimson to-crimson-800 rounded-full flex items-center justify-center mb-6">
                    <Scale className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Established Excellence</h3>
                  <p className="text-slate-400 mb-8">Since our founding, we have been the standard-bearer for professional legal enforcement in Uganda</p>
                  <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-crimson">100%</div>
                      <div className="text-xs text-slate-500">Compliance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald">24/7</div>
                      <div className="text-xs text-slate-500">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-slate-500">Confidential</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium mb-4">
              Contact Us
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Request a Consultation
            </h2>
            <p className="text-lg text-slate-600">
              Our legal enforcement experts are ready to discuss your case. Contact us today for a confidential assessment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-crimson focus:border-crimson transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-crimson focus:border-crimson transition-all outline-none"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-crimson focus:border-crimson transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="caseType" className="block text-sm font-medium text-slate-700 mb-2">Case Type</label>
                  <select
                    id="caseType"
                    required
                    value={formData.caseType}
                    onChange={(e) => setFormData({...formData, caseType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-crimson focus:border-crimson transition-all outline-none bg-white"
                  >
                    <option value="">Select a case type</option>
                    <option value="bailiff">Court Bailiff Services</option>
                    <option value="auction">Official Auctioneering</option>
                    <option value="debt">Debt Collection</option>
                    <option value="rent">Rent Collection</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <button type="submit" className="btn-accent w-full text-lg py-4">
                  Submit Inquiry
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Our Office</h3>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 mb-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-crimson/20 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-crimson" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Office Address</h4>
                      <p className="text-slate-400">
                        Plot 12/18 William Street<br />
                        Kalungi Plaza, 2nd Floor Suite 205<br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-700" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald/20 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Phone Lines</h4>
                      <p className="text-slate-400">
                        <a href="tel:+256777115345" className="hover:text-emerald transition-colors">+256 777 115 345</a><br />
                        <a href="tel:+256704373238" className="hover:text-emerald transition-colors">+256 704 373 238</a>
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-700" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-crimson/20 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-crimson" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Email</h4>
                      <p className="text-slate-400">
                        <a href="mailto:innocentfrankmuhanguzi@gmail.com" className="hover:text-crimson transition-colors">innocentfrankmuhanguzi@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-700" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald/20 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Working Hours</h4>
                      <p className="text-slate-400">
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-6">
                <p className="text-slate-700">
                  <span className="font-semibold text-crimson">P.O. BOX 9907</span><br />
                  Kampala, Uganda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container-width px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-crimson" />
              <span className="font-serif font-bold text-white">BROTHERS & BEYOND <span className="text-crimson">SERVICES</span></span>
            </div>
            <p className="text-slate-500 text-sm text-center">
              © {new Date().getFullYear()} Brothers & Beyond Services. All rights reserved. Licensed Court Bailiffs & Certified Auctioneers.
            </p>
            <div className="flex items-center gap-6">
              <a href="tel:+256777115345" className="text-slate-400 hover:text-emerald transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:innocentfrankmuhanguzi@gmail.com" className="text-slate-400 hover:text-crimson transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
