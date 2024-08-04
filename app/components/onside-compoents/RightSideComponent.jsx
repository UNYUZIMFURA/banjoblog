import { IoSearchOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import Trending from "../trending/Trending";
import Image from "next/image";

const RightSideComponent = () => {
  return (
    <div className="bg-white fixed top-10 hidden md:flex flex-col w-[20rem] lg:w-[22rem] rounded-lg py-8 px-4 gap-8">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-primary">Trending Blogs</h2>
        <IoIosStats size={22} color="#357dcf" />
      </div>
      <form className="bg-[#edeff3] flex items-center gap-4 rounded-full overflow-hidden pl-4 mt-3">
        <IoSearchOutline size={22} />
        <input
          className="bg-[#edeff3] text-black w-[90%] p-3 outline-none"
          placeholder="Search Blogs"
        />
      </form>
      <div className="flex justify-between px-5">
        <span>Technology</span>
        <span>Music</span>
        <span>Trading</span>
      </div>
      <div className="flex flex-col gap-5 p-4 rounded-md">
        <Trending />
        <Trending />
        <Trending />
        <Trending />
      </div>
      <div className="flex flex-col gap-5 rounded-md px-3 py-4">
        <div className="flex text-primary justify-between">
          <span className="cursor-pointer font-semibold">Sponsored</span>
          <span className="cursor-pointer font-semibold">Create Ad</span>
        </div>
        <div className="h-[15rem] w-full rounded-md cursor-pointer relative overflow-hidden">
          <Image src={"/images/random_2.jpg"} fill className="object-cover" />
        </div>
        <span className="">
          Technology in all sectors
        </span>
      </div>
    </div>
  );
};

export default RightSideComponent;
