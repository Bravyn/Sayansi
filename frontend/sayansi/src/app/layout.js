import 'bootstrap/dist/css/bootstrap.css';
import { Inter, Noto_Sans } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sayansi',
  description: 'Learn data science and robotics the easy way',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >{children}</body>
    </html>
  )
}
