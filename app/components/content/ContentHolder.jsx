import Post from "../post/Post";
import Story from "../stories/Story";

const ContentHolder = () => {
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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default ContentHolder;
