import "@/app/styles/globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { CartProvider } from "./contexts/CortContext";

export const metadata = {
  title: "Kamandloo",
  description: "test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
