import { APP_URL, MAIN_NAV, NAME } from "../utils/consts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PrimeReactProvider } from "primereact/api";
import classNames from "classnames";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Roboto,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import "react-responsive-modal/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Script from "next/script";
import ThemeContextProvider from "@/contexts/ThemeProvider";

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
  title: `Software Engineer | ${NAME}`,
  description:
    "Software engineer crafting end-to-end web applications with purpose. I believe great technology makes life better—driven by curiosity and learning.",
  openGraph: {
    title: `Software Engineer | ${NAME}`,
    description:
      "Portfolio of a software engineer showcasing scalable web apps, real-world projects, and engineering experience.",
    url: `${APP_URL}/`,
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              try {
                const theme = sessionStorage.getItem("theme");
                const lightMode = theme
                  ? theme === "light"
                  : matchMedia("(prefers-color-scheme: light)").matches;
                if (lightMode) document.documentElement.classList.add("light");
                if (!lightMode) document.documentElement.classList.remove("light");
              } catch (_) {}
            })();`,
          }}
        ></script>
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: MAIN_NAV.map((nav) => nav.label),
              url: MAIN_NAV.map((nav) => `${APP_URL}${nav.href}`),
            }),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FFWDHEYXYJ"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FFWDHEYXYJ');
            `,
          }}
        />
      </head>
      <PrimeReactProvider>
        <body
          className={classNames(
            "text-gray-100 bg-gray-950 max-md:text-sm light:bg-white light:text-gray-950",
            headingFont.variable,
            bodyFont.variable,
            titleFont.variable,
            bodyFont.className
          )}
        >
          <ThemeContextProvider>
            <Header />
            <main
              id="MainContent"
              className="page-main-content pt-18 pb-32 space-y-20 max-2xl:pt-10 max-md:pb-20"
            >
              {children}
            </main>
            <Footer />
            <script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js"
              async
              defer
            ></script>
          </ThemeContextProvider>
        </body>
      </PrimeReactProvider>
    </html>
  );
}
