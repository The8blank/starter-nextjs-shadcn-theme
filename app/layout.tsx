import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import { cn } from "@/lib/utils";

const inter = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Acanthe.dev",
  description: "Agence de développement web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "bg-background")}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
