// app/committees/disec/page.tsx
import Image from 'next/image';
import logo from './iaea.png';
import aanya from './raunaq.png';
import sanjaay from './naisha.png';
import aanyaJ from './srinika.png'

export default function DISECPage() {
  const executiveBoard = [
    {
      name: 'Raunaq Sinha',
      position: 'Chairperson',
      bio: `a natural competitor and a person with a passion for unique committees bring him onto the EB
for IAEA at Chirec JMUN 2025.
Currently in his first year at O.P Jindal Global University, pursuing BSc. Economics Hons. and
holding and International Advanced Diploma in Artificial Intelligence, he aims to break into the
world of quantitative finance and re-shape the financial structures of the world.
Raunaq is a tried and tested leader, whether in his capacity as Delgate or as a member of the
Executive Board.
A Racing Driver by profession, he knows what decisions are to be made in the heat of the
moment; making him invaluable in any professional setting.
Raunaq wishes you the best of luck and looks forward to seeing you at Chirec JMUN 2025.
"May the odds be ever in your favour."  
 `,
      photo: aanya,
    },
    {
      name: 'Naisha Singhee',
      position: 'Vice-Chairperson',
      bio: `Naisha Singhee is a Grade 11 CBSE student at CHIREC, studying Sociology and Economics.
As an aspiring lawyer, she has a deep interest in politics, media, and justice. When she's not at a
conference, she's either at the tennis court or overanalysing a film she's already seen five times.
She looks forward to sharing her knowledge, and passion for debate, with the delegates of IAEA! `,
      photo: sanjaay,
      photoOffset: { x: 0, y: 0 },
    },
  {
      name: 'Srinika Reddy',
      position: 'Rapporteur',
      bio: `Srinika Reddy is a Grade 9 student at CHIREC who is both enthusiastic and creative in
everything she takes on. She’s a total people person - she loves working in teams, meeting new
people, and building meaningful connections.
When she’s not perfecting her dance routines, taking part in a debate competition, or
volunteering for a cause, you’ll find her playing badminton, trying out a new restaurant in the
city, or baking late at night. Srinika spends her free time rewatching Suits, Gossip Girl, and
Modern Family, or making pasta with her friends.
Approachable and open-minded, she loves a good heated debate. Her first-ever JMUN in 2023
was what sparked her passion for public speaking, and she strongly believes that JMUNs are an
incredible learning experience. Srinika is beyond excited to help make this year’s conference
one to remember!`,
      photo: aanyaJ,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <Image
                src={logo}
                alt="CHIREC JMUN Logo"
                width={120}
                height={120}
                className="rounded-full shadow-2xl shadow-sky-500/50"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
              IAEA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            International Atomic Energy Agency
            </p>
            {/* Background Guide Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/20 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-sky-400 text-center">Background Guide</h2>
            <p className="text-gray-300 mb-6 text-center">
              Download the comprehensive background guide to prepare for the committee session.
            </p>
            <div className="flex justify-center">
              <a

                href="/committees/iaea/BG.pdf"
                target = "_blank"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Background Guide (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
            {/* Agenda Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/20 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-sky-400">Committee Agenda</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Deliberating upon the International Response to Reported Israeli Strikes on Iranian Nuclear Facilities
(Freeze Date: 13 June 2025)

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Board Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
          Executive Board
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {executiveBoard.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-sky-400/20 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-44 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    style={{
      transform: `translate(${member.photoOffset?.x || 0}px, ${member.photoOffset?.y || 0}px)`,
    }}
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sky-400 font-semibold mb-4 text-lg">{member.position}</p>
                <p className="text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
