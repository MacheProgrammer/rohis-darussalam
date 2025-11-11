import Squares from "@/components/reactBits/Squares";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Karla } from "next/font/google";
import GradualBlurMemo from "@/components/reactBits/GradualBlur";
import "./globals.css";
import SplashScreen from "@/components/splashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const karla = Karla({
  subsets: ["latin"],
  weight: "500",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rohis Darussalam",
    template: "%s | Rohis Darussalam",
  },
  description:
    "Bersatu dalam Ukhuwah, Beramal dalam Dakwah — Website resmi Rohis Darussalam SMA Negeri 5 Yogyakarta.",
  keywords: [
    "Rohis Darussalam",
    "Rohis SMAN 5 YK",
    "Rohis Mache",
    "Organisasi Siswa Islam",
    "Kegiatan Rohani Islam",
    "Rohis SMA Negeri 5 Yogyakarta",
  ],
  authors: [{ name: "Rohis Darussalam", url: "https://rohis.mache.id" }],
  creator: "Rohis Darussalam",
  publisher: "Rohis Darussalam",
  metadataBase: new URL("https://rohis.mache.id"),
  openGraph: {
    title: "Rohis Darussalam SMAN 5 Yogyakarta",
    description:
      "Bersatu dalam Ukhuwah, Beramal dalam Dakwah — Website resmi Rohis Darussalam SMA Negeri 5 Yogyakarta.",
    url: "https://rohis.mache.id",
    siteName: "Rohis Darussalam",
    images: [
      {
        url: "https://rohis.mache.id/RohisDarussalam.png",
        width: 781,
        height: 805,
        alt: "Rohis Darussalam Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-transparent">
      <body className={`${karla.className} ${geistMono.variable} antialiased`}>
        <div className="fixed inset-0 -z-1">
          <Squares
            speed={0.3}
            squareSize={40}
            direction="diagonal"
            borderColor="#3f4e70"
            hoverFillColor="#222"
            backgroundColor="#0f172a"
          />
        </div>
        <SplashScreen>{children}</SplashScreen>
        <GradualBlurMemo
          target="page"
          position="bottom"
          height="5rem"
          strength={2}
          divCount={10}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={100}
        />
      </body>
    </html>
  );
}
