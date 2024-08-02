import ContentHolder from "./components/ContentHolder";
import RightSideComponent from "./components/RightSideComponent";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen md:p-4 md:gap-4 max-w-[100rem] xl:gap- 2xl:gap-8 mx-auto">
      <Sidebar />
      <ContentHolder />
      <RightSideComponent />
    </main>
  );
}
