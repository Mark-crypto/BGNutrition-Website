// import { useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// function SkeletonImage({ src:string, alt:string }) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <div>
//       {/* Skeleton Loader */}
//       {!isLoaded && <Skeleton height={200} width={300} />}

//       {/* Actual Image */}
//       <img
//         src={src}
//         alt={alt}
//         onLoad={() => setIsLoaded(true)}
//         style={{
//           display: isLoaded ? "block" : "none",
//           width: "300px",
//           height: "200px",
//           objectFit: "cover",
//         }}
//       />
//     </div>
//   );
// }
// export default SkeletonImage;
