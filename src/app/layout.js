import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContext, ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'Blog App #2, This project was originally from lamadev.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeContext>
          <ThemeProvider>
          <div className='container'>
            <div className='wrapper'>
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </div>
          </ThemeProvider>
        </ThemeContext>
      </body>
  
    </html>
  )
}
