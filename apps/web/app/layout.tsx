import { Geist, Geist_Mono } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";

import { Providers } from "@/components/providers";

import { Toaster } from "@workspace/ui/components/sonner";

import "@workspace/ui/globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <TRPCReactProvider>
          <Providers>
            {children}
            <Toaster duration={3000} />
            </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
