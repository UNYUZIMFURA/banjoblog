import ContentHolder from "../components/content/ContentHolder";
import RightSideComponent from "../components/onside-compoents/RightSideComponent";
import Sidebar from "../components/onside-compoents/Sidebar";

export default function Home() {
  return (
    <main className="flex items-center overflow-scroll scrollbar-hide justify-start min-h-screen md:p-4 max-w-[92rem] mx-auto">
      <Sidebar />
      <div className="flex w-full mx-auto h-full justify-end">
        <ContentHolder />
        <RightSideComponent />
      </div>
    </main>
  );
}
