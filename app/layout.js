import "./globals.css";

export const metadata = {
  title: "CoinVision | Web3 & Crypto Marketing Agency",
  description:
    "CoinVision helps crypto projects with CEX listings, CoinMarketCap & CoinGecko listings, community management, PR and media advertising.",
  keywords:
    "CoinVision, crypto marketing, CEX listing, CoinMarketCap listing, CoinGecko listing, web3 marketing",
  openGraph: {
    title: "CoinVision",
    description:
      "Trusted Web3 & Crypto Marketing Agency for CEX, CMC & CG listings.",
    url: "https://coinvision.vercel.app",
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
