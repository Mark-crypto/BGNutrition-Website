import { lazy, Suspense } from "react";

const Hero = lazy(() => import("@/components/Hero"));
const Projects = lazy(() => import("@/components/Projects"));
const Team = lazy(() => import("@/components/Team"));
const Quotes = lazy(() => import("@/components/Quotes"));
const Journey = lazy(() => import("@/components/Journey"));

import Navbar from "@/components/Navbar";
import MissionVision from "@/components/MissionVision";
import Values from "@/components/Values";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

import ErrorPage from "@/components/ErrorPage";

const Home = () => {
  // #10172a
  return (
    <Suspense fallback={<ErrorPage />}>
      <Navbar />
      <Hero />
      <MissionVision />
      <Values />
      <Journey />
      <Projects />
      <Team />
      <Links />
      <Quotes />
      <Footer />
    </Suspense>
  );
};

export default Home;

{
  /* <SkeletonTheme baseColor="#202020" highlightColor="#444">
  {/* <Skeleton count={5} height={30} width={300} /> */
}
//<h4>{postMessage.name || <Skeleton />}</h4>
//</SkeletonTheme>; */}
