import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
});

export const metadata = {
  title: 'Next14 App',
  description: 'my second nextjs App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
