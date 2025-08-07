'use client';

import { formatLink } from '@/utils/formatLink';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface PropTypes {
  price: string;
  name: string;
  banner: string;
  description: string;
  url: string;
  type: 'Hỏa táng' | 'An táng';
  isLoading?: boolean;
  alt?: string; // Optional alt text for the image
}

const ProductCard: React.FC<PropTypes> = ({
  price,
  name,
  banner,
  description,
  url,
  alt,
  type,
  isLoading = false,
}) => {
  return (
    <article
      className="gap-4 items-center rounded-xl bg-white shadow relative cursor-pointer"
      onClick={() => {
        window.open(formatLink(url), '_blank');
      }}
    >
      <div className="relative h-48 w-full">
        {isLoading ? (
          <Skeleton height="100%" borderRadius="0.5rem" />
        ) : (
          <Image
            src={banner}
            alt={alt || "Hình ảnh sản phẩm"}
            fill
            className="w-full h-48 object-cover rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        )}
      </div>

      <div className="text-left p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {isLoading ? <Skeleton width={180} /> : name}
        </h2>

        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gray-700 rounded mb-3">
            {type}
          </span>
        )}

        <div className="text-gray-600 mb-2 text-sm line-clamp-5">
          {isLoading ? (
            <Skeleton count={3} />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: description || 'Mô tả sản phẩm đang cập nhật.',
              }}
            />
          )}
        </div>

        <p className="text-slate-500 mb-2 tracking-wide text-sm">
          {isLoading ? (
            <Skeleton width={120} />
          ) : price === 'Liên hệ' ? (
            <strong className="text-gray-800 text-base tracking-wide">Liên hệ chi tiết</strong>
          ) : (
            <>
              Giá chỉ từ: <strong className="text-gray-800 text-base tracking-wide">{price}</strong>
            </>
          )}
        </p>

        <div className="flex justify-end mt-4">
          {isLoading ? (
            <Skeleton width={120} height={36} borderRadius={8} />
          ) : (
            <div className="inline-flex items-center gap-1 text-sm bg-gray-700 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors">
              Xem Chi tiết
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.47 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L18.94 12l-5.47-5.47a.75.75 0 0 1 0-1.06zM4.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
