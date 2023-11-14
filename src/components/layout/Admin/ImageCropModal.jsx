import React, { useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Modal from "react-modal";
import Cropper from "react-easy-crop";
import { BsZoomIn } from "react-icons/bs";
import { FaRotate } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";

function ImageCropModal() {
  const [openModal, setOpenModal] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = (shouldZoom) => {
    setIsZoomed(shouldZoom);
  };

  const handleRotate = () => {
    setRotation((rotation + 90) % 360);
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Open Image</button>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="relative">
          <div className="absolute mt-32 ml-80 flex justify-center ">
            <button
              onClick={handleRotate}
              className="text-3xl text-white px-4 py-2">
              <FaRotate />
            </button>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-3xl text-white px-4 py-2">
              <BsZoomIn />
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="text-3xl text-white px-4 py-2">
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="flex items-center justify-center h-screen">
            <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
              <img
                src="https://images.unsplash.com/photo-1698106834602-04a045b477e1?auto=format&fit=crop&q=80&w=2200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Zoomable Image"
                className="w-[500px] max-h-full transform rotate-[{rotation}deg] rounded-xl"
              />
            </ControlledZoom>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ImageCropModal;
