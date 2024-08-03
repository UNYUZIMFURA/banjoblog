import { RxDotsVertical } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import SaveSvg from "../../utils/SVGs";

const Post = () => {
  return (
    <div className="w-full mt-8 mx-auto md:mx-0 min-[550px]:p-5 flex flex-col rounded-md bg-white p-2">
      <div className="py-4 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="h-[3rem] w-[3rem] bg-slate-200 rounded-full cursor-pointer"></div>
          <div className="flex flex-col justify-center gap-[2px]">
            <h2>Mary Krismas</h2>
            <span className="text-sm">Tue at 12:00 PM</span>
          </div>
        </div>
        <RxDotsVertical size={20} className="cursor-pointer" />
      </div>
      <div className="h-[25rem] bg-black rounded-md"></div>
      <div className="py-6 flex flex-col gap-5 px-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiHeart size={24} />
            <span>20 Likes</span>
          </div>
          <SaveSvg />
        </div>
        <span>
          <span className="font-bold">Rana Rose </span>
          <span>
            This is my first post on Banjo Blog Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae quod quia neque corporis,
            numquam unde animi ipsum.
          </span>
        </span>
        <form className="w-full bg-slate-100">
          <input
            className="w-full p-4 indent-4 rounded-full bg-black outline-none text-white"
            placeholder="Add a comment"
          />
        </form>
      </div>
    </div>
  );
};

export default Post;
