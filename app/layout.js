import "./globals.css";

export const metadata = {
  title: "CoinVision | Web3 & Crypto Marketing Agency",
  description:
    "CoinVision is a Web3 & crypto marketing agency providing CEX listings, CoinMarketCap & CoinGecko listings, community management, and PR media advertising.",
  keywords: [
    "CoinVision",
    "Web3 marketing",
    "crypto marketing agency",
    "CEX listings",
    "CoinMarketCap listing",
    "CoinGecko listing"
  ],
  openGraph: {
    title: "CoinVision",
    description: "Trusted Web3 & Crypto Marketing Agency",
    siteName: "CoinVision",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
