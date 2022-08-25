import { IoIosTrendingUp } from "react-icons/io";

const ArticleInfo = (b) => {
  return (
    <div className="flex w-full min-h-min p-10">
      <div className="flex flex-col md:w-2/3 md:mx-auto rounded-md bg-white bg-opacity-10 p-5">
        <div className="flex flex-col md:items-center gap-5">
          <div className="flex text-white text-opacity-50 text-sm">
            <a
              href={"https://reddit.com/r/" + b.article.subreddit}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition"
            >
              {b.article.subreddit_name_prefixed}
            </a>
          </div>
          <div className="flex text-white text-xl font-semibold">
            {b.article.title}
          </div>
          <div className="flex text-white text-opacity-50">
            {b.article.selftext}
          </div>
          <div className="flex">
            This is where upvotes, and comment count will display.
          </div>
          <div className="flex w-full text-white text-opacity-50 items-center gap-1 text-sm justify-end md:justify-center">
            <IoIosTrendingUp className="text-green-500" />
            {b.article.ups}
          </div>
          <div className="flex text-white justify-end text-opacity-50 text-sm md:text-xl">
            <a
              href={"https://reddit.com" + b.article.permalink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition"
            >
              Comments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
