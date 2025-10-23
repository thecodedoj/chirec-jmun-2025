// app/committees/disec/page.tsx
import Image from 'next/image';
import logo from './unhrc.png';
import aanya from './sarayu.png';
import sanjaay from './yash.png';
import aanyaJ from './anvit.png';

export default function DISECPage() {
  const executiveBoard = [
    {
      name: 'Sarayu K',
      position: 'Chairperson',
      bio: `Sarayu's a student at Silver Oaks pursuing Humanities, and has been a part of the circuit for
over 2 years. You can find her reading, or struggling to find eggless brownie recipes in her free
time. She's looking forward to CHIREC JMUN'25, and hopes to make this experience memorable
for everyone in UNHRC! `,
      photo: aanya,
    },
    {
      name: 'Yashraj Sai Patnaik',
      position: 'Vice-Chairperson',
      bio: `Yashraj is a DP1 student at Chirec, pursuing Global Politics, Math, and Economics at higher
levels. A confident speaker, he has a deep passion for debate and thrives at MUNs, having
attended 10+ conferences in various capacities. When he’s not searching for articles on an
obscure conflict or spewing economic jargon, you can find him dedicating extensive time and
eƯort to understanding astrophysics, playing the drums, or listening to metal music. He looks
forward to a fruitful debate at the conference and extends his best wishes to all delegates.`,
      photo: sanjaay,
      photoOffset: { x: 0, y: 0 },
    },
    {
      name: 'Anvit Katturi',
      position: 'Rapporteur',
      bio: `Anvit Katturi is an IBDP year 1 student at chirec international school, taking maths, physics and
chemistry at higher level. You’ll either find him playing tennis or binging movies and shows. He
has participated in multiple MUNs as a delegate and enjoys conversations on current global
politics. He is looking forward to his first time as a rapporteur at this Chirec JMUN.`,
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
              UNHRC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              United Nations Human Rights Council
            </p>
            
            {/* Agenda Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/20 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-sky-400">Committee Agenda</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Discussing accountability mechanisms for the disproportionate use of force and collective punishment in conflict zones, with an emphasis on the protection of journalists and humanitarian aid workers.
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
