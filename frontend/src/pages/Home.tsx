// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { SkeletonTheme } from "react-loading-skeleton";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  // #10172a
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;

{
  /* <SkeletonTheme baseColor="#202020" highlightColor="#444">
  {/* <Skeleton count={5} height={30} width={300} /> */
}
//<h4>{postMessage.name || <Skeleton />}</h4>
//</SkeletonTheme>; */}
