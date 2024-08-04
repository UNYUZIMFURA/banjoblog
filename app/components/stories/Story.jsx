import { useState } from "react";
import { v4 } from "uuid";
import Image from "next/image";

const Story = () => {
  const [imageError, setImageError] = useState(false); // State to track image loading error
  const [profileImageError, setProfileImageError] = useState(false); // State to track profile image loading error

  // Default image URL for fallback
  const defaultImage = "/images/random.jpg";

  return (
    <div className="relative flex flex-col justify-between h-[12rem] min-w-[11rem] bg-white cursor-pointer rounded-md overflow-hidden">
      <div className="h-full relative overflow-hidden">
        <Image
          src={
            imageError
              ? defaultImage
              : `https://picsum.photos/400/400?random=${v4()}`
          }
          fill
          alt="Story Background"
          className="object-cover brightness-50"
          onError={() => setImageError(true)}
        />
        <div className="absolute top-2 left-2 h-[3rem] w-[3rem] rounded-full cursor-pointer overflow-hidden">
          <Image
            src={
              profileImageError
                ? defaultImage
                : `https://picsum.photos/400/400?random=${v4()}`
            }
            fill
            alt="Profile"
            className="object-cover"
            onError={() => setProfileImageError(true)}
          />
        </div>
        <span className="text-sm absolute bottom-2 left-2 text-white">
          John Doe
        </span>
      </div>
    </div>
  );
};

export default Story;
