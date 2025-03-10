// components/Card.js
import Link from "next/link";

const Card = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-center space-y-4 px-4 py-8 border-2 border-dashed border-gray-300 shadow-lg rounded-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 text-center">{description}</p>

        {/* Button wrapped in a Link */}
        <Link href={buttonLink || '/error'}>
          <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;