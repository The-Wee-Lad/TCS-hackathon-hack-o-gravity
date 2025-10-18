// import { Link } from "react-router-dom";
// import PublicLayout from "../components/layout/PublicLayout";
// import { Shield, FileText, Search, CheckCircle, Lock, Users, ArrowRight, Award, Eye, Zap } from "lucide-react";

// export default function HomePage() {
//   return (
//     <PublicLayout>
//       {/* Hero Section */}
//       <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-center px-4 sm:px-6 py-32 relative overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
//           <div className="absolute top-20 right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse duration-[4000ms]"></div>
//           <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse duration-[4000ms] delay-1000"></div>
//         </div>

//         <div className="max-w-5xl space-y-8 relative z-10">
//           <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold mb-4">
//             <Shield className="w-4 h-4" />
//             Secure & Confidential Reporting Platform
//           </div>

//           <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
//             Speak Up{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Safely & Anonymously
//             </span>
//           </h1>

//           <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//             SafeSpeak empowers you to report corruption, fraud, or misconduct with complete anonymity and enterprise-grade data protection.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 mt-12">
//             <Link
//               to="/report"
//               className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex items-center gap-2 transform hover:-translate-y-1"
//             >
//               Submit a Report
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
//             </Link>
//             <Link
//               to="/status"
//               className="bg-white border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//             >
//               Track Report Status
//             </Link>
//           </div>

//           {/* Trust indicators - Improved spacing and typography */}
//           <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-16 pt-8 border-t border-slate-200">
//             <div className="flex items-center gap-2 text-slate-600">
//               <Lock className="w-5 h-5 text-blue-600" />
//               <span className="text-sm font-semibold">256-bit Encryption</span>
//             </div>
//             <div className="flex items-center gap-2 text-slate-600">
//               <Eye className="w-5 h-5 text-blue-600" />
//               <span className="text-sm font-semibold">Complete Anonymity</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
//               How It Works
//             </h2>
//             <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
//               A simple, secure, and transparent process from submission to resolution.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Step 1 */}
//             <div className="group bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2">
//               <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 ease-in-out">
//                 <FileText className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
//               </div>
//               <div className="text-blue-600 font-bold text-sm mb-2">STEP 1</div>
//               <h3 className="font-bold text-xl mb-3 text-slate-900">Submit Anonymously</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 Fill out a secure form and attach supporting documents. No identity verification or login required.
//               </p>
//             </div>

//             {/* Step 2 */}
//             <div className="group bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2">
//               <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300 ease-in-out">
//                 <Search className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
//               </div>
//               <div className="text-green-600 font-bold text-sm mb-2">STEP 2</div>
//               <h3 className="font-bold text-xl mb-3 text-slate-900">Investigation Process</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 Authorized personnel review your submission confidentially, ensuring fairness and a thorough examination.
//               </p>
//             </div>

//             {/* Step 3 */}
//             <div className="group bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2">
//               <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300 ease-in-out">
//                 <CheckCircle className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
//               </div>
//               <div className="text-purple-600 font-bold text-sm mb-2">STEP 3</div>
//               <h3 className="font-bold text-xl mb-3 text-slate-900">Track Progress</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 Use your unique tracking code to monitor the status and updates of your report in real-time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust & Security Section */}
//       <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
//           <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
//           <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mb-8">
//             <Lock className="w-10 h-10" />
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
//             Your Privacy is Our Priority
//           </h2>

//           <p className="text-indigo-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
//             We employ state-of-the-art encryption and a zero-knowledge architecture to ensure your identity remains protected at every step.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mt-12">
//             {/* Card 1 */}
//             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out">
//               <Zap className="w-8 h-8 mb-4 mx-auto text-white" />
//               <h4 className="font-semibold text-lg mb-2 text-white">End-to-End Encryption</h4>
//               <p className="text-indigo-200 text-sm">Military-grade security for all data.</p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out">
//               <Shield className="w-8 h-8 mb-4 mx-auto text-white" />
//               <h4 className="font-semibold text-lg mb-2 text-white">Zero-Knowledge Architecture</h4>
//               <p className="text-indigo-200 text-sm">We never see your personal information.</p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out">
//               <Award className="w-8 h-8 mb-4 mx-auto text-white" />
//               <h4 className="font-semibold text-lg mb-2 text-white">Compliance Certified</h4>
//               <p className="text-indigo-200 text-sm">Meets international security standards.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2 tracking-tight">10K+</div>
//               <div className="text-slate-600 font-medium text-lg">Reports Submitted</div>
//             </div>
//             <div>
//               <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2 tracking-tight">95%</div>
//               <div className="text-slate-600 font-medium text-lg">Resolution Rate</div>
//             </div>
//             <div>
//               <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-2 tracking-tight">100%</div>
//               <div className="text-slate-600 font-medium text-lg">Anonymous</div>
//             </div>
//             <div>
//               <div className="text-5xl md:text-6xl font-bold text-indigo-600 mb-2 tracking-tight">24/7</div>
//               <div className="text-slate-600 font-medium text-lg">Support Available</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-4">
//             <Users className="w-10 h-10 text-blue-600" />
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
//             Join Thousands Standing for Integrity
//           </h2>

//           <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//             Every report strengthens transparency and accountability. Together, we can build a community where integrity thrives.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 pt-6">
//             <Link
//               to="/report"
//               className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex items-center gap-2 transform hover:-translate-y-1"
//             >
//               Make a Report
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
//             </Link>
//             <Link
//               to="/help"
//               className="bg-white hover:bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-semibold transition-all duration-300 ease-in-out border border-slate-300"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }



import { Shield, FileText, Search, CheckCircle, Lock, Users, ArrowRight, Award, Eye, Zap } from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <PublicLayout>
      <div className="bg-black min-h-screen">
        {/* Hero Section - Dark Theme */}
        <section className="min-h-screen flex flex-col justify-center items-start bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-800 text-left px-8 sm:px-12 lg:px-24 py-32 relative overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 right-32 w-24 h-24 border border-emerald-500/20 rounded-xl flex items-center justify-center bg-emerald-500/5 backdrop-blur-sm">
              <Shield className="w-12 h-12 text-emerald-400/40" />
            </div>
            <div className="absolute top-1/2 right-48 w-16 h-16 border border-blue-500/20 rounded-lg flex items-center justify-center bg-blue-500/5 backdrop-blur-sm">
              <Lock className="w-8 h-8 text-blue-400/40" />
            </div>
            <div className="absolute bottom-48 right-64 w-20 h-20 border border-purple-500/20 rounded-lg flex items-center justify-center bg-purple-500/5 backdrop-blur-sm">
              <FileText className="w-10 h-10 text-purple-400/40" />
            </div>
          </div>

          <div className="max-w-4xl space-y-10 relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              Speak Up<br />
              <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Safely & Anonymously
              </span>
            </h1>

            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
              SafeSpeak is the most secure platform for reporting corruption, fraud, and misconduct — for brave individuals and organizations.
            </p>

            <div className="flex flex-wrap gap-4 mt-12 pt-8">

              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 ease-in-out">
                <Link
                  to="/report">
                  Submit Report
                </Link>
              </button>
              <button className="bg-transparent border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg font-medium transition-all duration-300 ease-in-out">
                <Link
                  to="/report">
                  Track Status
                </Link>
              </button>
            </div>

            {/* Trust Logos */}
            <div className="pt-16 mt-16 border-t border-white/10">
              <div className="text-slate-500 text-sm mb-6 font-medium tracking-wider uppercase">Trusted by organizations</div>
              <div className="flex flex-wrap items-center gap-8 opacity-40">
                <div className="text-white font-bold text-xl tracking-wider">COMPANY</div>
                <div className="text-white font-bold text-xl tracking-wider">ENTERPRISE</div>
                <div className="text-white font-bold text-xl tracking-wider">AGENCY</div>
                <div className="text-white font-bold text-xl tracking-wider">ORG</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Dark */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8 sm:px-12">
            <div className="text-left mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                How It Works
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl font-light">
                A simple, secure, and transparent process from submission to resolution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="group">
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  <FileText className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="text-emerald-400 font-semibold text-sm mb-3 tracking-widest">01</div>
                <h3 className="font-bold text-2xl mb-4 text-white">Submit Anonymously</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Fill out a secure form and attach supporting documents. No identity verification or login required.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  <Search className="w-10 h-10 text-blue-400" />
                </div>
                <div className="text-blue-400 font-semibold text-sm mb-3 tracking-widest">02</div>
                <h3 className="font-bold text-2xl mb-4 text-white">Investigation Process</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Authorized personnel review your submission confidentially, ensuring fairness and a thorough examination.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle className="w-10 h-10 text-purple-400" />
                </div>
                <div className="text-purple-400 font-semibold text-sm mb-3 tracking-widest">03</div>
                <h3 className="font-bold text-2xl mb-4 text-white">Track Progress</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Use your unique tracking code to monitor the status and updates of your report in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section - Dark */}
        <section className="py-32 bg-gradient-to-br from-zinc-900 via-slate-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-500 rounded-full filter blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-[150px]"></div>
          </div>

          <div className="max-w-6xl mx-auto px-8 sm:px-12 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl mb-8">
                <Lock className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                Your Privacy is<br />Our Priority
              </h2>

              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                We employ state-of-the-art encryption and a zero-knowledge architecture to ensure your identity remains protected at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 ease-in-out group">
                <Zap className="w-12 h-12 mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-xl mb-3 text-white">End-to-End Encryption</h4>
                <p className="text-slate-400 font-light">Military-grade security for all data.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 ease-in-out group">
                <Shield className="w-12 h-12 mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-xl mb-3 text-white">Zero-Knowledge Architecture</h4>
                <p className="text-slate-400 font-light">We never see your personal information.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 ease-in-out group">
                <Award className="w-12 h-12 mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-xl mb-3 text-white">Compliance Certified</h4>
                <p className="text-slate-400 font-light">Meets international security standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section - Dark */}
        <section className="py-32 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 sm:px-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3 tracking-tight">10K+</div>
                <div className="text-slate-400 font-light text-lg">Reports Submitted</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 tracking-tight">95%</div>
                <div className="text-slate-400 font-light text-lg">Resolution Rate</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 tracking-tight">100%</div>
                <div className="text-slate-400 font-light text-lg">Anonymous</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-3 tracking-tight">24/7</div>
                <div className="text-slate-400 font-light text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Dark */}
        <section className="py-32 bg-gradient-to-br from-zinc-900 to-black">
          <div className="max-w-4xl mx-auto px-8 sm:px-12 text-center space-y-10">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-3xl mb-6">
              <Users className="w-12 h-12 text-emerald-400" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Join Thousands<br />Standing for Integrity
            </h2>

            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Every report strengthens transparency and accountability. Together, we can build a community where integrity thrives.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button className="group bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-lg font-medium transition-all duration-300 ease-in-out flex items-center gap-2">
                <Link
                  to="/report">
                  Make a Report
                </Link>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
              </button>
              <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 ease-in-out">
                <Link
                  to="/about-us">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}