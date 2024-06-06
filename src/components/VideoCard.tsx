import React from 'react';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, author, date, description }) => {
  return (
    <div className="service-card border rounded-md w-72 shadow-sm">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h4 className="text-xs mb-2">By {author}</h4>
        <h4 className="text-xs font-extralight mb-2">{date}</h4>
        <div className="relative pb-56.25" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
