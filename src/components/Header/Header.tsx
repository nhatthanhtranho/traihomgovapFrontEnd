'use client';

import { formatLink } from '@/utils/formatLink';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-gray-200 py-2.5 px-4 container mx-auto">
      <div className="flex">
        <div>
          <h2 className="text-xl font-bold">SINH PHÚC THỌ</h2>
          <p className="text-sm text-gray-700 font-semibold">Tận tâm - Chuyên nghiệp - Minh bạch</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Use MUI Icons for better maintainability */}
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          )}
        </button>

        <div
          className={`justify-between ml-auto items-center w-full lg:flex lg:w-auto lg:order-1 ${!isMenuOpen && 'hidden'}`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center">
            <li>
              <Link
                href="/"
                className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                aria-current="page"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href={formatLink('cac-loai-ao-quan')}>
                <span className="cursor-pointer text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">
                  Áo quan
                </span>
              </Link>
            </li>
            <li>
              <Link href={formatLink('dich-vu-them')}>
                <span className="cursor-pointer text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">
                  Dịch vụ thêm
                </span>
              </Link>
            </li>
            <li>
              <Link href={formatLink('cam-nang')}>
                <span className="cursor-pointer text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">
                  Cẩm nang
                </span>
              </Link>
            </li>
            <li>
              <Link href={formatLink('lien-he')}>
                <span className="cursor-pointer text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">
                  Liên hệ
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
