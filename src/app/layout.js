import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/header/Header";
import Footer from "@/shared/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import CustomProvider from "@/context/provider/CustomProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Veendeshi",
  description: "Presently, the company efficiently conveys and disseminates food products across the entire Kingdom market utilizing an extensive fleet of well-equipped vehicles and a proficient sales team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </CustomProvider>
      </body>
    </html>
  );
}
