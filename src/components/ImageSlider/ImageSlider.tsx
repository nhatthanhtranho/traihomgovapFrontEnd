'use client';

import React from 'react';
import Image from 'next/image';

interface PropTypes {}

const SimpleSlider: React.FC<PropTypes> = props => {
  return (
    <div className="w-full h-64 md:h-96 relative overflow-hidden">
      {/* Image */}
      <Image
        fill
        className="object-cover object-center"
        src="./assets/images/home/products/co-so-mai-tang-trai-hom-sinh-phuc-tho-hinh-6.webp"
        alt="Banner Image"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text on top */}
      <div className="absolute inset-0 z-20 md:p-16 p-4 pt-8">
        <p className="text-lg md:text-xl tracking-wide font-bold text-white">Dịch Vụ Tang Lễ</p>
        <h1 className="text-4xl md:text-5xl tracking-wide font-bold text-white">Trại Hòm Gò Vấp</h1>
        <div className='mt-8'>
          <a
            href="https://zalo.me/0913673661"
            className="bg-white text-lg font-semibold text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Liên hệ với chúng tôi
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
