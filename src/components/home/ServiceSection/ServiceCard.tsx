'use client';
interface PropTypes {
  title: string;
  bannerURL: string;
  url: string;
  content?: string;
  isContant?: boolean;
  alt?: string;
}

const ServiceCard: React.FC<PropTypes> = props => {
  const { title, bannerURL, content, isContant, alt } = props;
  
  return (
    <div className="shadow rounded-t-2xl bg-white rounded-b-xl overflow-hidden cursor-pointer h-full">
      <img
        className={`h-64 w-full ${isContant ? 'object-contain' : 'object-cover'}`}
        src={process.env.NEXT_PUBLIC_NODE_ENV === 'PROD' ? bannerURL : bannerURL.substring(1)}
        alt={alt}
      />
      <div className="p-5">
        <h2 className="font-bold text-gray-800 text-2xl mb-3">{title}</h2>
        <p className="text-gray-600 mx-auto">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
