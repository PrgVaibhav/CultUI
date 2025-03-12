export const SmallCard = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-[70vw] sm:w-[25vw] gap-2 border border-neutral-800 p-4 sm:p-2 rounded-lg">
        <div className="border-b border-neutral-800 pb-1">
          <h1 className="text-sm">This is small card</h1>
        </div>
        <div className="border-b border-neutral-800 pb-1">
          <p className="text-xs sm:text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
            illum.Lorem ipsum dolor sit
          </p>
        </div>
        <div>
          <p className="text-xs sm:text-xs">Author: bruceWayne</p>
        </div>
      </div>
    </div>
  );
};
