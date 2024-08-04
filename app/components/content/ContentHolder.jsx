"use client";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Story from "../stories/Story";

const ContentHolder = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.posts)
        setPosts(data.posts);
      } catch (error) {
        console.error("Fetch error: ", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:flex-grow md:pr-[21rem] lg:pr-[23rem] xl:pl-[23rem] md:justify-start flex flex-col justify-between px-2 py-4 md:p-4 lg:w-1/2 min-h-screen h-full">
      <div className="mx-auto scrollbar-hide flex w-full overflow-scroll gap-4 pr-2 py-2 max-w-[615px]">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className="w-full max-w-[615px] mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            Loading posts...
          </div>
        ) : (
          posts.map((post, index) => (
            <Post key={index} post={post} /> 
          ))
        )}
      </div>
    </div>
  );
};

export default ContentHolder;
