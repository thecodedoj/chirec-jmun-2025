// app/committees/disec/page.tsx
import Image from 'next/image';
import logo from './unicef.png';
import aanya from './aanya.png';
import sanjaay from './sanjaay.png';
import aanyaJ from './aanyaj.png';

export default function DISECPage() {
  const executiveBoard = [
    {
      name: 'Aanya Jain',
      position: 'Chairperson',
      bio: `Aanya Jain, better known as “the delegate of Iran,” is currently pursuing humanitarian subjects
for her A levels, as an aspiring lawyer. Over the last two years in the circuit, Aanya has won
multiple awards and served as an executive board member on numerous occasions. Outside of
MUNs, Aanya is often indulging herself in literature or cheering for Red Bull as they dominate yet
another F1 season. Aanya looks forward to serving you as your chairperson and giving you a
memorable experience!`,
      photo: aanya,
    },
    {
      name: 'Sanjaay Rajkumar',
      position: 'Co Vice-Chairperson',
      bio: `Sanjaay Rajkumar is a 12th-grade student with a passion for game development and a sharp eye
for strategy—whether it’s on a chessboard, the basketball court, or while playing Madden with
his brother. With several years of MUN experience under his belt, Sanjaay thrives in high-pressure,
research-driven environments. Known for his quick wit and endless energy, he’s always ready to
spark engaging discussions and keep the room alive. As the Co-Vice Chair of the UNICEF
committee, Sanjaay is excited to bring that same enthusiasm to the table—guiding debate,
encouraging fresh perspectives, and making sure delegates have an unforgettable experience.`,
      photo: sanjaay,
      photoOffset: { x: 0, y: 0 },
    },
    {
      name: 'Aanya Jaidka',
      position: 'Co Vice-Chairperson',
      bio: `Aanya is a 12th grader at CHIREC hoping to pursue economics and policy making. From her first
conference in 2019, she’s seen MUNs from every angle — as a delegate, OC member and even
Secretary General — and is excited to be serving as the Vice Chair for UNICEF this year. Apart
from being a national level table tennis player, Aanya enjoys spending her leisure time binge
watching Netflix—anything from a documentary to a sitcom, reading or deep in thought about
her next snack. Aanya's looking forward to meeting all the delegates and wishes them the best of luck!`,
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
              UNICEF
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              United Nations International Children's Emergency Fund
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

                href="/committees/unicef/BG.pdf"
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
                  Discussing strategies to protect children in crisis and conflict zones.
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
