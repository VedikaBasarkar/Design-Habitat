// import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
// import {Cloudinary} from "@cloudinary/url-gen";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Habita",
  description: "Design Habitat is Design education firm",
};


export default function RootLayout({ children }) {
  // const cld = new Cloudinary({cloud: {cloudName: 'db3h7h0pa'}});
  return (
    <html lang="en">
      <body className="">
        <Navigation />
        {children}
        
        <Footer />
        </body>
    </html>
  );
}
