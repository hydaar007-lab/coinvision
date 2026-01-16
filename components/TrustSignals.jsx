import React from "react";

export default function TrustSignals() {
  const metrics = [
    { name: "Active Communities", value: "120k+" },
    { name: "Projects Helped", value: "45+" },
    { name: "Media Campaigns", value: "30+" }
  ];

  return (
    <section className="trust">
      <h2>Trust Signals</h2>
      <div className="grid">
        {metrics.map((m, index) => (
          <div className="card" key={index}>
            <h3>{m.value}</h3>
            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
