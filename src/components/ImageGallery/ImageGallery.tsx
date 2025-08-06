'use client';

import { Image } from 'antd';
import './style.css';
import React from 'react';
import { EyeOutlined } from '@ant-design/icons';

interface ImageComponentProps {
  imageProps: {
    src: string;
    alt?: string;
  };
  imgHeight?: number;
}

const ImageComponent: React.FC<ImageComponentProps> = props => {
  return (
    <Image
      src={`${props.imageProps.src}`}
      alt={props.imageProps.alt}
      className="aspect-square overflow-hidden flex justify-center object-cover items-center bg-gray-100 rounded shadow"
      preview={{
        className: 'custom-preview',
        mask: (
          <div className="custom-mask-text">
            <EyeOutlined className="mr-2" />
            Xem ảnh
          </div>
        ),
      }}
    />
  );
};

interface PropTypes {
  photos: {
    src: string;
  }[];
  imgHeight?: number;
}

const ImageGallery: React.FC<PropTypes> = props => {
  const { photos } = props;

  return (
    <Image.PreviewGroup>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {photos.map((photo, index) => (
          <ImageComponent
            key={index}
            imageProps={{
              src: photo.src,
              alt: 'Hình ảnh thực tế',
            }}
          />
        ))}
      </div>
    </Image.PreviewGroup>
  );
};

export default React.memo(ImageGallery);
