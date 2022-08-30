import debounce from "lodash.debounce";

const Nav = ({ setSubreddit, subreddit }) => {
  const updateSubreddit = (e) => setSubreddit(e.target.value);
  const debouncedOnChange = debounce(updateSubreddit, 500);

  return (
    <div className="flex justify-center w-full p-5 bg-neutral-800">
        <input
          type="text"
          placeholder={"r/" + subreddit}
          className="flex text-white md:w-1/3 w-5/6 rounded-md bg-white bg-opacity-10 p-2.5 hover:cursor-pointer focus:cursor-text focus:outline-white focus:outline-2 outline-none"
          onChange={debouncedOnChange}
        />
    </div>
  );
};

export default Nav;
