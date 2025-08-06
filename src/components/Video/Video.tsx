import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title = 'YouTube Video',
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full aspect-video ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
