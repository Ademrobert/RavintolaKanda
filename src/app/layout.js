import { Arvo, Roboto } from 'next/font/google';
import './globals.css';
import Header from "@/components/common/header";
import {AppProvider} from "@/context/app";
import Head from 'next/head';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal', 'italic'], display: 'swap', variable: '--font-roboto'})
const arvo = Arvo({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], display: 'swap', variable: '--font-arvo' })

export const metadata = {
  title: 'K&A Italialainen Ravintola | Latokaski | Pizza, pasta ja paljon muuta',
  description: 'Nauti italialaisesta ruoasta Espoon Latokaskessa. K&A on perheystävällinen ravintola. Tutustu ruokalistamme ja koe, miten maku herää eloon. Tervetuloa!',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${roboto.variable} ${arvo.variable}`}>
      <body>
      <AppProvider>
        <Header addClassName={"max-w-6xl mx-auto p-4"}></Header>
        <main>
          {children}
        </main>
      </AppProvider>
      </body>
    </html>
  )
}
