import React from "react";
import Arts from "../components/Arts";

const Home = ({ articles, subreddit, setSubreddit }) => {
  return (
    <>
      <div className="min-h-screen max-w-screen-md mx-auto bg-neutral-900 p-5">
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
