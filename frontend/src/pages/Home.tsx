// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { SkeletonTheme } from "react-loading-skeleton";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Links from "@/components/Links";
import MissionVision from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Quotes from "@/components/Quotes";
import Values from "@/components/Values";

const Home = () => {
  // #10172a
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVision />
      <Values />
      <Journey />
      <Projects />
      <Links />
      <Quotes />
      <Footer />
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
