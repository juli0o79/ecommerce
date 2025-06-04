'use client';
import { GlobalStyle } from "@/styles/GlobalStyles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        {children}
      </body>
    </html>
  );
}
