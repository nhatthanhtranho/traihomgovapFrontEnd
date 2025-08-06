'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Typography } from '@mui/material';

import CoffinCard from './CoffinCard';
import { formatLink } from '@/utils/formatLink';

// --- TYPES ---
type CoffinItem = {
  title: string;
  banner: string;
  description: string;
};

interface CoffinSectionProps {
  customCoffinData?: CoffinItem[];
}

// --- ARROWS ---
const Arrow = ({ direction, onClick }: { direction: 'left' | 'right'; onClick?: () => void }) => {
  const isLeft = direction === 'left';
  return (
    <div
      onClick={onClick}
      className={`absolute md:flex hidden ${isLeft ? '-left-10' : '-right-10'} top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow hover:bg-gray-100 transition`}
      style={{ width: 40, height: 40 }}
    >
      <svg
        className="w-full h-full text-gray-800"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isLeft ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </div>
  );
};

// --- SLIDER SETTINGS ---
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  swipe: true,
  draggable: false,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow direction="left" />,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

// --- MAIN COMPONENT ---
export default function CoffinSection({ customCoffinData }: CoffinSectionProps) {
  const [data, setData] = useState<CoffinItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

 const loadCoffinData = async () => {
  try {
    const importedData = await import('@/data/coffin-data.json');
    const jsonData = importedData.default as CoffinItem[];
    setData(jsonData.slice(0, 9));
  } catch (error) {
    console.error('Failed to load coffin data:', error);
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    if (customCoffinData && customCoffinData.length > 0) {
      setData(customCoffinData.slice(0, 9));
      setIsLoading(false);
    } else {
      loadCoffinData();
    }
  }, [customCoffinData]);

  const renderCoffinCards = useMemo(() => {
    const list = isLoading ? Array.from({ length: 6 }) : data;

    return list.map((item: any, index) => (
      <div className="px-4" key={index}>
        <CoffinCard
          title={item?.title || ''}
          url=""
          bannerURL={item?.banner || ''}
          description={item?.description || ''}
          isLoading={isLoading}
        />
      </div>
    ));
  }, [data, isLoading]);

  const descriptionShort =
    'Dịch vụ cung cấp đa dạng áo quan từ truyền thống đến hiện đại, được chọn lọc kỹ lưỡng để đảm bảo sự trang nghiêm và tôn kính trong lễ tiễn đưa';

  const descriptionFull =
    'Dịch vụ cung cấp đa dạng các loại áo quan phù hợp với nhu cầu và điều kiện của từng gia đình. Từ áo quan gỗ truyền thống, áo quan cao cấp chạm khắc tinh xảo đến các mẫu hiện đại bằng chất liệu bền đẹp, mỗi loại đều được lựa chọn kỹ lưỡng nhằm đảm bảo sự trang nghiêm và tôn kính trong nghi lễ tiễn đưa người thân.';

  return (
    <div className="container mx-auto px-3 py-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Các Loại Áo Quan</h1>
        <p className="md:hidden text-gray-600 text-center text-lg mx-auto max-w-4xl mb-4">
          {descriptionShort}
        </p>
        <p className="hidden md:block text-gray-600 text-center text-lg mx-auto max-w-4xl mb-4">
          {descriptionFull}
        </p>
        <Slider {...sliderSettings} className="py-2 mx-auto relative">
          {renderCoffinCards}
        </Slider>
      </div>
      {!isLoading && (
        <Link href={formatLink('/cac-loai-ao-quan')}>
          <div className="rounded-full custom-box-shadow-1 cursor-pointer mt-10 w-fit mx-auto px-6 py-2 bg-gray-800">
            <Typography variant="body1" fontWeight={700} color="white">
              Xem tất cả
            </Typography>
          </div>
        </Link>
      )}
    </div>
  );
}
