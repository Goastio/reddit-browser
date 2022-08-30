import React, { useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import Arts from "../components/Arts";

const Home = ({ articles, setArticles, subreddit, setSubreddit }) => {
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then((res) => {
      if (res.status !== 200) {
        console.log("error");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);


  if (!articles.length) {
    return (
      <PropagateLoader
        color="#f97316"
        cssOverride={{}}
        size={20}
        speedMultiplier={1}
        className="w-full h-screen flex items-center justify-center"
      />
    );
  }

  return (
    <>
      <div className="min-h-screen max-w-screen-md mx-auto bg-neutral-900 p-5">
        <div className="flex text-white text-opacity-50 w-full pb-5 text-sm md:text-base">
          Now filtering posts from {`r/${subreddit}...`}
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
