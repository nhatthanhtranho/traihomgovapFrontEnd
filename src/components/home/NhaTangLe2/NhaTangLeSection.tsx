'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import data from './data.json';

// Dynamically load ServiceCard and Slider
const ServiceCard = dynamic(() => import('./CardNhaTangLe'), {
  ssr: false,
  loading: () => <Skeleton height={300} className="rounded-xl" />,
});
const Slider = dynamic(() => import('react-slick'), { ssr: false });

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
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function ServiceSection() {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate data fetch
    return () => clearTimeout(timer);
  }, []);

  const renderSkeletons = (count: number) =>
    Array.from({ length: count }).map((_, idx) => (
      <div key={idx}>
        <Skeleton height={256} className="rounded-t-xl mb-2" />
        <Skeleton height={24} width="70%" />
        <Skeleton height={16} width="60%" />
      </div>
    ));

  const renderServiceCards = () =>
    data.map(item => (
      <ServiceCard
        key={item.title}
        title={item.title}
        content={item.content}
        url=""
        bannerURL={item.thumbnail}
        isURLLink={true}
        alt={item.alt} // Use item.alt if available, otherwise fallback to title
        isLoading={loading}
      />
    ));

  return (
    <section className="py-16 px-3" aria-labelledby="service-heading">
      <div className="container mx-auto">
        <h1
          id="service-heading"
          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center"
        >
          Nhà Tang Lễ Thành Phố
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mb-12 mb-6 text-center">
          <strong>Trại Hòm Gò Vấp</strong> cung cấp dịch vụ tang lễ trọn gói tại nhiều địa điểm uy tín
          như: Nhà Tang Lễ Gò Vấp, Nhà Tang Lễ Bộ Quốc Phòng, Nhà Tang Lễ Chùa Bồ Đề và các nhà tang
          lễ khác trên địa bàn TP. Hồ Chí Minh và các tỉnh thành khác theo yêu cầu của gia đình.
        </p>

        {/* Mobile View: Carousel */}
        {isClient && (
          <div className="md:hidden sm:block overflow-x-hidden p-2">
            <Suspense fallback={<div className="space-y-4">{renderSkeletons(2)}</div>}>
              <Slider {...settings} className="py-2 mx-auto relative">
                {renderServiceCards()}
              </Slider>
            </Suspense>
          </div>
        )}

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
          {loading ? renderSkeletons(6) : renderServiceCards()}
        </div>
      </div>
    </section>
  );
}
