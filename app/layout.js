import "./globals.css";

export const metadata = {
  title: "Canoly",
  description: "Wordwall-style quiz games, generated fast."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
