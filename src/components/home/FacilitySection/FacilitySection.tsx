'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { formatLink } from '@/utils/formatLink';

interface PropTypes {
  images: { src: string }[];
  limit?: number;
}

const PhotoGallery = dynamic(() => import('@/components/ImageGallery/ImageGallery'), {
  ssr: false,
  loading: () => <Skeleton height={300} count={1} className="rounded-lg" />,
});

const YouTubeVideo = dynamic(() => import('@/components/Video/Video'), {
  ssr: false,
  loading: () => <Skeleton height={300} className="rounded-xl" />,
});

const VideoThumbnail: React.FC<{ videoId: string; onClick: () => void }> = ({
  videoId,
  onClick,
}) => (
  <div
    className="w-32 cursor-pointer relative h-auto shadow rounded overflow-hidden"
    onClick={onClick}
  >
    <img
      className="w-full"
      src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
      alt="YouTube Thumbnail"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30" />
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white opacity-90"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
);

const FacilitySection: React.FC<PropTypes> = ({ images, limit }) => {
  const [isClient, setIsClient] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string>('bENUpkUwqvI'); // default video

  const limitedImages = limit ? images.slice(0, limit) : images;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Photo Gallery Section */}
      <section className="bg-gray-50 md:py-16 px-4" aria-labelledby="facility-images-heading">
        <div className="container mx-auto">
          <h1
            id="facility-images-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5 text-center"
          >
            Hình Ảnh Hoạt Động Của Chúng Tôi
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto md:mb-12 text-center">
            Hình ảnh hoạt động phản ánh sự trang nghiêm, chuyên nghiệp và tận tâm của cơ sở mai táng
            Sinh Phúc Thọ trong từng lễ tang.
          </p>

          <div>
            {isClient ? (
              <Suspense fallback={<Skeleton height={300} count={1} className="rounded-xl" />}>
                <PhotoGallery photos={limitedImages} />
              </Suspense>
            ) : (
              <Skeleton height={300} count={1} className="rounded-xl" />
            )}

            <button
              className="block text-sm bg-gray-700 mt-8 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors mx-auto"
              onClick={() => window.open(formatLink('/hinh-anh-thuc-te'), '_blank')}
              aria-label="Xem thêm hình ảnh thực tế"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mt-10 container mx-auto px-4" aria-labelledby="facility-video-heading">
        <h1
          id="facility-video-heading"
          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center"
        >
          Video Hoạt Động
        </h1>
        <p className="text-gray-600 text-center hidden md:block text-lg mx-auto lg:max-w-4xl md:max-w-2xl">
          Video sau đây sẽ giúp quý khách hiểu rõ hơn về quy trình và các hoạt động chính trong dịch
          vụ mai táng trọn gói của Sinh Phúc Thọ – từ khâu chuẩn bị, tổ chức tang lễ cho đến an
          táng, với sự tận tâm, chu đáo và kính trọng người đã khuất.
        </p>

        <div className="w-full md:w-2/3 mx-auto h-full md:mt-12">
          {isClient ? (
            <Suspense fallback={<Skeleton height={300} className="rounded-xl" />}>
              <YouTubeVideo videoId={selectedVideoId} />
            </Suspense>
          ) : (
            <Skeleton height={300} className="rounded-xl" />
          )}

          <div className="flex gap-3 mt-5 flex-wrap">
            {[
              'bENUpkUwqvI',
              '_8-PLJJs5lo',
              'Mx3J6mwpd9o',
              'ENuPI990ZsY',
              'BCApygde9iM',
              'WQlXnZaD_9w',
            ].map(id => (
              <VideoThumbnail key={id} videoId={id} onClick={() => setSelectedVideoId(id)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitySection;
