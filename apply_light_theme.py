import re

with open('src/app/page.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Backgrounds
content = content.replace('bg-indigo-950', 'bg-slate-50')
content = content.replace('text-zinc-100', 'text-slate-900')
content = content.replace('text-white', 'text-slate-900')
content = content.replace('text-indigo-200', 'text-slate-600')
content = content.replace('text-indigo-300', 'text-slate-500')
content = content.replace('text-indigo-100', 'text-slate-700')
content = content.replace('text-indigo-400', 'text-slate-500')

content = content.replace('bg-indigo-950/80', 'bg-white/90')
content = content.replace('bg-white/5 backdrop-blur-md"', 'bg-white"')
content = content.replace('bg-white/5 backdrop-blur-md', 'bg-white shadow-sm')
content = content.replace('bg-white/10', 'bg-slate-50')
content = content.replace('bg-white/5', 'bg-slate-50')
content = content.replace('border-white/10', 'border-slate-200')
content = content.replace('border-white/20', 'border-slate-300')
content = content.replace('border-white/5', 'border-slate-100')

# Colors
content = content.replace('bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500', 'bg-purple-600 hover:bg-purple-700 text-white')
content = content.replace('bg-pink-500', 'bg-purple-600')
content = content.replace('text-pink-400', 'text-purple-600')
content = content.replace('text-purple-400', 'text-amber-500')
content = content.replace('text-pink-300', 'text-purple-700')
content = content.replace('hover:text-pink-400', 'hover:text-purple-600')
content = content.replace('hover:text-purple-400', 'hover:text-amber-500')
content = content.replace('hover:text-pink-300', 'hover:text-purple-700')
content = content.replace('hover:border-pink-500', 'hover:border-purple-600')
content = content.replace('bg-pink-500/10', 'bg-purple-600/10')
content = content.replace('bg-cyan-500/10', 'bg-yellow-400/10')
content = content.replace('bg-purple-500/20', 'bg-amber-500/20')
content = content.replace('bg-gradient-to-br from-indigo-950 via-purple-900/40 to-indigo-900', 'bg-gradient-to-br from-purple-50 via-white to-amber-50')
content = content.replace('hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]', 'hover:shadow-[0_4px_20px_rgba(147,51,234,0.3)]')
content = content.replace('hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]', 'hover:shadow-[0_4px_15px_rgba(147,51,234,0.2)]')
content = content.replace('drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]', 'drop-shadow-[0_2px_10px_rgba(147,51,234,0.2)]')
content = content.replace('rgba(255, 255, 255, 0.03)', 'rgba(147, 51, 234, 0.05)')

# Specific fixing for form inputs where text-slate-900 might be wrong
# We want form text to be slate-900 anyway.

hero_start = content.find('      {/* Hero Section */}')
hero_end = content.find('      {/* Services Section */}')

new_hero = '''      {/* Hero Section */}
      <section className="min-h-[85vh] sm:min-h-[80vh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-8 py-16 lg:px-12 pt-28 sm:pt-36 lg:pt-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-amber-50/50 opacity-90"></div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Status Label */}
            <div className="text-xs sm:text-sm text-slate-600 bg-white shadow-sm border border-slate-200 px-5 py-2 rounded-full inline-flex items-center gap-2 mb-8 animate-fade-in-up font-sans font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse-glow shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
              <span>System Status: Active | Ready for Hire</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight max-w-2xl animate-fade-in-up font-sans" style={{ animationDelay: "0.2s" }}>
              We build the <span className="text-purple-600 drop-shadow-[0_2px_10px_rgba(147,51,234,0.1)]">systems</span> that run your business.
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Custom software, IoT, embedded & PLC automation — designed, built, and deployed by Aaryavarta. We solve automation and digitization problems for your business.
            </p>

            <div className="flex flex-col xs:flex-row gap-4 justify-center lg:justify-start items-center w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <button
                onClick={() => document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" })}
                className="w-full xs:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold tracking-wide px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(147,51,234,0.3)] cursor-pointer"
              >
                Get a Quote
              </button>
              <button
                onClick={() => document.getElementById("services-section").scrollIntoView({ behavior: "smooth" })}
                className="w-full xs:w-auto border border-slate-200 hover:border-purple-600 text-slate-600 hover:text-purple-600 font-medium tracking-wide px-8 py-3.5 bg-white shadow-sm rounded-lg transition-all duration-300 hover:scale-[1.03]"
              >
                See Our Capabilities
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <img src="/vector-Photoroom.png" alt="Robotic Process Automation Vector" className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
          
        </div>
      </section>

'''

content = content[:hero_start] + new_hero + content[hero_end:]

with open('src/app/page.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
