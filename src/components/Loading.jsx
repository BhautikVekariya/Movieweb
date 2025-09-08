import loader from "/loader.gif";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <img
        className="h-[50%] object-cover"
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
