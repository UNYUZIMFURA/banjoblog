"use client";
import { useState } from "react";
import { v4 } from "uuid";
import Image from "next/image";
import { RxDotsVertical } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";

const Post = (props) => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageErrorProfile, setImageErrorProfile] = useState(false);
  const formattedTime = formatDistanceToNow(new Date(props.post.updatedAt), {
    addSuffix: true,
  });
  const defaultImage = "/images/random.jpg";
  const defaultProfileImage = "/images/random.jpg";
  return (
    <div className="w-full mt-8 mx-auto md:mx-0 min-[550px]:p-5 flex flex-col rounded-md bg-white p-2">
      <div className="py-4 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="h-[3rem] w-[3rem] relative overflow-hidden bg-slate-200 rounded-full cursor-pointer">
            <Image
              src={
                imageErrorProfile
                  ? defaultProfileImage
                  : `https://picsum.photos/400/400?random=${v4()}`
              }
              fill
              alt="Profile Image"
              className="object-cover"
              onError={() => setImageErrorProfile(true)}
            />
          </div>
          <div className="flex flex-col justify-center gap-[2px]">
            <h2 className="text-primary font-bold">{props.post.user.username}</h2>
            <span className="text-sm">{formattedTime}</span>
          </div>
        </div>
        <RxDotsVertical size={20} className="cursor-pointer" />
      </div>
      <div className="h-[25rem] rounded-md relative overflow-hidden cursor-pointer">
        <Image
          src={
            imageError
              ? defaultImage
              : `https://picsum.photos/600/600?random=${v4()}`
          }
          fill
          alt="Post Image"
          className="object-cover"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="py-6 flex flex-col gap-5 px-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div onClick={() => setLiked((prevState) => !prevState)}>
              <FiHeart
                size={24}
                className={`cursor-pointer ${
                  liked ? "fill-[red] stroke-[red]" : "fill-none stroke-black"
                }`}
              />
            </div>
            <span>2100 Likes</span>
          </div>
          <div onClick={() => setSaved((prevState) => !prevState)}>
            <svg
              aria-label="Save"
              cursor="pointer"
              color={saved ? "#357dcf" : "black"}
              fill={saved ? "#357dcf" : "black"}
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Save</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <span>
          <span className="font-bold text-primary">{props.post.title} </span>
          <span>{props.post.content}</span>
        </span>
        <div className="flex flex-col">
          <span className="font-bold cursor-pointer">All Comments</span>
          {props.post.comments.length > 0 ? (
            props.post.comments.map((el, index) => (
              <div key={index} className="flex gap-[3px]">
                <span className="font-bold">{el.user.username}</span>
                <span>{el.content}</span>
              </div>
            ))
          ) : (
            <div className="text-gray-500">Be the first to comment!</div>
          )}
        </div>
        <form className="flex gap-4">
          <input
            className="w-4/5 p-[13px] indent-4 rounded-full outline-none bg-[#edeff3]"
            placeholder="Add a comment"
          />
          <button className="p-[13px] text-white text-sm font-semibold rounded-full bg-primary">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
