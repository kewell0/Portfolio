import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./globals.css";

export const metadata = {
  title: "CALEB | Frontend Developer",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
