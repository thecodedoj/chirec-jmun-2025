"use client";

import React from 'react';
import { Users, Newspaper, FileText, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';

// Global styles matching CHIREC JMUN theme
function RegisterPageStyles() {
  return (
    <style jsx global>{`
      .jmun-card-interactive {
        filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.12));
        transition: all 0.3s ease;
      }
      .jmun-card-interactive:hover {
        filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.25));
        transform: translateY(-4px);
      }
      .jmun-title-glow {
        filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.18));
        transition: filter 0.3s;
      }
      .jmun-title-glow:hover {
        filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.22));
      }
    `}</style>
  );
}

interface RegistrationLink {
  individual: string;
  ip: string;
  allocation: string;
}

const RegisterPage: React.FC = () => {
  const registrationLinks: RegistrationLink = {
    individual: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=gtzSBu1vO02SGDfTT7BAW7lVwOEa8VdJix4pjIgOkt5UNFdPTjNTVFFHWEJaNEtINE5CUjBRNFYzMy4u&fbclid=PAZXh0bgNhZW0CMTEAAadxNe4DgawXaShx7-0zPaP-2XqU2NrWCdy1uW3BuZLpK9D7VgB_TfRTcwt30A_aem_LYoTE1a9GO5wIbIC1jzrWQ&route=shorturl",
    ip: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=gtzSBu1vO02SGDfTT7BAW7lVwOEa8VdJix4pjIgOkt5UNkEwT0NVR0xORDNQSFJIMEQ5QUxNWFBMVy4u&fbclid=PAZXh0bgNhZW0CMTEAAafWE-nRDiOtEnPyBjrbaV7PWFWZ5W-QLlbeuQoVqDB4p2YsIbAyM1ocTZSs8w_aem_SfQRJJCVGB2E65ySUab17Q&route=shorturl",
    allocation: "https://login.microsoftonline.com/06d2dc82-6fed-4d3b-9218-37d34fb0405b/oauth2/v2.0/authorize?client_id=08e18876-6177-487e-b8b5-cf950c1e598c&scope=https%3A%2F%2Fgraph.microsoft.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fcognitaschoolsuk-my.sharepoint.com%2F_forms%2Fspfxsinglesignon.aspx&client-request-id=c9950b0c-cb89-4645-9298-e4366c32320c&response_mode=fragment&client_info=1&login_hint=prajwald15795%40students.chirec.ac.in&X-AnchorMailbox=UPN%3Aprajwald15795%40students.chirec.ac.in&nonce=019a1b40-967e-75e5-bea1-0ab1bccc5d1c&state=eyJpZCI6IjAxOWExYjQwLTk2N2EtNzg2OC1hOTI3LTEwNWFhZWQxYTlmZSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7Chttps%3A%2F%2Fcognitaschoolsuk-my.sharepoint.com%2F%3Ax%3A%2Fg%2Fpersonal%2Farnavl15570_students_chirec_ac_in%2FEUfkN4urmd5Jtg3rad2fzBwBFsZFS8NlWS6ipESaJ3br5w%3Fe%3DgSgtYI&x-client-SKU=msal.js.browser&x-client-VER=4.22.0&response_type=code&code_challenge=yDPcCc_7B5MhUd0i9H2NJri8PdMQznLtzKaWhtYcvk0&code_challenge_method=S256"
  };

  return (
    <>
      <RegisterPageStyles />
      <div className="min-h-screen bg-[#000814] text-[#ededed]">
        
        {/* Decorative background elements */}
        <div className="absolute left-0 top-20 w-40 h-40 bg-sky-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 top-1/4 w-32 h-32 bg-sky-300/06 rounded-full blur-2xl -z-10" />
        <div className="absolute left-1/2 bottom-1/3 w-48 h-48 bg-sky-400/08 rounded-full blur-3xl -z-10" />


        {/* Hero Section */}
        {/* Hero Section */}
<section className="relative z-10 px-6 md:px-12 py-12 md:py-16 mt-[200px]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="geist-font text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
      <span className="text-sky-300">Registration is Now Open!</span>
    </h2>
    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
      Step into the world of diplomacy and global affairs. Join us for an extraordinary 
      experience in international relations, debate, and leadership.
    </p>
  </div>
</section>


        {/* Main Content */}
        <main className="relative z-10 px-6 md:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Important Notice */}
            <div className="bg-amber-500/10 border-l-4 border-amber-400 p-6 rounded-r-lg mb-12 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-300 mb-1">Important</h3>
                  <p className="text-amber-100/90 mb-2">
                    After registering, you <strong>must</strong> complete the mandatory forms immediately.
                  </p>
                  <p className="text-amber-100/90">
                    Once you've completed the mandatory forms, check the Allocation Matrix to view your committee and portfolio assignments.
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              
              {/* Individual Registration Card */}
              <div className="jmun-card-interactive bg-[rgba(255,255,255,0.03)] rounded-lg border border-white/5 overflow-hidden">
                <div className="bg-gradient-to-br from-sky-500/20 to-sky-600/10 p-6 border-b border-white/5">
                  <div className="flex items-center justify-center w-16 h-16 bg-sky-400/20 rounded-full mb-4 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-sky-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-sky-300">
                    Individual Registration
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    Register as an individual delegate and represent your school in various committees. 
                    Perfect for students looking to enhance their diplomatic skills and engage in 
                    meaningful debate on global issues.
                  </p>
                  <a 
                    href={registrationLinks.individual}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/30 text-sky-200 font-semibold rounded-lg transition-all duration-200 gap-2"
                  >
                    Register as Individual
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* IP Registration Card */}
              <div className="jmun-card-interactive bg-[rgba(255,255,255,0.03)] rounded-lg border border-white/5 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 border-b border-white/5">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-400/20 rounded-full mb-4 backdrop-blur-sm">
                    <Newspaper className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">
                    International Press
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    International Press registration for aspiring journalists and media professionals. 
                    Cover the conference, conduct interviews, and report on the proceedings. Shape the 
                    narrative and bring MUN to life through your lens.
                    <br /><br />
                    <strong className="text-blue-300">Remember:</strong> Complete the mandatory forms immediately after registering!
                  </p>
                  <a 
                    href={registrationLinks.ip}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-200 font-semibold rounded-lg transition-all duration-200 gap-2"
                  >
                    Register for IP
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Allocation Matrix Section */}
            <div className="jmun-card-interactive bg-[rgba(255,255,255,0.03)] rounded-lg border border-white/5 overflow-hidden mb-12">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-8 md:p-12 text-center border-b border-white/5">
                <div className="flex items-center justify-center w-20 h-20 bg-emerald-400/20 rounded-full mb-4 mx-auto backdrop-blur-sm">
                  <FileText className="w-10 h-10 text-emerald-300" />
                </div>
                <h2 className="geist-font text-3xl md:text-4xl font-extrabold text-emerald-300 mb-3">
                  Allocation Matrix
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Once you've registered, view the allocation matrix to discover your assigned committee 
                  and country portfolio. This is where your MUN journey officially begins!
                </p>
              </div>
              <div className="p-8 text-center">
                <a 
                  href={registrationLinks.allocation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-200 text-lg font-semibold rounded-lg transition-all duration-200 gap-2"
                >
                  View Allocation Matrix
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-[rgba(255,255,255,0.03)] rounded-lg p-8 border border-white/5">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-sky-300 mb-4">
                  About CHIREC JMUN 2025
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  CHIREC Junior Model United Nations (JMUN) is a platform where students step into 
                  the shoes of diplomats, debating and solving pressing global issues. Through 
                  collaborative dialogue and creative problem-solving, delegates develop critical 
                  thinking, public speaking, and negotiation skills while exploring diverse 
                  perspectives on international affairs.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 mt-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 CHIREC International School. All rights reserved.
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                CHIREC International School - Serilingampally Campus
              </p>
            </div>
          </div>
        </footer>

        {/* More decorative elements */}
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-sky-400/08 rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-1/4 w-32 h-32 bg-sky-300/06 rounded-full blur-2xl -z-10" />
      </div>
    </>
  );
};

export default RegisterPage;