import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import VisitorTracker from "./components/VisitorTracker";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Ballard Kelly Scott - Premium Web Design Services",
  description: "Professional web design services starting from $800. Transform your business with stunning, modern websites.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <VisitorTracker />
        <Header />
        <main className="min-h-screen pt-32 sm:pt-28">
          {children}
        </main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
