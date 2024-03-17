import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComponenet from '../components/NavBar/NavBarComponent'
import Footer from "../components/Footer/FooterComponent";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <NavBarComponenet/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
