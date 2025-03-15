import localFont from 'next/font/local'
import './globals.css'
import Header from "@/components/common/header";
import {AppProvider} from "@/context/app";

const arvo = localFont({
    src: [
        {
            path: '../../public/fonts/Arvo-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Arvo-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Arvo-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Arvo-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-arvo'
});

const robotoCondensed = localFont({
    src: [
        {
            path: '../../public/fonts/Roboto_Condensed-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-ThinItalic.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-ExtraLightItalic.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-SemiBoldItalic.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-ExtraBoldItalic.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto_Condensed-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-roboto-condensed'
});

const roboto = localFont({
    src: [
        {
            path: '../../public/fonts/Roboto-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-ThinItalic.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-ExtraLightItalic.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-SemiBoldItalic.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-ExtraBoldItalic.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Roboto-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Roboto-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-roboto'
});

export const metadata = {
  title: 'K&A Italialainen Ravintola | Latokaski | Pizza, pasta ja paljon muuta',
  description: 'Nauti italialaisesta ruoasta Espoon Latokaskessa. K&A on perheystävällinen ravintola. Tutustu ruokalistamme ja koe, miten maku herää eloon. Tervetuloa!',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.variable} ${robotoCondensed.variable} ${arvo.variable}`}>
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
