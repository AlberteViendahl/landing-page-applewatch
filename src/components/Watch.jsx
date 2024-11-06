const Watch = ({ setWatchColor }) => {
  return (
    <article className="flex justify-end mr-30 gap-5 mt-30">
      <div
        onClick={() => setWatchColor("grey")}
        className="bg-grey w-131 h-70 rounded-15 relative flex "
      >
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 h-90"
          src="/img/grey.png"
          alt="grey"
        />
      </div>
      <div
        onClick={() => setWatchColor("blue")}
        className="bg-blue w-131 h-70 rounded-15 relative flex"
      >
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 h-90"
          src="/img/blue.png"
          alt="blue"
        />
      </div>
      <div
        onClick={() => setWatchColor("pink")}
        className="bg-pink w-131 h-70 rounded-15 relative flex"
      >
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 h-90"
          src="/img/pink.png"
          alt="pink"
        />
      </div>
    </article>
  );
};

export default Watch;
