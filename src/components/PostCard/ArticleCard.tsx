'use client';

import { formatLink } from '@/utils/formatLink';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface PropTypes {
  title: string;
  banner: string;
  url: string;
  isLoading?: boolean;
  alt?: string; // Optional alt text for the image
  publishedDate?: string; // Optional published date
}

const ArticleCard: React.FC<PropTypes> = ({
  title,
  banner,
  url,
  alt,
  isLoading = false,
  publishedDate,
}) => {
  return (
    <article
      className="gap-4 items-center rounded-xl bg-white shadow relative cursor-pointer h-full"
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
            alt={alt || "Hình ảnh bài viết"}
            fill
            className="w-full h-48 object-cover rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        )}
      </div>

      {isLoading ? (
        <Skeleton width={80} height={24} />
      ) : (
        <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gray-700 rounded m-4">
          {publishedDate}
        </span>
      )}

      <div className="text-left px-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-3 h-[6rem]">
          {isLoading ? <Skeleton width={180} /> : title}
        </h2>

        <div className="flex justify-end mt-4">
          {isLoading ? (
            <Skeleton width={120} height={36} borderRadius={8} />
          ) : (
            <div className="inline-flex items-center gap-1 text-sm bg-gray-700 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors mb-4">
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

export default ArticleCard;
