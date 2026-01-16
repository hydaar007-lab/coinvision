import "./globals.css"; // only if you have globals.css

export const metadata = {
  metadataBase: new URL("https://coinvision.vercel.app"),
  title: "CoinVision | Web3 & Crypto Marketing Agency",
  description:
    "CoinVision helps crypto and Web3 projects grow with marketing, listings, and visibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
