import React from 'react';
import { Sms, Call, Youtube, Location, Facebook, Book } from 'iconsax-react';
import { Theme, SxProps } from '@mui/material';
import Link from 'next/link';
import { formatLink } from '@/utils/formatLink';

interface PropTypes {
  sx?: SxProps<Theme>;
  className?: string;
}

const Footer: React.FC<PropTypes> = _ => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-10 space-y-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 lg:pr-8 lg:col-span-3">
            <div className="flex items-start">
              <img
                src="https://sinhphuctho.com/logo.svg"
                alt="Sinh Phúc Thọ"
                width={50}
                className="mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">Trại Hòm Gò Vấp</h2>
                <p className="text-sm text-gray-700 font-semibold">
                  Tận Tình - Chuyên Nghiệp - Minh Bạch
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Với bề dày hơn 20 năm hoạt động, <strong>Trại Hòm Gò Vấp</strong> tự hào là một trong
              những đơn vị tổ chức tang lễ trọn gói đáng tin cậy hàng đầu tại TP. Hồ Chí Minh, luôn
              đồng hành cùng các gia đình trong giờ phút tiễn biệt thiêng liêng."
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
              <Location size={18} className="mt-0.5 text-primary" />
              <span>
                <strong>Địa chỉ:</strong> Số 119 Nguyễn Du, P7, Gò Vấp, HCM
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
              <Call size={18} className="mt-0.5 text-primary" />
              <span>
                <strong>Liên hệ:</strong> 0913.673.661 (Thanh Thời)
              </span>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-2">Dịch Vụ An Táng</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                ['An Táng Tiết Kiệm', '/dich-vu-tang-le-tron-goi/goi-tiet-kiem'],
                ['An Táng Tiêu Chuẩn', '/dich-vu-tang-le-tron-goi/goi-tieu-chuan'],
                ['An Táng Trang Trọng', '/dich-vu-tang-le-tron-goi/goi-trang-trong'],
                ['An Táng Cao Cấp', '/dich-vu-tang-le-tron-goi/goi-cao-cap'],
                ['An Táng Phúc Thọ', '/dich-vu-tang-le-tron-goi'],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={formatLink(href)} className="underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-2">Dịch Vụ Hỏa Táng</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                ['Hỏa Táng Tiêu Chuẩn', '/dich-vu-tang-le-tron-goi/goi-tieu-chuan'],
                ['Hỏa Táng Trang Trọng', '/dich-vu-tang-le-tron-goi/goi-trang-trong'],
                ['Hỏa Táng Tâm An', '/dich-vu-tang-le-tron-goi/goi-tam-an'],
                ['Hỏa Táng Vĩnh Hằng', '/dich-vu-tang-le-tron-goi/goi-vinh-hang'],
                ['Hỏa Táng Cao Cấp', '/dich-vu-tang-le-tron-goi/goi-cao-cap'],
                ['Hỏa Táng Phúc Thọ', '/dich-vu-tang-le-tron-goi'],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={formatLink(href)} className="underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Book size={20} /> Mã số hộ KD 8408782580, cấp ngày 12/4/2021
              </li>
              <li className="flex items-start gap-2">
                <Location size={20} /> 119 Nguyễn Du, P7, Gò Vấp, HCM
              </li>
              <li className="flex items-start gap-2">
                <Sms size={20} /> sinhphuctho@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <Call size={20} /> 0913.673.661 (Thanh Thời)
              </li>
              <li className="flex items-start gap-2">
                <Call size={20} /> 0986.124.780 (Kim Hương)
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="rounded overflow-hidden shadow-sm">
          <iframe
            loading="lazy"
            title="bản đồ google đến cơ sở mai táng"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.784888837036!2d106.6855495!3d10.827767399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b52b0747d7%3A0x70be9d86ee714e69!2zMTE5IMSQLiBOZ3V5w6rMg24gRHUsIFBoxrDhu51uZyAxLCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMA!5e0!3m2!1svi!2s!4v1751181897050!5m2!1svi!2s"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 text-sm text-gray-600 gap-4">
          <span>© 2024 - Cơ Sở Mai Táng Trại Hòm Gò Vấp. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook variant="Bold" className="hover:text-primary" />
            </a>
            <a href="#" aria-label="Youtube" target="_blank" rel="noreferrer">
              <Youtube variant="Bold" className="hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
