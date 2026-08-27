// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import ScrollTopBtn from "@components/reUsable/scrollTopBtn";
import SkipToMainContent from "@/components/reUsable/skipToMainContent";
import Header from "@components/reUsable/header";
import Footer from "@components/reUsable/footer";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/roboto/Roboto-Italic-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});

const googleSans = localFont({
  src: [
    {
      path: "../../public/fonts/googleSans/GoogleSans-VariableFont_GRAD,opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/googleSans/GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-googleSans",
});

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata = {
  title: "Matshwao101",
  description: "Learn road license theory with structured notes, accessible quizzes, and exam preparation resources to help you succeed on your driving test.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${googleSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <SkipToMainContent />
        <Header />
        <main className="main" id="main_content" tabIndex="-1">          
          {children}
        </main>
        <Footer />
        <ScrollTopBtn />  
      </body>
    </html>
  );
}
