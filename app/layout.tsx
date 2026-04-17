import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "AKR Global Studios | Elite Digital Agency",
  description:
    "AKR Global Studios is an elite outsourcing agency delivering world-class web development, UI/UX design, mobile apps, and branding solutions to ambitious businesses worldwide.",
  keywords: ["digital agency", "web development", "UI/UX design", "outsourcing", "branding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={{ colorScheme: "dark" }}
    >
      <head>
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <SmoothScrollProvider>
          <div className="flex flex-col min-h-full bg-black">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


