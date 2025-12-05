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

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const robotoSlab = Roboto_Slab({
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
            "text-gray-700",
            poppins.variable,
            roboto.variable,
            robotoSlab.variable,
            roboto.className
          )}
        >
          <Header />
          <main id="MainContent" className="page-main-content py-12">
            {children}
          </main>
          <Footer />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
