// app/schedule/page.tsx
import Image from 'next/image';

export default function SchedulePage() {
  const group1Committees = ['ESL', 'UNICEF', 'IAEA', 'Lok Sabha'];
  const group2Committees = ['CCPCJ', 'UNHRC', 'DISEC', 'IP'];

  const group1Day1 = [
    { time: '7:30 AM - 8:30 AM', event: 'Registrations' },
    { time: '8:30 AM - 9:30 AM', event: 'Opening Ceremony' },
    { time: '9:45 AM - 12:00 PM', event: 'Committee Session 1' },
    { time: '12:00 PM - 1:00 PM', event: 'Lunch Break' },
    { time: '1:00 PM - 4:00 PM', event: 'Committee Session 2' },
    { time: '4:30 PM - 6:00 PM', event: 'LumiNight' },
    { time: '6:15 PM', event: 'Dispersal' },
  ];

  const group1Day2 = [
    { time: '7:30 AM', event: 'Entry' },
    { time: '8:00 AM - 9:30 AM', event: 'Committee Session 3' },
    { time: '9:30 AM - 10:00 AM', event: 'Break' },
    { time: '10:00 AM - 12:00 PM', event: 'Committee Session 4' },
    { time: '12:00 PM - 1:00 PM', event: 'Lunch' },
    { time: '1:00 PM - 4:00 PM', event: 'Committee Session 5' },
    { time: '4:30 PM - 6:00 PM', event: 'Closing Ceremony' },
    { time: '6:15 PM', event: 'Dispersal' },
  ];

  const group2Day1 = [
    { time: '7:30 AM - 8:30 AM', event: 'Registrations' },
    { time: '8:30 AM - 9:30 AM', event: 'Opening Ceremony' },
    { time: '9:45 AM - 12:30 PM', event: 'Committee Session 1' },
    { time: '12:30 PM - 1:30 PM', event: 'Lunch Break' },
    { time: '1:30 PM - 4:00 PM', event: 'Committee Session 2' },
    { time: '4:30 PM - 6:00 PM', event: 'LumiNight' },
    { time: '6:15 PM', event: 'Dispersal' },
  ];

  const group2Day2 = [
    { time: '7:30 AM', event: 'Entry' },
    { time: '8:00 AM - 10:30 AM', event: 'Committee Session 3' },
    { time: '10:30 AM - 11:00 AM', event: 'Break' },
    { time: '11:00 AM - 12:30 PM', event: 'Committee Session 4' },
    { time: '12:30 PM - 1:30 PM', event: 'Lunch' },
    { time: '1:30 PM - 4:00 PM', event: 'Committee Session 5' },
    { time: '4:30 PM - 6:00 PM', event: 'Closing Ceremony' },
    { time: '6:15 PM', event: 'Dispersal' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
              CHIREC JMUN '25
            </h1>
            <p className="text-4xl md:text-5xl text-gray-200 mb-8 animate-slide-up font-bold">
              Schedule
            </p>
            <p className="text-2xl text-sky-400 animate-fade-in font-light tracking-wide">
              Represent • Reason • Resolve
            </p>
          </div>
        </div>
      </div>

      {/* Group 1 Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-sky-500/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-sky-400/20 shadow-2xl mb-32">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            Group 1
          </h2>
          
          {/* Committees */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {group1Committees.map((committee, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-sky-500/20 rounded-full text-sky-300 font-semibold border border-sky-400/30 text-lg hover:bg-sky-500/30 transition-all duration-300"
              >
                {committee}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-10 border border-sky-400/10 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-sky-400 mb-10 text-center">Day 1</h3>
              <div className="space-y-6">
                {group1Day1.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 bg-gray-900/40 rounded-2xl border border-gray-700/30 hover:border-sky-400/40 hover:bg-gray-900/60 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-4 h-4 mt-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <p className="text-sky-300 font-bold mb-2 text-lg">{item.time}</p>
                      <p className="text-gray-300 text-lg">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-10 border border-sky-400/10 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-sky-400 mb-10 text-center">Day 2</h3>
              <div className="space-y-6">
                {group1Day2.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 bg-gray-900/40 rounded-2xl border border-gray-700/30 hover:border-sky-400/40 hover:bg-gray-900/60 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-4 h-4 mt-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <p className="text-sky-300 font-bold mb-2 text-lg">{item.time}</p>
                      <p className="text-gray-300 text-lg">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group 2 Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-32">
        <div className="bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-blue-400/20 shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Group 2
          </h2>
          
          {/* Committees */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {group2Committees.map((committee, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-blue-500/20 rounded-full text-blue-300 font-semibold border border-blue-400/30 text-lg hover:bg-blue-500/30 transition-all duration-300"
              >
                {committee}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-10 border border-blue-400/10 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">Day 1</h3>
              <div className="space-y-6">
                {group2Day1.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 bg-gray-900/40 rounded-2xl border border-gray-700/30 hover:border-blue-400/40 hover:bg-gray-900/60 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-4 h-4 mt-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <p className="text-blue-300 font-bold mb-2 text-lg">{item.time}</p>
                      <p className="text-gray-300 text-lg">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-10 border border-blue-400/10 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">Day 2</h3>
              <div className="space-y-6">
                {group2Day2.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 bg-gray-900/40 rounded-2xl border border-gray-700/30 hover:border-blue-400/40 hover:bg-gray-900/60 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-4 h-4 mt-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <p className="text-blue-300 font-bold mb-2 text-lg">{item.time}</p>
                      <p className="text-gray-300 text-lg">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}