import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn modal test",
  description: "modal test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
        <script src="https://unpkg.com/p5.js-svg@1.5.1"></script>
      </head>

      <body
        suppressHydrationWarning
        className={clsx(inter.className, "h-[100dvh]")}
      >
        <div className="flex w-full overflow-x-hidden max-w-[1920px] mx-auto min-h-[100dvh] ">
          {children}
        </div>
      </body>
    </html>
  );
}
