'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// ✅ Dynamic imports to optimize bundle
const ProductSection = dynamic(() => import('@/components/home/Product/ProductSection'));
const CoffinSection = dynamic(() => import('./CoffinSection/CoffinSection'));
const BenefitCards = dynamic(() => import('./Benefits').then(mod => mod.BenefitCards), {
  ssr: false,
});

interface IntroductionProps {
  showProduct?: boolean;
  showCoffin?: boolean;
}

export default function Introduction({ showProduct = true, showCoffin = true }: IntroductionProps) {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);

  return (
    <div>
      {/* Section: Về Chúng Tôi */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="container mx-auto px-3">
          <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="relative order-1 md:order-1 flex-1 h-80">
              {!imageLoaded1 && <Skeleton className="w-full h-full" />}
              <Image
                src="/assets/images/funeral.webp"
                alt="Dịch vụ tang lễ Sinh Phúc Thọ"
                fill
                className={`object-contain transition-opacity duration-500 ${imageLoaded1 ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setImageLoaded1(true)}
                priority
              />
            </div>

            {/* Content */}
            <div className="order-2 md:order-2 flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                Về Chúng Tôi
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Trại Hòm Gò Vấp</strong> là đơn vị hàng đầu trong lĩnh vực dịch vụ mai táng tại TP.HCM, với hơn 20 năm kinh nghiệm tổ chức tang lễ trọn gói. Chúng tôi luôn đặt chữ <strong>TÂM</strong> lên hàng đầu, cam kết mang đến dịch vụ tận tình, chuyên nghiệp và chu đáo trong từng chi tiết.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Với hơn 20 năm kinh nghiệm trong việc tổ chức tang lễ</li>
                <li>Đội ngũ nhân viên chuyên nghiệp, được đào tạo bài bản, luôn sẵn sàng hỗ trợ 24/7</li>
                <li>Nghi lễ trang trọng, tuân thủ đúng nghi thức tôn giáo và phong tục truyền thống</li>
                <li>Tối ưu chi phí và thời gian, giúp gia đình an tâm lo hậu sự chu toàn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Product & Coffin (conditional render) */}
      {showProduct && <ProductSection />}
      {showCoffin && <CoffinSection />}

      {/* Section: Tại sao chọn dịch vụ trọn gói */}
      <section className="pb-7 md:py-7 w-full lg:py-16">
        <div className="container mx-auto md:px-6">
          <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Content */}
            <div className="order-2 md:order-1 flex-1 text-gray-600 px-5 md:px-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                Lý Do Nên Chọn Dịch Vụ Mai Táng Trọn Gói
              </h2>
              <p className="text-lg mb-4 line-clamp-4">
                Dịch vụ tại <strong>Trại Hòm Gò Vấp</strong> giúp gia đình tiết kiệm thời gian, giảm bớt lo lắng và nhẹ gánh tinh thần trong lúc tang gia. Chúng tôi cam kết phục vụ tận tâm 24/7, đảm bảo sự chu toàn trong từng nghi lễ và linh hoạt theo mong muốn riêng của mỗi gia đình.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Hỗ trợ tận tình 24/7, sẵn sàng ứng phó mọi tình huống</li>
                <li>Thủ tục pháp lý nhanh chóng, xử lý chuyên nghiệp</li>
                <li>Tôn trọng tín ngưỡng, phong tục của từng gia đình</li>
                <li>Đa dạng gói dịch vụ, linh hoạt theo ngân sách</li>
                <li>Đội ngũ chuyên nghiệp, nhiều kinh nghiệm và tận tâm</li>
                <li>Không gian tổ chức tang lễ trang nghiêm, đầy đủ tiện nghi</li>
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex-1 w-full relative h-64 md:h-72 lg:h-96">
              {!imageLoaded2 && (
                <div className="absolute top-0 left-0 w-full h-full">
                  <Skeleton width="100%" height="100%" />
                </div>
              )}
              <Image
                src="/assets/images/ly-do-nen-chon-dich-vu-mai-tang-tron-goi-trai-hom-go-vap.webp"
                alt="Không gian tang lễ Sinh Phúc Thọ"
                fill
                className={`rounded shadow-lg object-cover object-center transition-opacity duration-500 ${imageLoaded2 ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setImageLoaded2(true)}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Lợi ích - BenefitCards (Slider auto chạy - no SSR) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Tận Tâm Đồng Hành Cùng Gia Quyến
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Chúng tôi mang đến dịch vụ tang lễ chu đáo, trọn vẹn và đầy tình người — để hành trình
              cuối cùng của người thân được thanh thản và ấm áp.
            </p>
          </div>
          <BenefitCards />
        </div>
      </section>
    </div>
  );
}
