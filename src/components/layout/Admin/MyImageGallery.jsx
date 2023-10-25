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
      // Add more image objects as needed
    ];

    return (
      <div>
        {images.map((image, index) => (
          <ModalImage
            key={index}
            small={image.src}
            large={image.src}
            alt={image.alt}
            hideDownload={true} // Optional: Hide the download button
            hideZoom={true} // Optional: Hide the zoom button
          />
        ))}
      </div>
    );
  }
}
export default MyImageGallery;
