import "./index.css";
import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import Nav from "./components/Nav";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");

  const location = useLocation();



  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex flex-col">
        {location.pathname === "/" && (
          <Nav
            articles={articles}
            setArticles={setArticles}
            subreddit={subreddit}
            setSubreddit={setSubreddit}
          />
        )}
        <div className="flex w-full">
          <div className="flex w-full mx-auto">
            <Routes>
              <Route
                exact
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
                exact
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
      </div>
    </>
  );
}

export default App;
