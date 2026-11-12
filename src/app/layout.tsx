import "../styles/index.css";
import { Baloo_2, Quicksand } from "next/font/google";
import { Metadata } from "next";
import Providers from "@/i18n/Providers";
import {
  SITE_ADDRESS,
  SITE_DESC,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | École bilingue à Cotonou`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-BJ": SITE_URL,
      fr: SITE_URL,
      en: SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${SITE_NAME} | École bilingue à Cotonou`,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_BJ",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    // opengraph-image.tsx supplies the 1200×630 preview for WhatsApp / social
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | École bilingue à Cotonou`,
    description: SITE_DESC,
  },
  other: {
    "geo.region": "BJ",
    "geo.placename": `${SITE_ADDRESS.street}, ${SITE_ADDRESS.city}`,
    "geo.position": `${SITE_ADDRESS.lat};${SITE_ADDRESS.lng}`,
    ICBM: `${SITE_ADDRESS.lat}, ${SITE_ADDRESS.lng}`,
  },
};

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  alternateName: "Citigems Schools",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/logo/logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESC,
  slogan: SITE_TAGLINE,
  email: SITE_ADDRESS.email,
  telephone: SITE_ADDRESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS.street,
    addressLocality: SITE_ADDRESS.city,
    addressCountry: SITE_ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_ADDRESS.lat,
    longitude: SITE_ADDRESS.lng,
  },
  areaServed: {
    "@type": "City",
    name: "Cotonou",
  },
  availableLanguage: ["fr", "en"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${baloo.variable} ${quicksand.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
