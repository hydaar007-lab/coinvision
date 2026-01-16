"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CoinVision
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A trusted Web3 & Crypto marketing agency helping projects with CEX
        listings, CoinMarketCap & CoinGecko listings, community management, and
        PR & media advertising.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="https://t.me/kalid_coinvision" className="btn">Telegram</a>
        <a href="https://x.com/coinvision4?s=21" className="btn">X (Twitter)</a>
        <a href="https://discord.gg/KzWx6kdw" className="btn">Discord</a>
        <a href="mailto:hydaar007@gmail.com" className="btn">Email</a>
      </motion.div>
    </section>
  );
}
