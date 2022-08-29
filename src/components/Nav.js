import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Nav = ({ setSubreddit }) => {
  const updateSubreddit = (e) => setSubreddit(e?.target?.value);
  const debouncedOnChange = debounce(updateSubreddit, 1000);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full p-5 bg-neutral-800">
      <div className="flex">

          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-white text-2xl bg-white bg-opacity-10 rounded-full p-2.5 hover:bg-opacity-20 transition"
          >
            <BiArrowBack />
          </button>


          <input
            type="text"
            className="flex text-white rounded-md bg-white bg-opacity-10 p-2.5 hover:cursor-pointer focus:cursor-text focus:outline-white focus:outline-2 outline-none"
            onChange={debouncedOnChange}
          />

      </div>
    </div>
  );
};

export default Nav;
