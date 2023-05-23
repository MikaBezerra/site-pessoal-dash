import React from "react";
import "./ItemPortfolio.css";

function ItemPortfolio({ link, title, image }) {
  return (
    <div className="item-portfolio">
      <a href={link} target="_blank">
        <img src={image} />
        <p>{title}</p>
      </a>
    </div>
  );
}

export default ItemPortfolio;
