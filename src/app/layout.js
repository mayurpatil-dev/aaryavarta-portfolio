import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaryavarta | Innovating Embedded Engineering',
  description: 'Showcasing innovative projects and the brilliant minds behind cutting-edge technology solutions in IoT, AI, and embedded systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

      <body className={inter.className}>{children}</body>
    </html>
  )
}