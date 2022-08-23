import React from "react";
import Arts from "../components/Arts";
import debounce from "lodash.debounce";
import { FcReddit } from "react-icons/fc";

const Home = ({ articles, setArticles, subreddit, setSubreddit }) => {
  const updateSubreddit = (e) => setSubreddit(e?.target?.value);
  const debouncedOnChange = debounce(updateSubreddit, 500);

  return (
    <>
      <div className="min-h-screen bg-neutral-900 p-10 flex flex-col gap-10">
        <div className="flex w-full relative p-5">
          <div className="flex justify-center items-center">
            <FcReddit className="text-5xl absolute" />
          </div>
          <div className="flex w-full justify-center">
            <input
              type="text"
              className="text-white flex w-2/3 bg-white bg-opacity-10 p-5 hover:cursor-pointer focus:cursor-default"
              onChange={debouncedOnChange}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 mx-auto justify-center gap-5">
          {articles != null
            ? articles.map((article, index) => {
                return (
                  <div className="flex">
                    <Arts
                      key={index}
                      article={article.data}
                      subreddit={subreddit}
                      setSubreddit={setSubreddit}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
