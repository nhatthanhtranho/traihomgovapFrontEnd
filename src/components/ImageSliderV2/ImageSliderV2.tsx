'use client';

import React, { useMemo, useState } from 'react';

interface PropTypes {
  images: string[];
}

const ImageSlideV2: React.FC<PropTypes> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const renderMiniImages = useMemo(() => {
    return images.slice(0, 6).map((item, index) => (
      <div
        key={item}
        className="w-[65px] h-[65px] cursor-pointer rounded-lg shadow-xl overflow-hidden"
        onClick={() => setSelectedImageIndex(index)}
      >
        <img
          className="w-full h-full object-cover"
          src={item}
          alt={`Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp | Mai táng trọn gói giá rẻ hình ${index + 1}`}
        />
      </div>
    ));
  }, [images]);

  return (
    <div className="hidden lg:flex flex-row gap-3 relative h-fit">
      <div className="flex flex-col w-[65px] gap-3">{renderMiniImages}</div>
      <div className="w-[600px] h-[500px] bg-gray-400">
        <img
          className="w-full h-full object-contain"
          src={images[selectedImageIndex]}
          alt="Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp | mai táng trọn gói giá rẻ uy tín"
        />
      </div>
    </div>
  );
};

export default React.memo(ImageSlideV2);
