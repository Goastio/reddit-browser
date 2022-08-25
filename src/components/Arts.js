import { IoIosTrendingUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Arts = (b) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex bg-white bg-opacity-10 w-full mx-auto md:w-2/3 rounded-md">
        <button
          className="flex flex-col w-full p-5"
          onClick={() => navigate(`/article/${b.article.id}`)}
          to={`/article/${b.article.title}`}
        >
          <div className="flex text-white text-opacity-50 text-sm px-5">
            <a
              href={"https://reddit.com/r/" + b.article.subreddit}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition"
            >
              r/{b.article.subreddit}
            </a>
          </div>
          <div className="flex p-5">
            <div className="flex text-start text-white md:text-lg">
              {b.article.title}
            </div>
          </div>
          <div className="flex w-full text-white text-opacity-50 items-center gap-1 text-sm h-full justify-end px-5">
            <IoIosTrendingUp className="text-green-500" />
            {b.article.ups}
          </div>
        </button>
      </div>
    </>
  );
};

export default Arts;
