import ArticleInfo from "../components/ArticleInfo";

const ArticlePage = ({
  articles,
  setArticles,
  subreddit,
  setSubreddit,
  replies,
  setReplies,
}) => {
  return (
    <div className="flex flex-col">
      {articles.map((article, i) => {
        return (
          <ArticleInfo
            key={i}
            article={article.data}
            subreddit={subreddit}
            setSubreddit={setSubreddit}
            replies={replies}
            setReplies={setReplies}
          />
        );
      })}
    </div>
  );
};

export default ArticlePage;
