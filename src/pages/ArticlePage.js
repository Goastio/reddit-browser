import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleInfo from "../components/ArticleInfo";
import { PropagateLoader } from "react-spinners";

const ArticlePage = ({ subreddit, setSubreddit }) => {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}/${id}.json`).then((res) => {
      if (res.status !== 200) {
        console.log("error");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          setArticle(data[0].data.children[0].data);
          setComments(data[1].data.children);
        }
      });
    });
  }, []);

  if (!article) {
    return (
      <PropagateLoader
        color="#f97316"
        cssOverride={{}}
        size={20}
        speedMultiplier={1}
        className="w-full flex justify-center"
      />
    );
  }
  return (
    <div className="flex bg-neutral-900 w-full">
      <ArticleInfo
        article={article}
        subreddit={subreddit}
        setSubreddit={setSubreddit}
        comments={comments}
      />
    </div>
  );
};

export default ArticlePage;
