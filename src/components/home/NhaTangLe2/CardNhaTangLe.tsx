'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface PropTypes {
  title: string;
  bannerURL: string;
  url: string;
  isURLLink?: boolean;
  content?: string;
  isLoading?: boolean;
  alt: string;
}

const ServiceCard: React.FC<PropTypes> = ({
  title,
  bannerURL,
  alt,
  content,
  isURLLink,
  isLoading = false,
}) => {
  const imageSrc = isURLLink ? bannerURL : bannerURL.substring(1);

  return (
    <div className="shadow rounded-t-2xl bg-white rounded-b-xl overflow-hidden cursor-pointer">
      {isLoading ? (
        <Skeleton height={256} width="100%" className="rounded-t-2xl" />
      ) : (
        <img className="h-64 w-full object-cover" src={imageSrc} alt={alt} loading="lazy" />
      )}

      <div className="p-5">
        <h2 className="font-bold text-gray-800 text-2xl mb-3">
          {isLoading ? <Skeleton width="70%" /> : title}
        </h2>
        <p className="text-gray-600 mx-auto">{isLoading ? <Skeleton count={2} /> : content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
