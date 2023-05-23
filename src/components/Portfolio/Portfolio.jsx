import React from "react";
import "./Portfolio.css";
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

function Portfolio({ portfolio }) {
  return (
    <main>
      {portfolio.map((item) => (
        <ItemPortfolio
          key={item.id}
          link={item.link}
          title={item.title}
          image={item.image}
        />
      ))}
    </main>
  );
}

export default Portfolio;


