'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import serviceData from '@/data/service-data.json';

// Lazy import only on client
const Slider = dynamic(() => import('react-slick'), { ssr: false });
const ServiceCard = dynamic(() => import('./ServiceCard'), {
  loading: () => <Skeleton height={250} />,
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
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ServiceSection() {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate fetch/loading
    return () => clearTimeout(timer);
  }, []);

  const renderSkeletons = (count: number) =>
    Array.from({ length: count }).map((_, i) => (
      <div key={i}>
        <Skeleton height={200} className="rounded-xl mb-2" />
        <Skeleton height={20} width="80%" />
        <Skeleton height={16} width="60%" />
      </div>
    ));

  const renderServiceCards = () =>
    serviceData.map((item) => (
      <ServiceCard
        key={item.title}
        title={item.title}
        content={item.content}
        alt={item.alt}
        url=""
        bannerURL={item.banner}
      />
    ));

  return (
    <section aria-labelledby="services-heading" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1
          id="services-heading"
          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center"
        >
          Các Gói Dịch Vụ Thêm
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mb-12 text-center">
          Các gói dịch vụ thêm hỗ trợ tang lễ trọn gói, trang nghiêm, gồm xe tang, trang trí, nghi
          lễ tâm linh, linh hoạt theo nhu cầu gia đình.
        </p>

        {/* Mobile: Slick Carousel */}
        {isClient && (
          <div className="md:hidden sm:block overflow-x-hidden">
            <Suspense fallback={<div className="space-y-4">{renderSkeletons(2)}</div>}>
              <Slider {...settings} className="py-2 mx-auto relative">
                {loading ? renderSkeletons(2) : renderServiceCards()}
              </Slider>
            </Suspense>
          </div>
        )}

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
          {loading ? renderSkeletons(6) : renderServiceCards()}
        </div>
      </div>
    </section>
  );
}
