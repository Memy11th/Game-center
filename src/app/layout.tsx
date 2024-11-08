import type { Metadata } from "next";
import "./globals.css";
import GridContainer from "@/components/GridContainer";
import SideNav from "@/components/SideNav";
import Navbar from "@/components/Navbar";

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
      <body className="antialiased min-h-screen ">
        <GridContainer cols={12}>
          <SideNav />
          
          <div className="md:col-span-10 col-span-12 min-h-screen ">
            <Navbar />
            {children}
            </div>
        </GridContainer>
      </body>
    </html>
  );
}
