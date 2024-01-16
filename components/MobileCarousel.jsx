import React, { useState } from "react";

function MobileCarousel() {
  const imageData = [
    { id: 1, src: "/image-product-1.jpg" },
    { id: 2, src: "/image-product-2.jpg" },
    { id: 3, src: "/image-product-3.jpg" },
    { id: 4, src: "/image-product-4.jpg" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageData.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + imageData.length) % imageData.length
    );
  };

  return (
    <article className="productImage">
      <figure className="imageCar">
        {imageData.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={`product-${image.id}`}
            style={{ display: index === currentImage ? "block" : "none" }}
          />
        ))}
      </figure>
      <img
        src="/icon-previous.svg"
        onClick={prevImage}
        className="previousIcon"
      />
      <img
        src="/icon-next.svg"
        onClick={nextImage}
        className="nextIcon"
      />
    </article>
  );
}

export default MobileCarousel;
