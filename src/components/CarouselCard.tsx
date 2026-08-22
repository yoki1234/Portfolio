export interface CarouselCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}


export const CarouselCard = ({ title, description, imageUrl }: CarouselCardProps) => {
  return (
      <div className="p-4 h-98 text-center rounded shadow-md bg-gray-200">
          { imageUrl &&
            <div className="w-full h-48 bg-gray-400 mb-4">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover object-center" />
            </div>
          }
        <h2 className="font-bold font-sans text-3xl">{title}</h2>
        <p className="text-lg"><span className="font-semibold">{description}</span></p>
      </div>
  );
}