const HeroSkeleton = () => {
  const slides = [1, 2, 3, 4, 5];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-6 animate-pulse transition-all duration-500">
        {slides.map((_, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] rounded-lg bg-gray-300 dark:bg-gray-700 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSkeleton;
