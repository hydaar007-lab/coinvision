import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div>
        <a
          href="https://t.me/kalid_coinvision"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a
          href="https://x.com/coinvision4?s=21"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          X (Twitter)
        </a>
        <a
          href="https://discord.gg/KzWx6kdw"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
        <a href="mailto:hydaar007@gmail.com" className="btn">
          Email
        </a>
      </div>
    </section>
  );
}
