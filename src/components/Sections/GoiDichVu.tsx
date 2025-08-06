'use client';

import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import dynamic from 'next/dynamic';

// Lazy imports
const DetailCard = dynamic(() => import('@/components/DetailCard/DetailCard'));
const ImageSliderV2 = dynamic(() => import('@/components/ImageSliderV2/ImageSliderV2'));
const ProductSection = dynamic(() => import('../home/Product/ProductSection'));
const PhotoGallery = dynamic(() => import('@/components/ImageGallery/ImageGallery'));
const CoffinSection = dynamic(() => import('../home/CoffinSection/CoffinSection'));
const HuCotSection = dynamic(() => import('@/components/Sections/HuCotSection'), { ssr: false });
const LoHoaTangSection = dynamic(() => import('@/components/Sections/LoHoaTangSection'), {
  ssr: false,
});

interface PropTypes {
  data: any;
  anTang?: boolean;
  limit?: number;
}

const GoiDichVu: React.FC<PropTypes> = ({ data, anTang, limit }) => {
  const images = data.images.map((image: string) => ({ src: image }));
  const limitedImages = limit ? images.slice(0, limit) : images;

  const renderDetailCards = useMemo(() => {
    return data.data.map((item: any, index: number) => (
      <Grid item key={index} xs={12} sm={6}>
        <DetailCard items={item.contents} title={item.title} />
      </Grid>
    ));
  }, [data.data]);

  return (
    <>
      <div>
        {/* Desktop Header */}
        <div className="container mx-auto px-4 mb-4 flex-row md:flex hidden">
          <div className="w-1/2">
            <ImageSliderV2 images={data.images} />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{data.name}</h1>
            <p className="text-gray-800 font-bold mb-2 italic">
              {data.price === null ? (
                <>
                  Giá cả: <span className="text-black font-bold">Liên hệ</span>
                </>
              ) : (
                <>Giá chỉ từ: {data.price}</>
              )}
            </p>
            <p>
              <span dangerouslySetInnerHTML={{ __html: data.introduction }} />
              <br />
              {data.name !== 'Tang Lễ Thiết Kế Phúc Thọ' && (
                <span>
                  Vui lòng liên hệ hotline: <strong>0913.673.661</strong> để được tư vấn chi tiết.
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="px-4 container mx-auto md:hidden">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{data.name}</h1>
          <p className="text-gray-800 font-bold mb-2 italic">
            {data.price === null ? (
              <>
                Giá cả: <span className="text-black font-bold">Liên hệ</span>
              </>
            ) : (
              <>Giá chỉ từ: {data.price}</>
            )}
          </p>
          <p>
            <span dangerouslySetInnerHTML={{ __html: data.introduction }} />
            <br />
            {data.name !== 'Tang Lễ Thiết Kế Phúc Thọ' && (
              <span>
                Vui lòng liên hệ hotline: <strong>0913.673.661</strong> để được tư vấn chi tiết.
              </span>
            )}
          </p>
        </div>

        {/* Chi tiết gói dịch vụ */}
        <div className="p-4 container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Chi Tiết Các Hạng Mục
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderDetailCards}
          </div>

          <CoffinSection customCoffinData={data?.coffin} />

          {!anTang && (
            <>
              <HuCotSection />
              <LoHoaTangSection />
            </>
          )}
        </div>

        {/* Hình ảnh tham khảo */}
        <section className="bg-gray-50 md:py-16 mt-10">
          <div className="container mx-auto p-4 pb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5 text-center">
              Hình Ảnh Tham Khảo
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto md:mb-12 text-center">
              Hình ảnh giúp quý khách hình dung rõ hơn về không gian tổ chức, trang trí lễ tang, áo
              quan, xe tang, và các vật phẩm đi kèm trong gói dịch vụ.
            </p>
            <div className="px-4">
              <PhotoGallery photos={limitedImages} />
            </div>
          </div>
        </section>
      </div>

      {/* Thông tin thêm */}
      <div className="p-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5 text-center">
          Thông Tin Thêm
        </h2>
        <p className="text-gray-600">
          Ngoài các dịch vụ trên, <strong>cơ Sở Mai Táng Sinh Phúc Thọ</strong> còn hỗ trợ các dịch
          vụ đi kèm tang lễ khác theo nhu cầu. Vui lòng liên hệ{' '}
          <a href="tel:0913673661" className="text-blue-600 font-bold">
            0913.673.661
          </a>{' '}
          để được tư vấn chi tiết.
        </p>
      </div>

      <ProductSection />
    </>
  );
};

export default React.memo(GoiDichVu);
