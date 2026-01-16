import React from "react";

export default function CaseStudies() {
  const cases = [
    { title: "Project Alpha", result: "Successfully listed on Binance and CMC" },
    { title: "Project Beta", result: "Community grew to 50k+ users in 3 months" },
    { title: "Project Gamma", result: "Executed PR campaign with top crypto media" }
  ];

  return (
    <section className="case-studies">
      <h2>Case Studies</h2>
      <div className="grid">
        {cases.map((c, index) => (
          <div className="card" key={index}>
            <h3>{c.title}</h3>
            <p>{c.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
