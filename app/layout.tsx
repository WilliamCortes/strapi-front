import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "./components/ui/navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FAIMSYS",
  description:
    "Fundación Fondo Acueducto Inter-veredal Mesitas de Santa Inés y San Mateo.",
};

const navbarOptions = [
  {
    href: "#",
    label: "Nuestra Empresa",
  },
  {
    href: "#",
    label: "Atención al Cliente",
  },
  {
    href: "#",
    label: "Participa",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${geistSans.variable}  antialiased`}
      >
        <Navbar options={navbarOptions} />
        {children}
      </body>
    </html>
  );
}
