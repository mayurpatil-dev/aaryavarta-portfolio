import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Aaryavarta | Custom Automation, Embedded & IoT Systems',
  description: 'We build the systems that run your business. Bespoke software, IoT, embedded engineering, and PLC industrial automation solutions by Aaryavarta.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-3DAKxuaTDBvKcJvAHhtI0KGO0X83e89eG7kPUdD+WejVCSswwJjxUJFRqM69Dgg5KoqI/tqGmVBFMAw6CFQQog=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Fallback Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.5.1/css/all.css"
          crossOrigin="anonymous"
        />
      </head>

      <body className="bg-blue-50 text-zinc-900 antialiased font-sans">{children}</body>
    </html>
  )
}