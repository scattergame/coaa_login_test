import React from 'react'

interface ResearchCardProps {
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ imageUrl, title, author, date, content }) => {
  return (
    <div className="service-card border rounded-md w-64 shadow-sm">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-md" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h4 className="text-xs mb-2">By {author}</h4>
        <h4 className="text-xs font-extralight mb-2">{date}</h4>
        <p className="text-gray-600 text-xs dark:text-gray-400 mb-2">{content}</p>
      </div>
    </div>
  );
}

export default ResearchCard;
