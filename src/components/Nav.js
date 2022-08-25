import debounce from "lodash.debounce";

const Nav = ({ setSubreddit }) => {
  const updateSubreddit = (e) => setSubreddit(e?.target?.value);
  const debouncedOnChange = debounce(updateSubreddit, 1000);
  return (
    <div className="flex w-full p-2.5 bg-neutral-800">
      <div className="flex justify-center w-full">
        <input
          type="text"
          className="flex text-white rounded-md bg-white bg-opacity-10 p-2.5 hover:cursor-pointer focus:cursor-text focus:outline-white focus:outline-2 outline-none transition"
          onChange={debouncedOnChange}
        />
      </div>
    </div>
  );
};

export default Nav;
