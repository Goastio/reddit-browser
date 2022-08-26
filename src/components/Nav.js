import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

const Nav = ({ setSubreddit }) => {
  const updateSubreddit = (e) => setSubreddit(e?.target?.value);
  const debouncedOnChange = debounce(updateSubreddit, 1000);
  const navigate = useNavigate();

  return (
    <div className="flex w-full p-5 bg-neutral-800">
      <div className="flex justify-center w-full relative">
        <div className="flex w-full justify-start absolute">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-white"
          >
            Chicken
          </button>
        </div>
        <input
          type="text"
          className="flex md:w-1/3 text-white rounded-md bg-white bg-opacity-10 p-2.5 hover:cursor-pointer focus:cursor-text focus:outline-white focus:outline-2 outline-none transition"
          onChange={debouncedOnChange}
        />
      </div>
    </div>
  );
};

export default Nav;
