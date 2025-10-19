import { Header } from "@/components/Header";
import { StarField } from "@/components/StarField";
import { ArrowRight, Zap, Eye } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <StarField />
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-5" />
          
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-10" 
               style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent)', animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-10" 
               style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)', animation: 'float 6s ease-in-out infinite 3s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)', borderRadius: '999px' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22d3ee', animation: 'glow-pulse 3s ease-in-out infinite' }} />
                <span className="text-xs font-mono uppercase tracking-wider" style={{ color: '#22d3ee' }}>Entering Void Sector</span>
              </div>

              <h1 className="mb-6 leading-tight" style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: '"Space Mono", monospace' }}>
                <span style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>LOST</span><br />
                <span style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>IN THE</span><br />
                <span style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #c084fc, #22d3ee)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VOID</span>
              </h1>

              <p className="text-lg mb-8 leading-relaxed max-w-2xl" style={{ color: '#b3bac3' }}>
                Explore the darkest corners of the galaxy where reality bends and forgotten civilizations echo through the stars. Uncover the mysteries of a universe shrouded in cosmic dread.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 font-bold rounded-lg flex items-center justify-center gap-2 group font-mono uppercase text-sm tracking-wider" 
                        style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #06b6d4)', color: '#0f1419', boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}>
                  Begin Exploration
                  <ArrowRight className="w-4 h-4" style={{ transform: 'translateX(0)' }} />
                </button>
                <button className="px-8 py-4 font-bold rounded-lg font-mono uppercase text-sm tracking-wider" 
                        style={{ border: '1px solid rgba(168, 85, 247, 0.5)', color: '#c084fc' }}>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Lore Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(34, 211, 238, 0.1)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-mono" style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>THE LORE</h2>
            <p className="text-sm font-mono mb-16 uppercase tracking-widest" style={{ color: '#808b95' }}>Ancient Records</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Eye,
                  title: "THE WATCHERS",
                  description: "An ancient civilization that transcended physical form, leaving behind ruins that defy understanding and warnings carved into reality itself.",
                },
                {
                  icon: Zap,
                  title: "THE COLLAPSE",
                  description: "A catastrophic event that fractured spacetime, trapping entire star systems in pockets of corrupted space where time flows differently.",
                },
                {
                  icon: Eye,
                  title: "THE SILENCE",
                  description: "A spreading darkness consuming everything in its path, erasing civilizations from history and leaving only void in its wake.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-lg transition-all"
                  style={{ backgroundColor: 'rgba(26, 35, 50, 0.5)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 20px rgba(34, 211, 238, 0.15)' }}
                >
                  <item.icon className="w-12 h-12 mb-4" style={{ color: '#22d3ee' }} />
                  <h3 className="text-xl font-bold font-mono mb-3" style={{ color: '#f5f7fa' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: '#99a3af' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universe Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(34, 211, 238, 0.1)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-mono" style={{ color: '#c084fc', textShadow: '0 0 10px rgba(192, 132, 252, 0.4)' }}>UNIVERSE MAP</h2>
            <p className="text-sm font-mono mb-16 uppercase tracking-widest" style={{ color: '#808b95' }}>Void Sectors</p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  sector: "SECTOR ALPHA",
                  status: "COMPROMISED",
                  color: "linear-gradient(to bottom right, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2))",
                  description: "Reality distortions detected. All exploration teams lost contact.",
                },
                {
                  sector: "SECTOR NEBULA",
                  status: "UNSTABLE",
                  color: "linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                  description: "Cosmic storms tear through space. Navigation systems unreliable.",
                },
                {
                  sector: "SECTOR VOID",
                  status: "UNKNOWN",
                  color: "linear-gradient(to bottom right, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))",
                  description: "No signals. No light. The void consumes everything sent there.",
                },
                {
                  sector: "SECTOR ECHO",
                  status: "ACTIVE",
                  color: "linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))",
                  description: "Ancient signals persist. Origin unknown. Frequency: 432 Hz.",
                },
              ].map((sector, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg p-8 transition-all"
                  style={{ background: sector.color, border: '1px solid rgba(34, 211, 238, 0.3)' }}
                >
                  <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 20, 25, 0.8)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold font-mono" style={{ color: '#f5f7fa' }}>{sector.sector}</h3>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22d3ee', animation: 'glow-pulse 3s ease-in-out infinite' }} />
                    </div>
                    <p className="text-sm font-mono mb-3" style={{ color: 'rgba(34, 211, 238, 0.7)' }}>{sector.status}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#99a3af' }}>{sector.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mysteries Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(34, 211, 238, 0.1)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-mono" style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>UNRESOLVED MYSTERIES</h2>
            <p className="text-sm font-mono mb-16 uppercase tracking-widest" style={{ color: '#808b95' }}>Questions Without Answers</p>

            <div className="space-y-4">
              {[
                "What lies at the center of the Void? All probes disappear without transmission.",
                "The Watchers left behind mathematical patterns in star positions. What is the message?",
                "Why do certain frequencies cause temporal anomalies in Sector Echo?",
                "Is the Silence expanding, or are we shrinking toward it?",
                "The ancient text speaks of a 'Third Sun'. What are the other two?",
              ].map((mystery, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-lg transition-all cursor-pointer"
                  style={{ backgroundColor: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full mt-1 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid #c084fc', backgroundColor: 'rgba(168, 85, 247, 0.2)' }}>
                      <span style={{ color: '#c084fc', fontSize: '12px' }}>?</span>
                    </div>
                    <p style={{ color: '#d1d5db' }}>
                      {mystery}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(34, 211, 238, 0.1)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-mono">
              <span style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>READY TO EXPLORE</span><br />
              <span style={{ color: '#c084fc', textShadow: '0 0 10px rgba(192, 132, 252, 0.4)', display: 'inline-block', marginTop: '8px' }}>THE UNKNOWN?</span>
            </h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#99a3af' }}>
              Join expedition teams venturing into the void. Your findings could reshape our understanding of the universe.
            </p>
            <button className="px-10 py-4 font-bold rounded-lg flex items-center justify-center gap-2 group font-mono uppercase text-sm tracking-wider mx-auto" 
                    style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #22d3ee)', color: '#0f1419', boxShadow: '0 0 40px rgba(192, 132, 252, 0.4)' }}>
              Launch Expedition
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 px-4 sm:px-6 lg:px-8" style={{ borderColor: 'rgba(34, 211, 238, 0.1)', backgroundColor: 'rgba(15, 20, 25, 0.5)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-mono font-bold mb-4" style={{ color: '#22d3ee' }}>VOID</h4>
                <p className="text-sm" style={{ color: '#99a3af' }}>Exploring the mysteries of deep space.</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(34, 211, 238, 0.5)' }}>Navigation</p>
                <ul className="space-y-2 text-sm font-mono" style={{ color: '#99a3af' }}>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Lore</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Universe</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Mysteries</a></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(34, 211, 238, 0.5)' }}>Resources</p>
                <ul className="space-y-2 text-sm font-mono" style={{ color: '#99a3af' }}>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Codex</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Gallery</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Media</a></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(34, 211, 238, 0.5)' }}>Connect</p>
                <ul className="space-y-2 text-sm font-mono" style={{ color: '#99a3af' }}>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Reddit</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(34, 211, 238, 0.1)' }}>
              <p className="text-xs" style={{ color: '#808b95' }}>
                © 2024 THE VOID. All realities reserved.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22d3ee', animation: 'glow-pulse 3s ease-in-out infinite' }} />
                <span className="text-xs font-mono" style={{ color: '#808b95' }}>SYSTEM STATUS: ONLINE</span>
              </div>
            </div>
          </div>
        </footer>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes glow-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </div>
    </div>
  );
}
