import React, { useState } from "react";
import "./product.css";

function Product({  image, title, description, category, rating }) {

  const breaf = (text) => {
    const breafText = text.slice(0, 15);
    return breafText;
  };
  const [dote, setDote] = useState(breaf(description));
  const kopBtn = () => {
    setDote(description);
  };
  const kamBtn = () => {
    setDote(breaf(description));
  };

  return (
    <div className="productList">
      <img  height={"500px"} src={image} alt={title} />
      <h5>
        name: <p>{title}</p>
      </h5>
      <h5>
        description:
        <p>
          {dote}
          {dote.length > 16 ? (
            <span onClick={kamBtn}> / </span>
          ) : (
            <span onClick={kopBtn}>...</span>
          )}
        </p>
      </h5>
      <h5>
        category: <p>{category}</p>
      </h5>
      <h5>
        reiting: <p>{rating.rate}</p>
      </h5>
    </div>
  );
}

export default Product;
