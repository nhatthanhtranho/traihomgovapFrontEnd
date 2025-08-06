import serviceData from '@/data/service-data.json';
import ServiceCard from '@/components/home/ServiceSection/ServiceCard';
import { Metadata } from 'next';
import { useMemo } from 'react';
import ProductSection from '@/components/home/Product/ProductSection';

export const metadata: Metadata = {
  title: 'Dịch vụ thêm',
};

export default function Page() {
  const renderCards = useMemo(() => {
    return serviceData.map(item => (
      <div key={item.title} className="w-full ">
        <ServiceCard url="" title={item.title} bannerURL={item.banner} content={item.content} />
      </div>
    ));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Dịch Vụ Thêm
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Ngoài các gói dịch vụ chính, <strong>Trại Hòm Sinh Phúc Thọ</strong> còn cung cấp nhiều
          dịch vụ thêm nhằm hỗ trợ gia đình tổ chức tang lễ một cách trọn vẹn và chu đáo. Từ trang
          trí không gian tang lễ, in ấn thiệp tang, hình thờ, băng rôn cho đến việc thuê ban nhạc,
          đội kèn lễ nghi, xe đưa rước thân nhân hay chuẩn bị lễ vật cúng tế, tất cả đều được thực
          hiện cẩn thận, đúng nghi thức. Chúng tôi cũng nhận tổ chức các lễ cầu siêu, cúng thất,
          cúng 49 ngày theo yêu cầu, giúp gia đình giảm bớt lo toan và an tâm trong thời khắc tiễn
          biệt người thân.
        </p>{' '}
        <div className="grid grid-cols-3 gap-6 mt-10 mx-4 ">{renderCards}</div>
        <ProductSection />
      </div>
    </div>
  );
}
