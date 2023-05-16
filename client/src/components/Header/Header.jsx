const Header = () => {
  return (
    <nav className="fixed h-[100vh] px-6 py-8">
      <h1
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
        className="border-r-2 border-wh-50 pr-4 text-5xl md:text-6xl text-wh-50 tracking-wide animate-pulse cursor-pointer "
      >
        <span className="transition-all duration-700 ease-in-out hover:border-b-[.75px] border-accent-red">
          R
        </span>
        <span className="border-b-[.75px] border-accent-orange">e</span>
        <span className="transition-all duration-700 ease-in-out hover:border-b-[.75px]">
          m
        </span>
        <span className="border-b-[.75px] border-accent-orange">e</span>
        <span className="transition-all duration-700 ease-in-out hover:border-b-[.75px]">
          m
        </span>
        <span className="transition-all duration-700 ease-in-out hover:border-b-[.75px] border-accent-red">
          b
        </span>
        <span className="border-b-[.75px] border-accent-orange">e</span>
        <span className="transition-all duration-700 ease-in-out hover:border-b-[.75px] border-accent-red">
          r
        </span>
      </h1>
    </nav>
  );
};
export default Header;
