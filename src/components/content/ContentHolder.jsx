"use client";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Story from "../stories/Story";

const ContentHolder = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
   const defaultPost = {
     comments: [],
     content: "Most Developers ask themselves how they can create good looking modern websites. The answer is in this blog!",
     createdAt: "2024-08-04T09:03:26.991Z",
     id: "6635d1b2-30a0-4940-9627-c32bae5e43dc",
     title: "Developing Pixel Perfect UIs",
     updatedAt: "2024-08-04T09:03:26.991Z",
     user: { username: "Auto_generated" },
     userId: "dd8b649e-4e55-43eb-87a7-dff3f6652215",
   };


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
        ) : posts.length > 0 ? (
          posts.map((post, index) => <Post key={post.id} post={post} />)
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <Post post={defaultPost} />
            <Post post={defaultPost} />
            <Post post={defaultPost} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentHolder;
