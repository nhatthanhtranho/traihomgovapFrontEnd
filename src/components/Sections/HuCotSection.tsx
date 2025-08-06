'use client';

import React, { useEffect, useMemo, useState } from 'react';
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

const HuCotSection: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Lazy load JSON data
  useEffect(() => {
    const fetchData = async () => {
      const importedData = await import('@/data/hucot.json');
      setData(importedData.default || []);
      setLoading(false);
    };
    fetchData();
  }, []);

  const renderHuCot = useMemo(() => {
    if (loading) {
      return Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="p-2">
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
        isContant={true}
        alt={item.title}
      />
    ));
  }, [loading, data]);

  return (
    <section className="container mx-auto px-3 py-16" id="hu-cot">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
        Hủ Cốt Tham Khảo
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mb-12 text-center">
        Bộ sưu tập hình ảnh hủ cốt với nhiều kiểu dáng, chất liệu và họa tiết trang trọng, phù hợp
        với nhu cầu, tín ngưỡng và sở thích của từng gia đình.
      </p>

      {/* Mobile carousel */}
      <div className="md:hidden sm:block overflow-x-hidden py-2">
        <Slider {...settings} className="p-2 mx-auto relative">
          {renderHuCot}
        </Slider>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 overflow-x-hidden p-2">
        {renderHuCot}
      </div>
    </section>
  );
};

export default React.memo(HuCotSection);
