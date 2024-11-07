import type { Metadata } from "next";
import "./globals.css";
import GridContainer from "@/components/GridContainer";

export const metadata: Metadata = {
  title: "Games store center by M11",
  description: "The biggest gaming center for all gamers for all platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased h-screen">
        <GridContainer cols={12}>
          {/* Render your children here */}
          <div className="col-span-2 bg-yellow-500">hello</div>
          <div className="col-span-10 bg-red-600">content</div>
        </GridContainer>
      </body>
    </html>
  );
}
