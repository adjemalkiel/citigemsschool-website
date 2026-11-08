import "../styles/index.css"
import { Baloo_2, Quicksand } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://citigemsschool.devopsflows.com"),
  title: "Citigems Bilingual School",
  description: "Citigems Bilingual School — bilingual school in Agla Agongbomey, Cotonou.",
  keywords: ["citigems", "kindergarten", "preschool", "childcare", "nursery", "education", "school"],
  openGraph: {
    title: "Citigems Bilingual School",
    description: "Citigems Bilingual School — bilingual school in Agla Agongbomey, Cotonou.",
    url: "https://citigemsschool.devopsflows.com",
    siteName: "Citigems Bilingual School",
    images: [
      {
        url: "/assets/img/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Citigems Bilingual School Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citigems Bilingual School",
    description: "Citigems Bilingual School — bilingual school in Agla Agongbomey, Cotonou.",
    images: ["/assets/img/logo/logo.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  );
}