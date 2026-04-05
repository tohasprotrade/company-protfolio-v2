import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "TohasProTrade — AI-Powered Digital Marketing & Global Trade Solutions",
  description: "We merge cutting-edge AI automation with elite global trade expertise to scale your business across borders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
