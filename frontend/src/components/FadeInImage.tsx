import { useState } from "react";

const FadeInImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-[400px] object-cover shadow-lg transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default FadeInImage;
