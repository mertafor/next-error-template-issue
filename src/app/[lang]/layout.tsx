import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  preload: true,
});

export const revalidate = 60;

/* export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}
 */
export const metadata: Metadata = {
  title: "Comnet Internet",
  description: "Comnet ev ve işyeri interneti",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <div className="py-5 lgmid:py-10">{children}</div>
      </body>
    </html>
  );
}
