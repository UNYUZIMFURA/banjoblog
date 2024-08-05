"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import Post from "../post/Post";
import Story from "../stories/Story";

const ContentHolder = () => {
  const [postModalVisible, setPostModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // When no data is on the backend, we display this default post 3 times
  const defaultPost = {
    comments: [],
    content:
      "Most Developers ask themselves how they can create good looking modern websites. The answer is in this blog!",
    createdAt: "2024-08-04T09:03:26.991Z",
    id: "6635d1b2-30a0-4940-9627-c32bae5e43dc",
    title: "Developing Pixel Perfect UIs",
    updatedAt: "2024-08-04T09:03:26.991Z",
    user: { username: "Auto_generated" },
    userId: "dd8b649e-4e55-43eb-87a7-dff3f6652215",
  };
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPostData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  // Block of code to create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postData.title || !postData.content) {
      return toast.error("Fill all post fields!");
    }
    // Get token from Cookie Storage
    // It will be send along with Post Data to know which user is sending the request to create a post
    const token = Cookies.get("token");
    try {
      const res = await fetch("http://localhost:5000/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (data.success) {
        return toast.success("Post Created!");
      }
      toast.error(data.message);
    } catch (error) {
      console.log(error);
      return toast.error("Server Error, Try again later!");
    }
  };

  // Block of code to  fetch all posts from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.posts);
        setPosts(data.posts);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to close Posting Modal, We use DOM Manipulation to achieve this!
   const closeModal = (e) => {
        const postingModalHolder = document.getElementById(
            "posting-modal-holder",
        )
        const clickedElement = e.target
        if (clickedElement === postingModalHolder) {
            setPostModalVisible(prevState => !prevState)
        }
    }


  return (
    <div className="w-full md:flex-grow md:pr-[21rem] lg:pr-[23rem] xl:pl-[23rem] md:justify-start flex flex-col justify-between px-2 py-4 md:p-4 lg:w-1/2 min-h-screen h-full">
      {postModalVisible ? (
        <div
          id="posting-modal-holder"
          onClick={(e) => closeModal(e)}
          className="fixed left-0 top-0 h-screen w-screen z-20 flex justify-center items-center bg-[rgba(0,0,0,.7)]"
        >
          <div className="h-[30rem] w-[30rem] flex gap-4 flex-col items-center justify-center px-4 bg-white top-1/2 rounded-lg">
            <h2 className="text-primary font-semibold text-xl cursor-pointer">
              New Post
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full px-8 py-8 gap-4"
            >
              <input
                className="p-4 outline-none bg-[#edeff3] rounded-md indent-3"
                placeholder="Title"
                name="title"
                type="text"
                onChange={handleChange}
                value={postData.title}
              />
              <input
                className="p-4 outline-none bg-[#edeff3] rounded-md indent-3"
                placeholder="Content"
                name="content"
                type="text"
                onChange={handleChange}
                value={postData.content}
              />
              <button className="bg-primary mt-5 text-white rounded-full p-3">
                Post
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <div className="mx-auto scrollbar-hide flex w-full overflow-scroll gap-4 pr-2 py-2 max-w-[615px]">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className="flex justify-between items-center w-full max-w-[615px] px-2 pt-4 mx-auto 2xl:pt-10">
        <span className="xl:text-lg">What's on your mind?</span>
        <button
          className="bg-primary p-4 text-sm md:px-5 md:py-3 text-white rounded-full"
          onClick={() => setPostModalVisible((prevState) => !prevState)}
        >
          Create Post
        </button>
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
      <ToastContainer />
    </div>
  );
};

export default ContentHolder;
