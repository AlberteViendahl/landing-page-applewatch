const Watch = () => {
  return (
    <article className="flex justify-end mr-30 gap-5">
      <div className="bg-grey w-131 h-70 rounded-15 relative flex ">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 h-90"
          src="/img/navy.png"
          alt=""
        />
      </div>
      <div className="bg-blue w-131 h-70 rounded-15 relative flex">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 h-90"
          src="/img/mint.png"
          alt=""
        />
      </div>
      <div className="bg-pink w-131 h-70 rounded-15 relative flex">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 h-90"
          src="/img/ocean.png"
          alt=""
        />
      </div>
    </article>
  );
};

export default Watch;
