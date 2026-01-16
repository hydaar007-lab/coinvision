import React from "react";

export default function Credibility() {
  const badges = [
    { name: "CMC Ready", description: "Optimized for CoinMarketCap review." },
    { name: "CG Ready", description: "Optimized for CoinGecko review." },
    { name: "Trusted Partner", description: "Building credibility in crypto space." }
  ];

  return (
    <section className="credibility">
      <h2>Our Credibility</h2>
      <div className="grid">
        {badges.map((badge, index) => (
          <div className="card" key={index}>
            <h3>{badge.name}</h3>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
