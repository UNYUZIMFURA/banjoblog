import Post from "./Post"

const ContentHolder = () => {
    return (
        <div className="w-full md:flex-grow flex justify-center p-2 md:p-4 lg:w-1/2 md:h-[85vh] h-full bg-black">
            <div className="w-full flex justify-center">
                <Post />
            </div>
        </div>
    )
}

export default ContentHolder