import { IoIosTrendingUp } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import unescape from "lodash.unescape";
import { data } from "autoprefixer";

const ArticleInfo = (b) => {
  if (!b?.article) {
    return null;
  }
  return (
    <div className="flex w-full p-5">
      <div className="flex mx-auto w-full max-w-screen-md rounded-md bg-white bg-opacity-10">
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
          <div className="flex bg-white bg-opacity-10 w-full flex-col rounded-md p-5 gap-2.5">
            <div className="flex text-white text-xl font-semibold justify-center self-center">
              {b.article.title}
            </div>
            <div className="flex justify-center">
              {!b.article.url_overridden_by_dest?.includes("redd.it") ? (
                <button
                  onClick={() => {
                    window.open(
                      "https://reddit.com" + b.article.permalink,
                      "_blank"
                    );
                  }}
                >
                  <div className="flex bg-orange-500 hover:bg-opacity-90 transition p-2.5 rounded-full text-white">
                    View on Reddit
                  </div>
                </button>
              ) : (
                <img src={b.article.url_overridden_by_dest} alt="" />
              )}
              {b.article.secure_media?.reddit_video?.fallback_url && (
                <button
                  onClick={() => {
                    window.open(
                      "https://reddit.com" + b.article.permalink,
                      "_blank"
                    );
                  }}
                >
                  <div className="flex bg-orange-500 hover:bg-opacity-90 transition p-2.5 rounded-full text-white">
                    Watch on Reddit
                  </div>
                </button>
              )}
            </div>
            {b.article.selftext_html && (
              <div
                className="flex flex-col text-white text-opacity-80 selfhtml leading-6"
                dangerouslySetInnerHTML={{
                  __html: unescape(b.article.selftext_html),
                }}
              ></div>
            )}
          </div>
          <div className="flex w-full justify-end gap-5 text-sm">
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
            <div className="flex w-full items-center gap-5">
              <div className="text-opacity-90 text-white font-bold">
                Top Comments
              </div>
              <div className="text-xs py-0.5 px-1 bg-white bg-opacity-10 md:py-1 md:px-2 rounded-full">
                <button
                  onClick={() => {
                    window.open(
                      "https://reddit.com" + b.article.permalink,
                      "_blank"
                    );
                  }}
                >
                  <div className="flex text-white hover:text-orange-500 transition">
                    View all comments on Reddit
                  </div>
                </button>
              </div>
            </div>
            <div className="flex text-white text-sm flex-col break-words gap-5">
              {b.comments.slice(0, 10).map((comment) => {
                const { data } = comment;
                return (
                  <div
                    className="flex flex-col text-white text-opacity-80 selfhtml"
                    dangerouslySetInnerHTML={{
                      __html: unescape(data.body),
                    }}
                  ></div>
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
