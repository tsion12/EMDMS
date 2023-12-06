import React from "react";
import ModalImage from "react-modal-image";

class MyImageGallery extends React.Component {
  render() {
    const images = [
      {
        src: "https://example.com/image1.jpg",
        alt: "Image 1",
      },
      {
        src: "https://example.com/image2.jpg",
        alt: "Image 2",
      },
      {
        src: "https://example.com/image3.jpg",
        alt: "Image 3",
      },
    ];

    return (
      <div>
        {images.map((image, index) => (
          <ModalImage
            key={index}
            small={image.src}
            large={image.src}
            alt={image.alt}
            hideDownload={true} 
            hideZoom={true}
          />
        ))}
      </div>
    );
  }
}
export default MyImageGallery;
