import "./globals.css";

export const metadata = {
  title: "Oi Brewery",
  description: "Crafted with passion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0 bg-light text-gray-900" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
