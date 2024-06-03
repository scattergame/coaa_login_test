import React from 'react'

interface ActivityCardProps {
  imageUrl: string;
  title: string;
  content: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ imageUrl, title, content }) => {
  return (
    <div className="service-card border rounded-md w-64 shadow-sm">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-md" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-xs dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
