const Navbar = () => {
  const sections = [
    "home",
    "journey",
    "achievements",
    "projects",
    "quotes",
    "values",
  ];
  return (
    <>
      <div className="flex justify-center items-center  dark:bg-gray-900 sticky top-0 z-10">
        <ul
          className="flex justify-center items-center gap-4 text-lg font-semibold
       text-white dark:text-gray-200 bg-[#2ecc71] w-[600px]
        dark:bg-gray-900 p-4 rounded-lg shadow-md "
        >
          {sections.map((section, i) => {
            return (
              <li
                key={i}
                className="hover:text-[#306847] hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <a href={`#${section}`} className="capitalize font-poppins">
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
