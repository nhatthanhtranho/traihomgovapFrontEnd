import FacilitySection from '@/components/home/FacilitySection/FacilitySection';
import Introduction from '@/components/home/Introduction';
import { Metadata } from 'next';
import albumImages from '@/data/album.json';

export const metadata: Metadata = {
  title: 'Liên hệ',
};

export default function Page() {
  return (
    <div className="flex justify-center bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-gray-600 text-lg mb-8">
              Nếu quý gia đình đang cần tư vấn hoặc hỗ trợ tổ chức tang lễ, xin đừng ngần ngại liên
              hệ với
              <strong> Trại Hòm Sinh Phúc Thọ</strong>. Chúng tôi luôn sẵn sàng lắng nghe và đồng
              hành 24/7 để giúp quý vị vượt qua thời khắc khó khăn một cách nhẹ nhàng và trọn vẹn
              nhất. Hãy để chúng tôi thay bạn lo liệu mọi nghi thức – từ khâm liệm, nhập quan đến di
              quan, hỏa táng – với sự tận tâm và tôn kính tuyệt đối.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-left shadow-md inline-block w-full max-w-xl">
            <p className="mb-3">
              <span className="font-semibold">📞 Hotline (24/7):</span>{' '}
              <a href="tel:0913673661" className="text-blue-600 hover:underline">
                0913 673 661
              </a>
            </p>
            <p className="mb-3">
              <span className="font-semibold">🏠 Địa chỉ:</span> 119 Đường Nguyễn Du, Phường 1 ,
              Quận Gò Vấp, TP.HCM
            </p>
            <p className="mb-3">
              <span className="font-semibold">✉️ Email:</span>{' '}
              <a href="mailto:nhatthanhtranho@gmail.com" className="text-blue-600 hover:underline">
                nhatthanhtranho@gmail.com
              </a>
            </p>
            <p className="mb-3">
              <span className="font-semibold">🌐 Website:</span>{' '}
              <a
                href="https://www.sinhphuctho.com"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                www.sinhphuctho.com
              </a>
            </p>
            <p>
              <span className="font-semibold">📱 Zalo:</span>
              <a
                href="https://zalo.me/0913673661"
                target="_blank"
                className="text-blue-600 hover:underline ml-2"
              >
                0913 673 661
              </a>
            </p>
          </div>
        </div>

        <Introduction showCoffin={false} />
        <FacilitySection images={albumImages} />
      </div>
    </div>
  );
}
