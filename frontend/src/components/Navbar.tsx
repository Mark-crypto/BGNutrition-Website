const Navbar = () => {
  const sections = ["home", "journey", "projects", "links", "quotes", "footer"];
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-600  dark:bg-gray-900 sticky top-3 z-10">
        <ul
          className="flex justify-center items-center gap-4 text-lg font-semibold
        dark:text-gray-200 bg-gradient-to-br from-green-500 to-emerald-600 text-white w-[600px]
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
