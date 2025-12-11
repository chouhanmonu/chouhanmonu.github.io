import {
  Geist,
  Geist_Mono,
  Poppins,
  Roboto,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import { NAME } from "../utils/consts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PrimeReactProvider } from "primereact/api";
import classNames from "classnames";

const headingFont = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bodyFont = Geist_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const titleFont = Roboto_Slab({
  variable: "--font-title",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: `App Developer | ${NAME}`,
  description: "Full-stack developer from the outskirts of Mumbai",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body
          className={classNames(
            "text-gray-100 bg-gray-950",
            headingFont.variable,
            bodyFont.variable,
            titleFont.variable,
            bodyFont.className
          )}
        >
          <Header />
          <main id="MainContent" className="page-main-content py-18 space-y-20">
            {children}
          </main>
          <Footer />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
