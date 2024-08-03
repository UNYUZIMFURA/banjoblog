import Post from "./Post"

const ContentHolder = () => {
    return (
      <div className="w-full md:flex-grow md:mr-[20rem] xl:ml-[22rem] min-[1200px]:mr-[22rem] flex justify-between p-2 md:p-4 lg:w-1/2 min-h-screen h-full">
        <div className="overflow-scrol w-full">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
}

export default ContentHolder