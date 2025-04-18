import React, { useState } from "react";

function ImageSlider(props: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(props.images[0]);
  return (
    <div className="relative ">
      <img
        src={currentImage}
        alt=""
        className="h-40 w-full object-contain mb-4 mt-4"
      />
      <div className="absolute bottom-0 right-0 bg-gray-900 w-fit rounded-full flex flex-row gap-1 p-1">
        {props.images.map((v, i) => {
          const isSelected = currentImage === v;
          return (
            <svg
              key={i}
              className="w-4 h-4 cursor-pointer"
              fill={isSelected ? "#ffffff" : "#808080"}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              stroke={isSelected ? "#ffffff" : "#808080"}
              onClick={() => setCurrentImage(v)}
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
              </g>
            </svg>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
