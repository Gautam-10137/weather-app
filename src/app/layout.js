import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Now",
  description: "WeatherNow dedicated to providing you with the most accurate and up-to-date weather information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  );
}
