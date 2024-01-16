import React, { useState } from "react";

function ProductText() {
    const [productQuantity, setProductQuantity] = useState(0);
    const [productPrice, setProductPrice] = useState(125);
    const handleDecrement = () => {
        if (productQuantity > 0) {
          setProductQuantity(productQuantity - 1);
        }
      };
    
      const handleIncrement = () => {
        setProductQuantity(productQuantity + 1);
      };

  return (
    <article className="productText">
      <p className="companyText">SNEAKER COMPANY</p>
      <h1 className="companyHeading">
        Fall Limited Edition
        <br />
        Sneakers
      </h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <article className="price">
        <h2>${`${productPrice}`}.00</h2>
        <p>50%</p>
      </article>

      <span className="oldPrice">$250.00</span>

      <section className="btn">
        <article className="count">
          <figure className="fixMinus">
            <img src="/icon-minus.svg" onClick={handleDecrement} />
          </figure>
          <span>{productQuantity}</span>
          <figure className="fixPlus">
            <img src="/icon-plus.svg" onClick={handleIncrement} />
          </figure>
        </article>
        <button className="btnS">
          <img src="/icon-cart1.svg" />
          Add to cart
        </button>
      </section>
    </article>
  );
}

export default ProductText;
