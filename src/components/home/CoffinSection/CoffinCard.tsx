'use client';

import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface PropTypes {
  title: string;
  bannerURL: string;
  url: string;
  description?: string;
  isLoading?: boolean; // <-- Add loading prop
}

const CoffinCard: React.FC<PropTypes> = props => {
  const { title, bannerURL, description, isLoading } = props;

  return (
    <div className="mx-auto bg-white rounded shadow flex">
      <div className="w-48 h-48 relative flex items-center justify-center bg-gray-100 rounded">
        {isLoading ? (
          <Skeleton circle width={120} height={120} />
        ) : (
          <Image
            src={bannerURL}
          alt={`Trại Hòm Sinh Phúc Thọ | ${title}`}
            fill
            className="object-contain rounded-full"
          />
        )}
      </div>

      <div className="p-4 w-2/3">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {isLoading ? <Skeleton width={150} /> : title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-4">
          {isLoading ? <Skeleton count={3} /> : description}
        </p>
      </div>
    </div>
  );
};

export default CoffinCard;
