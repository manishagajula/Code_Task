import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className=" border-indigo-900 mt-6 ml-14">
      <div className="flex flex-row">
        <input
          name="search"
          type="search"
          placeholder="Search"
          className="w-[450px] py-2 px-6 text-lg bg-violet-900 placeholder-white::placeholder outline-none	text-white"
        />
        <span className="text-2xl pt-2 pr-2 bg-violet-900 text-white">
          <FiSearch />
        </span>
      </div>
    </div>
  );
};
