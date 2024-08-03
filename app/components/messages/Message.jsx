const Message = () => {
    return (
      <div className="flex gap-4 cursor-pointer">
        <div className="h-[3rem] w-[3rem] bg-red-200 rounded-full cursor-pointer"></div>
        <div className="flex flex-col gap-[3px] justify-center">
          <span>Levi Pro</span>
          <span className="text-sm">Your UI is Fantastic!</span>
        </div>
      </div>
    );
}

export default Message