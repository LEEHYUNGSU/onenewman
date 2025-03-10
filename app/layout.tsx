import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@flaticon/flaticon-uicons/css/all/all.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One New Man",
  description: "One New Man For Jesus Christ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}


{/* <head>
  <!-- 필수 태그 -->
  <meta property="og:title" content="홈페이지 제목" />
  <meta property="og:description" content="홈페이지 설명" />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://example.com" />

  <!-- 선택 태그 -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="사이트 이름" />
</head> */}