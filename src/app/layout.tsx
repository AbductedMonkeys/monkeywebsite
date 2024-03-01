import { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abducted Monkeys",
  description: "Video game studio developing Trouble in Tornado Town & Lockjaw: Robo-Royale",
  keywords: [],
  openGraph:{
    type: "website",
    url: "https://www.abductedmonkeys.com",
    title: "Abducted Monkeys",
    description: "Video game studio developing Trouble in Tornado Town & Lockjaw: Robo-Royale",
    siteName: "Abducted Monkeys",
    images: [{
      url: "https://mattmiholics.github.io/personal-site-next/images/mailbox/mailboxscreenshot.jpg",
    }]
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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
