import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/components";
export const metadata = {
  title: "car hub",
  description: "Discover the best world os cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
