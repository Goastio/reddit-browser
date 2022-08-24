import { IoIosTrendingUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Arts = (b) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex bg-white bg-opacity-10 w-full rounded-md">
        <button
          className="flex flex-col w-full p-5"
          onClick={() => navigate(`/article/${b.article.id}`)}
          to={`/article/${b.article.title}`}
        >
          <div className="flex text-white text-opacity-50 text-sm font-thin hover:text-orange-300 transition">
            <a
              href={"https://reddit.com/r/" + b.article.subreddit}
              target="_blank"
              rel="noreferrer"
            >
              r/{b.article.subreddit}
            </a>
          </div>
          <div className="flex p-5">
            <div className="flex text-start text-white md:text-xl">
              {b.article.title}
            </div>
          </div>
          <div className="flex w-full text-white text-opacity-50 items-center gap-1 text-sm h-full justify-end">
            <IoIosTrendingUp className="text-green-500" />
            {b.article.ups}
          </div>
        </button>
      </div>
    </>
  );
};

export default Arts;