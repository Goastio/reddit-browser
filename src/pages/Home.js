import React from "react";
import Arts from "../components/Arts";
import debounce from "lodash.debounce";
import { FcReddit } from "react-icons/fc";

const Home = ({ articles, subreddit, setSubreddit }) => {
  const updateSubreddit = (e) => setSubreddit(e?.target?.value);
  const debouncedOnChange = debounce(updateSubreddit, 1000);

  return (
    <>
      <div className="min-h-screen bg-neutral-900 p-5">
        <div className="flex w-full relative p-5">
          <div className="flex justify-center items-center">
            <FcReddit className="text-7xl absolute" />
          </div>
          <div className="flex w-full justify-center">
            <input
              type="text"
              className="text-white rounded-md flex md:w-1/3 bg-white bg-opacity-10 p-5 hover:cursor-pointer focus:cursor-text focus:outline-white focus:outline-2 outline-none transition"
              onChange={debouncedOnChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {articles != null
            ? articles.map((article, index) => {
                return (
                  <Arts
                    key={index}
                    article={article.data}
                    subreddit={subreddit}
                    setSubreddit={setSubreddit}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
