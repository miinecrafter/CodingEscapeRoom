import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundAudio from "@/components/sound";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  });
  const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  });

export const metadata: Metadata = {
  title: "Escape the Room",
description: "A thrilling escape room game experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
                <BackgroundAudio/>

          <div className="">
            {children}</div> 
        </body>
      </UserProvider>
    </html>
  );
}