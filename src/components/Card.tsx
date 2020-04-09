import * as React from "react";

interface CardProps {
  image: any;
}

export const Card = ({ image }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="random" className="w-full" />
      <div className="px-6 py-4">
        <p className="font-bold text-blue-500 text-xl mb-2">{image.user}</p>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>

          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>

          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {image.tags.split(",").map((tag: string) => (
          <span
            key={Math.random() * image.id}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
