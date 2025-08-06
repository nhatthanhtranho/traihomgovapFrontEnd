'use client';

import { formatLink } from '@/utils/formatLink';
import { Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

interface PropTypes {
  title: string;
  bannerURL: string;
  publishDate: string;
  url: string;
  variant?: 'left-card' | 'center-card' | 'right-card';
  showContent?: boolean;
  content?: string;
  textCenter?: boolean;
  category?: string;
}

const PostCard: React.FC<PropTypes> = props => {
  const router = useRouter();
  const {
    title,
    bannerURL,
    publishDate,
    url,
    variant,
    showContent,
    content,
    textCenter,
    category,
  } = props;

  const prefix = useMemo(() => {
    switch (category) {
      case 'nha-tang-le':
        return 'nha-tang-le';
      case 'news':
        return 'cam-nang';
      default:
        return 'cam-nang';
    }
  }, [category]);

  const handleClick = () => {
    const path = formatLink(`/${prefix}/${url}`);
    router.push(path);
  };

  if (variant === 'left-card') {
    return (
      <div
        className="flex flex-row pb-2 border-b border-slate-300 cursor-pointer"
        onClick={handleClick}
      >
        <img
          loading="lazy"
          className="rounded w-[120px] h-[80px] object-cover"
          src={bannerURL}
          alt="Dịch vụ mai táng trọn gói..."
        />
        <Tooltip title={title}>
          <div className="ml-2 w-[150px]">
            <Typography
              variant="body2"
              fontWeight={550}
              className="ml-1 overflow-hidden text-ellipsis line-clamp-3"
            >
              {title}
            </Typography>
          </div>
        </Tooltip>
      </div>
    );
  }

  if (variant === 'center-card') {
    return (
      <div className="flex flex-col pb-2 cursor-pointer" onClick={handleClick}>
        <img
          loading="lazy"
          className="w-full h-[300px] object-cover rounded"
          src={bannerURL}
          alt="Dịch vụ mai táng trọn gói..."
        />
        <Tooltip title={title}>
          <div className="mt-2 overflow-hidden">
            <Typography
              variant="h5"
              fontWeight={550}
              className="ml-1 overflow-hidden text-ellipsis line-clamp-4"
            >
              {title}
            </Typography>
            {showContent && (
              <Typography
                variant="body2"
                className="ml-1 mt-1 pr-3 text-[#444] overflow-hidden text-ellipsis line-clamp-4"
              >
                {content}
              </Typography>
            )}
          </div>
        </Tooltip>
      </div>
    );
  }

  if (variant === 'right-card') {
    return (
      <div className="flex flex-col pb-2 cursor-pointer" onClick={handleClick}>
        <img
          loading="lazy"
          className="w-full h-[150px] object-cover rounded"
          src={bannerURL}
          alt="Dịch vụ mai táng trọn gói..."
        />
        <Tooltip title={title}>
          <div className="mt-2 overflow-hidden">
            <Typography
              variant="subtitle2"
              fontWeight={550}
              className={`ml-1 line-clamp-3 ${textCenter ? 'text-center' : ''}`}
            >
              {title}
            </Typography>
          </div>
        </Tooltip>
      </div>
    );
  }

  return (
    <div
      className="flex flex-row pb-2 border-b border-slate-500 w-[312px] cursor-pointer"
      onClick={handleClick}
    >
      <img
        loading="lazy"
        className="rounded w-[80px] h-[80px] object-cover"
        src={bannerURL}
        alt="Dịch vụ mai táng trọn gói..."
      />
      <div className="flex flex-col justify-between ml-2">
        <Tooltip title={title}>
          <Typography variant="body2" fontWeight={550} className="line-clamp-2">
            {title}
          </Typography>
        </Tooltip>
        <Typography variant="body2" fontWeight={400} className="mt-auto ml-auto">
          {publishDate}
        </Typography>
      </div>
    </div>
  );
};

export default PostCard;
