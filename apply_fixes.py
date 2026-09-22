import re

with open('src/app/page.jsx', 'r') as f:
    content = f.read()

# 1. Replace the specific content box the user complained about
old_label = '''<div className="font-mono text-xs sm:text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-md inline-flex items-center gap-2 mb-8 animate-fade-in-up">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-glow"></span>
            <span>System Status: Active | Ready for Hire</span>
          </div>'''

new_label = '''<div className="text-xs sm:text-sm text-indigo-200 inline-flex items-center gap-2 mb-8 animate-fade-in-up font-sans font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse-glow shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
            <span>System Status: Active | Ready for Hire</span>
          </div>'''

content = content.replace(old_label, new_label)

# 2. Globally remove robotic font (font-mono)
content = content.replace('font-mono', 'font-sans font-medium')

with open('src/app/page.jsx', 'w') as f:
    f.write(content)
