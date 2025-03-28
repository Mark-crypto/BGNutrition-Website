import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <p className="mt-4 text-gray-700 text-lg">Loading... Please wait.</p>
    </div>
  );
};

export default Loading;
