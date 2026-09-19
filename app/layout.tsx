import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nephews Bar Grill | Chattanooga, TN",
  description: "Good food, cold drinks, sports and good energy at Nephews Bar Grill in Chattanooga.",
  metadataBase: new URL("https://nephews-bar-grill.vercel.app"),
  openGraph: { title: "Nephews Bar Grill", description: "Food, drinks, sports and good energy in Chattanooga.", type: "website" }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}