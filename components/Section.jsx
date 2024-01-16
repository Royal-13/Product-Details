import React, { useState } from "react";
import ProductText from "./ProductText";

function Section() {
  const [mainImageSrc, setMainImageSrc] = useState("/image-product-1.jpg");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const thumbnailData = [
    { id: 1, src: "/image-product-1-thumbnail.jpg" },
    { id: 2, src: "/image-product-2-thumbnail.jpg" },
    { id: 3, src: "/image-product-3-thumbnail.jpg" },
    { id: 4, src: "/image-product-4-thumbnail.jpg" },
  ];

  const changeImage = (newImageSrc, index) => {
    setMainImageSrc(newImageSrc);
    setSelectedImageIndex(index);
  };

  return (
    <section className="product">
      <article className="productImage">
        <figure className="imageCar">
          <img id="mainImage" src={mainImageSrc} alt="product" />
        </figure>
        <figure className="imageThumb">
          {thumbnailData.map((thumbnail, index) => (
            <img
              key={thumbnail.id}
              id={`imageThumb${thumbnail.id}`}
              src={thumbnail.src}
              alt="product"
              onClick={() =>
                changeImage(`/image-product-${index + 1}.jpg`, index)
              }
              style={{
                border:
                  selectedImageIndex === index ? "2px solid orange" : "none",
                opacity: selectedImageIndex === index ? 1 : 0.5,
              }}
            />
          ))}
        </figure>
      </article>
      <ProductText/>
    </section>
  );
}

export default Section;
