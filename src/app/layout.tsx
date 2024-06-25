import { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Banner from '@/components/Banner';
import { link } from 'fs';

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abductedmonkeys.com'),
  title: "Abducted Monkeys",
  description: "Video game studio developing Trouble in Tornado Town & Lockjaw: Robo-Royale",
  keywords: ['Abuducted', 'Monkeys', 'Abducted Monkeys', 'Abducted Monkeys LLC', 'Tornado', 'Trouble', 'Trouble in Torndo Town', 'Tornado Town', 'Lockjaw', 'Robo-Royale', 'Lockjaw: Robo-Royale'],
  openGraph:{
    type: "website",
    url: "https://www.abductedmonkeys.com",
    title: "Abducted Monkeys",
    description: "Video game studio developing Trouble in Tornado Town & Lockjaw: Robo-Royale",
    siteName: "Abducted Monkeys",
    images: [{
      url: "https://www.abductedmonkeys.com/monkeythin.png",
    }]
  },
  alternates: {
    canonical: './',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
    <body className={`${inter.className} flex flex-col min-h-screen`}>
      {/* <Banner  
        buttonText = {'Support Our Kickstarter for Lockjaw!'}
        buttonLink = {'link'}

        backgroundColor = {'#2bde73'}
         /> */}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  </html>
  );
}
