import { MdOutlineMail } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Message from "../messages/Message";

const RightSideComponent = () => {
  return (
    <div className="fixed top-10 hidden md:flex flex-col w-[20rem] lg:w-[22rem] rounded-lg py-8 px-4 gap-8">
      <div className="w-full flex items-center justify-between">
        <h2>Messages</h2>
        <MdOutlineMail size={22} />
      </div>
      <form className="flex items-center gap-4 rounded-full overflow-hidden pl-4 mt-3">
        <IoSearchOutline size={22} />
        <input className="w-[90%] p-3 outline-none" />
      </form>
      <div className="flex justify-between">
        <span>Primary</span>
        <span>General</span>
        <span>Requests(7)</span>
      </div>
      <div className="flex flex-col gap-5">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="flex flex-col gap-5 rounded-md bg-white px-3 py-4">
        <div className="flex justify-between">
          <span>Sponsored</span>
          <span>Create Ad</span>
        </div>
        <div className="bg-black h-[15rem] w-full rounded-md"></div>
      </div>
    </div>
  );
};

export default RightSideComponent;
