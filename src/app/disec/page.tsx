// app/committees/disec/page.tsx
import Image from 'next/image';
import logo from './disec.png';
import rajas from './rajas.png';
import varun from './varun.png';
import vivaan from './vivaan.png';

export default function DISECPage() {
  const executiveBoard = [
    {
      name: 'Rajas Agarwal',
      position: 'Chairperson',
      bio: 'Rajas Agarwal is a highly experienced MUN participant with a well-rounded portfolio encompassing delegate, Executive Board, and Secretariat roles. Over the years, he has represented a diverse range of countries across multiple committees, engaging in complex diplomatic negotiations and policy debates at both national and institutional levels. His Executive Board roles have included serving as Chairperson, Vice Chair, and Rapporteur across a range of specialized and general assemblies, reflecting his deep understanding of parliamentary procedure and issue-based diplomacy. Within the Secretariat, he has taken on critical leadership roles such as Deputy Secretary-General, Charge D\'Affaires, and Secretary-General, contributing significantly to the planning, training, and execution of multiple MUN conferences. Additionally, his role as Deputy Head Boy of his institution showcases his leadership abilities beyond the MUN circuit, cementing his reputation as a committed and capable student diplomat.',
      photo: rajas,
    },
    {
      name: 'Varun Lingamallu',
      position: 'Vice-Chairperson',
      bio: 'Varun Lingamallu is an IBDP Year 1 student at The Gaudium School, pursuing Higher Level courses in Computer Science, Economics, and Mathematics. With a strong interest in leadership, policy, and global affairs, Varun has actively contributed to initiatives both within and outside school. He\'s heavily involved in community development, often engaging in initiatives to make a social impact. Passionate about problem-solving and diplomacy, Varun brings a blend of strategic thinking and collaboration to every committee. As the Vice Chair for DISEC at Chirec JMUN, he\'s excited to collaborate with the delegates to make this an unforgettable experience.',
      photo: varun,
      photoOffset: { x: -5, y: 0 }
    },
    {
      name: 'Vivaan Bhushan',
      position: 'Rapporteur',
      bio: 'Vivaan Bhushan, an avid debater with a love for public speaking, demonstrates a rigorous pursuit of knowledge and a deep dedication to intellectual discourse. Over the years, he has explored a wide range of experiences through MUNs, spanning over 15 conferences, as well as leadership roles, each shaping his perspective and voice. Outside these pursuits, he enjoys reading, creative writing, and playing the guitar. With a strong interest in science and mathematics, he constantly seeks to connect logic, creativity, and curiosity in everything he does, and he looks forward to the upcoming conference!',
      photo: vivaan,
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
              DISEC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              Disarmament and International Security Committee
            </p>
            
            {/* Agenda Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/20 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-sky-400">Committee Agenda</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Addressing the Threats to International Security Posed by Terrorism and Violent Non state actors with a special emphasis on Middle East and North Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


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

                href="/committees/disec/BG.pdf"
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
