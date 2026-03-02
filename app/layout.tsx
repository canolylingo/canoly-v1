import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canoly",
  description: "Create Fun Language Games in Seconds with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en">
      <body style={{ backgroundColor: "#050712" }}>
        {children}
      </body>
    </html>
  );
}
