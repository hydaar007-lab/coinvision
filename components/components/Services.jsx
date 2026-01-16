import React from "react";

export default function Services() {
  const services = [
    {
      title: "CEX Listings",
      description: "Get listed on top centralized exchanges to boost liquidity and credibility."
    },
    {
      title: "CMC & CG Listing",
      description: "CoinMarketCap and CoinGecko listing services for your crypto project."
    },
    {
      title: "Community Management & Moderator",
      description: "Build and manage a strong, active community across Telegram, Discord, and more."
    },
    {
      title: "PR & Media Ads",
      description: "Professional PR campaigns and media advertising to promote your project worldwide."
    }
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
