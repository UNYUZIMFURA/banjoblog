import Image from "next/image";

const Trending = () => {
    return (
      <div className="flex gap-4 cursor-pointer">
        <div className="h-[3rem] w-[3rem] rounded-full cursor-pointer relative overflow-hidden">
          <Image
            src={"/images/random.jpg"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[3px] justify-center">
          <span className="font-semibold">Trick to Pixel Perfect UIs</span>
          <span className="text-xs">By UNYUZIMFURA Kevin</span>
        </div>
      </div>
    );
}

export default Trending