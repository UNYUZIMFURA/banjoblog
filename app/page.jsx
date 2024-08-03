import ContentHolder from "./components/ContentHolder";
import RightSideComponent from "./components/RightSideComponent";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex items-center bg-slate-200 overflow-scroll justify-start min-h-screen md:p-4 max-w-[92rem] mx-auto">
      <Sidebar />
      <div className="flex w-full h-full justify-end">
        <ContentHolder />
        <RightSideComponent />
      </div>
    </main>
  );
}
