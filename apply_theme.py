import re

with open('src/app/page.jsx', 'r') as f:
    content = f.read()

# 1. Backgrounds
content = content.replace('bg-blue-50', 'bg-indigo-950')
content = content.replace('text-zinc-900', 'text-zinc-100')
content = content.replace('text-zinc-950', 'text-white')
content = content.replace('text-zinc-700', 'text-indigo-200')
content = content.replace('text-zinc-600', 'text-indigo-300')
content = content.replace('text-zinc-800', 'text-indigo-100')
content = content.replace('text-zinc-500', 'text-indigo-400')
content = content.replace('bg-white/80', 'bg-indigo-950/80')
content = content.replace('bg-white ', 'bg-white/5 backdrop-blur-md ')
content = content.replace('bg-white"', 'bg-white/5 backdrop-blur-md"')
content = content.replace('bg-slate-50/50', 'bg-white/5 backdrop-blur-md')
content = content.replace('bg-zinc-100/60', 'bg-white/10')
content = content.replace('bg-zinc-100', 'bg-white/10')
content = content.replace('bg-zinc-50', 'bg-white/5')
content = content.replace('border-zinc-200/80', 'border-white/10')
content = content.replace('border-zinc-200', 'border-white/10')
content = content.replace('border-zinc-300', 'border-white/20')
content = content.replace('border-zinc-100', 'border-white/5')
content = content.replace('bg-amber-500 hover:bg-amber-600', 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500')
content = content.replace('bg-amber-500', 'bg-pink-500')
content = content.replace('text-amber-600', 'text-pink-400')
content = content.replace('text-amber-500', 'text-purple-400')
content = content.replace('text-amber-700', 'text-pink-300')
content = content.replace('hover:text-amber-600', 'hover:text-pink-400')
content = content.replace('hover:text-amber-500', 'hover:text-purple-400')
content = content.replace('hover:text-amber-700', 'hover:text-pink-300')
content = content.replace('hover:border-amber-500', 'hover:border-pink-500')
content = content.replace('bg-amber-500/5', 'bg-pink-500/10')
content = content.replace('bg-emerald-500/5', 'bg-cyan-500/10')
content = content.replace('bg-amber-500/20', 'bg-purple-500/20')
content = content.replace('bg-gradient-to-br from-indigo-950 via-purple-50/10 to-pink-50/10', 'bg-gradient-to-br from-indigo-950 via-purple-900/40 to-indigo-900')
content = content.replace('hover:shadow-[0_4px_20px_rgba(245,158,11,0.2)]', 'hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]')
content = content.replace('hover:shadow-[0_4px_15px_rgba(245,158,11,0.15)]', 'hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]')
content = content.replace('drop-shadow-[0_2px_10px_rgba(217,119,6,0.1)]', 'drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]')

# Update grid background
content = content.replace('rgba(0, 0, 0, 0.015)', 'rgba(255, 255, 255, 0.03)')

with open('src/app/page.jsx', 'w') as f:
    f.write(content)
