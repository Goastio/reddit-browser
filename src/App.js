import "./index.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");

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

  return (
    <>
      <Home
        articles={articles}
        setArticles={setArticles}
        subreddit={subreddit}
        setSubreddit={setSubreddit}
      />
    </>
  );
}

export default App;
