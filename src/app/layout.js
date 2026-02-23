import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Microgreens Lanka (Pvt) Ltd",
  description: "Leading supplier for Food City, Supermarkets, and Luxury Hotels. Registered with the Dept of Agriculture Sri Lanka. Fresh, organic microgreens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
