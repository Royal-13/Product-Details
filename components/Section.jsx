import React, { useState } from "react";

function Section() {
    const [mainImageSrc, setMainImageSrc] = useState("/image-product-1.jpg");
  
    const thumbnailData = [
      { id: 1, src: "/image-product-1-thumbnail.jpg", onClick: () => changeImage("/image-product-1.jpg") },
      { id: 2, src: "/image-product-2-thumbnail.jpg", onClick: () => changeImage("/image-product-2.jpg") },
      { id: 3, src: "/image-product-3-thumbnail.jpg", onClick: () => changeImage("/image-product-3.jpg") },
      { id: 4, src: "/image-product-4-thumbnail.jpg", onClick: () => changeImage("/image-product-4.jpg") },
    ];
  
    const changeImage = (newImageSrc) => {
      setMainImageSrc(newImageSrc);
    };
  
    return (
        <section className="product">
          <article className="productImage">
            <figure className="imageCar">
              <img id="mainImage" src={mainImageSrc} alt="product" />
            </figure>
            <figure className="imageThumb">
              {thumbnailData.map((thumbnail) => (
                <img
                  key={thumbnail.id}
                  id={`imageThumb${thumbnail.id}`}
                  src={thumbnail.src}
                  alt="product"
                  onClick={thumbnail.onClick}
                />
              ))}
            </figure>
          </article>

        <article className="productText">
          <p className="companyText">SNEAKER COMPANY</p>
          <h1 className="companyHeading">
            Fall Limited Edition
            <br />
            Sneakers
          </h1>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <article className="price">
            <h2>$125.00</h2>
            <p>50%</p>
          </article>

          <span className="oldPrice">$250.00</span>

          <section className="btn">
            <article className="count">
              <figure className="fixMinus">
                <img src="/icon-minus.svg" />
              </figure>
              <span>0</span>
              <figure className="fixPlus">
                <img src="/icon-plus.svg" />
              </figure>
            </article>
            <button className="btnS">
              <img src="/icon-cart1.svg" />
              Add to cart
            </button>
          </section>
        </article>
      </section>
  );
}

export default Section;
