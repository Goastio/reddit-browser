import "./index.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import Nav from "./components/Nav";

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
      <div className="flex flex-col w-full bg-neutral-900">
        <Nav
          articles={articles}
          setArticles={setArticles}
          subreddit={subreddit}
          setSubreddit={setSubreddit}
        />
        <div className="flex w-full md:w-2/3 mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  articles={articles}
                  setArticles={setArticles}
                  subreddit={subreddit}
                  setSubreddit={setSubreddit}
                />
              }
            />
            <Route
              path="/article/:id"
              element={
                <ArticlePage
                  articles={articles}
                  setArticles={setArticles}
                  subreddit={subreddit}
                  setSubreddit={setSubreddit}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
