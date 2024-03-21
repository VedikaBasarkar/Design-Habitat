// "use client";
import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const metadata = {
  title: "Design Habitat",
  description: "Design Habitat is a design firm",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
          {children}
        <Footer />
        </body>
    </html>
  );
}
