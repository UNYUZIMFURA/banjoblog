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
    <div className="flex flex-col justify-between py-8 px-4 w-[22rem] rounded-lg h-[85vh] top-0 bg-red-200">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">BANJO BLOG</h1>
        <div className="flex flex-col gap-5">
          {links.map((link, index) => (
            <div
              key={index}
              className="cursor-pointer flex items-center gap-4 p-4 bg-green-200 rounded-md"
            >
              {link.icon}
              <span>{link.content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center cursor-pointer gap-4 p-4 bg-green-200 rounded-md">
          <LuSettings size={22} />
          <span>Settings</span>
        </div>
        <div className="flex items-center cursor-pointer gap-4 p-4 bg-green-200 rounded-md">
          <MdLogout size={22} />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
