import { IoIosTrendingUp } from "react-icons/io";
import { FaComments } from "react-icons/fa";

const ArticleInfo = (b) => {
  return (
    <div className="flex w-full p-5">
      <div className="flex md:w-2/3 mx-auto rounded-md bg-white bg-opacity-10">
        <div className="flex flex-col mx-auto md:items-center p-5 gap-5 break-words">
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
          <div className="flex justify-center">
            <img src={b.article.url_overridden_by_dest} alt="" />
            {b.article.secure_media?.reddit_video?.fallback_url && (
              <button
                onClick={() => {
                  window.location.href =
                    "https://reddit.com" + b.article.permalink;
                }}
              >
                <div className="flex bg-orange-500 p-4 rounded-full text-white">
                  Watch on Reddit
                </div>
              </button>
            )}
          </div>
          <div className="flex text-white text-opacity-50">
            {b.article.selftext}
          </div>
          <div className="flex w-full justify-end gap-5">
            <div className="flex text-white text-opacity-50 items-center gap-1 p-2.5 bg-white bg-opacity-10 rounded-md">
              <IoIosTrendingUp className="text-green-500" />
              {b.article.ups}
            </div>
            <div className="flex text-white text-opacity-50 items-center gap-1 bg-white bg-opacity-10 rounded-md p-2.5">
              <FaComments />
              {b.article.num_comments}
            </div>
          </div>

          <div className="flex flex-col w-full bg-white bg-opacity-10 rounded-md p-5 text-white gap-5">
            <div className="text-opacity-75 font-bold">Comments</div>
            <div className="flex text-white flex-col break-words gap-5">
              {b.comments.slice(0, 10).map((comment) => {
                const { data } = comment;
                return (
                  <div key={data.id} className="">
                    <li>{data.body}</li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
