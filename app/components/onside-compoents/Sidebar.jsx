import { GoHomeFill } from "react-icons/go";
import { LuCompass } from "react-icons/lu";
import { VscBell } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const links = [
    {
      content: "Home",
      icon: <GoHomeFill size={22} />,
    },
    { content: "Explore", icon: <LuCompass size={22} /> },
    { content: "Notifications", icon: <VscBell size={22} /> },
    { content: "Messages", icon: <MdOutlineMail size={22} /> },
  ];
  return (
    <div className="fixed hidden xl:flex flex-col justify-between py-8 px-4 w-[20rem] lg:w-[22rem] rounded-lg h-[50rem] top-10 bg-white">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold ml-4 text-[#357dcf] ">BANJO BLOG</h1>
        <div className="flex flex-col gap-5">
          {links.map((link, index) => (
            <div
              key={index}
              className="hover:bg-[#357dcf] hover:text-white transition cursor-pointer flex items-center gap-5 p-4 rounded-md"
            >
              {link.icon}
              <span className="font-semibold">{link.content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="hover:bg-[#357dcf] transition hover:text-white flex items-center cursor-pointer gap-5 p-4 rounded-md">
          <LuSettings size={22} />
          <span className="font-semibold">Settings</span>
        </div>
        <div className="hover:bg-[#357dcf] transition hover:text-white flex items-center cursor-pointer gap-5 p-4 rounded-md">
          <MdLogout size={22} />
          <span className="font-semibold">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
