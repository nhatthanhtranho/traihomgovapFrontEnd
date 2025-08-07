'use client';

import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useEffect, useState, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

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
  nextArrow: <div></div>,
  prevArrow: <div></div>,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

type ProductItem = {
  type: string;
  url: string;
  name: string;
  price: string;
  banner: string;
  description: string;
};

export default function ProductSection() {
  const [data, setData] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonModule = await import('@/data/products-data.json');
        setData(jsonModule.default);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const cremationData = useMemo(
    () => data.filter(d => d.type === 'Hỏa táng'),
    [data]
  );
  const burialData = useMemo(
    () => data.filter(d => d.type === 'An táng'),
    [data]
  );

  const renderSlider = (items: ProductItem[], isLoading: boolean) => {
    const displayItems = isLoading ? Array.from({ length: 4 }) : items;

    return (
      <Slider {...settings} className="py-2 mx-auto relative">
        {displayItems.map((item: any, index) => (
          <div key={index} className="p-2">
            <ProductCard
              type={item?.type || ''}
              url={item?.url || '#'}
              alt={item?.alt}
              name={item?.name || ''}
              price={item?.price || ''}
              banner={item?.banner || ''}
              description={item?.description || ''}
              isLoading={isLoading}
            />
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      {/* Cremation Section */}
      <div className="w-full py-16">
        <div className="container px-5 mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {isLoading ? <Skeleton width={300} height={32} /> : 'Dịch Vụ Hỏa Táng Trọn Gói'}
          </h1>
          <p className="text-gray-600 text-lg mx-auto max-w-4xl mb-4">
            {isLoading ? <Skeleton count={2} /> : (
              <>
                <strong>Trại Hòm Gò Vấp</strong> cung cấp các gói dịch vụ <strong>hỏa táng</strong> chuyên nghiệp, tận tâm, với các gói dịch vụ <strong>linh hoạt</strong>, hỗ trợ gia đình tổ chức lễ tang một cách <strong>trang nghiêm</strong> và <strong>ý nghĩa</strong>.
              </>
            )}
          </p>
          {renderSlider(cremationData, isLoading)}
        </div>
      </div>

      {/* Burial Section */}
      <div className="bg-gray-50 w-full py-16">
        <div className="container px-5 mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {isLoading ? <Skeleton width={300} height={32} /> : 'Các Gói An Táng Trọn Gói'}
          </h1>
          <p className="text-gray-600 text-lg mx-auto max-w-4xl mb-4">
            {isLoading ? <Skeleton count={2} /> : (
              <>
                Sinh Phúc Thọ hỗ trợ toàn diện lễ an táng theo nghi thức truyền thống, với quy trình
                chuyên nghiệp, tận tâm. <strong>Gói dịch vụ linh hoạt</strong>, phù hợp nhiều nhu cầu,
                giúp gia đình tiễn biệt người thân <strong>trang nghiêm</strong> và <strong>ý nghĩa</strong>.
              </>
            )}
          </p>
          {renderSlider(burialData, isLoading)}
        </div>
      </div>
    </>
  );
}
