'use client';

import React, { useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Slider from '@ant-design/react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Lazy import ServiceCard
const ServiceCard = dynamic(() => import('@/components/home/ServiceSection/ServiceCard'), {
  loading: () => (
    <div className="p-2">
      <Skeleton height={200} borderRadius={8} />
      <div className="mt-2">
        <Skeleton height={24} width="80%" />
        <Skeleton height={18} width="60%" />
      </div>
    </div>
  ),
  ssr: false,
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  swipe: true,
  draggable: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const LoHoaTangSection: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Lazy import JSON
 useEffect(() => {
   const fetchData = async () => {
     const importedData = await import('@/data/lohoatang.json');
     setData(importedData.default || []);
     setLoading(false);
   };
   fetchData();
 }, []);

  const renderItems = useMemo(() => {
    if (loading) {
      return Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="p-2">
          <Skeleton height={200} borderRadius={8} />
          <div className="mt-2">
            <Skeleton height={24} width="80%" />
            <Skeleton height={18} width="60%" />
          </div>
        </div>
      ));
    }

    return data.map((item, index) => (
      <ServiceCard
        key={index}
        title={item.title}
        content={item.content}
        url=""
        bannerURL={item.banner}
        alt={item.title}
      />
    ));
  }, [data, loading]);

  return (
    <section className="container mx-auto px-3 py-16" id="lo-hoa-tang">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">Lò Hỏa Táng</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mb-12 text-center">
        Lò Hỏa Táng là nơi thực hiện nghi lễ hỏa táng trang nghiêm, sử dụng công nghệ hiện đại đảm
        bảo vệ sinh, an toàn và thân thiện với môi trường.
      </p>

      {/* Mobile */}
      <div className="md:hidden sm:block overflow-x-hidden">
        <Slider {...settings} className="p-2 mx-auto relative">
          {renderItems}
        </Slider>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-2 overflow-x-hidden">
        {renderItems}
      </div>
    </section>
  );
};

export default React.memo(LoHoaTangSection);
