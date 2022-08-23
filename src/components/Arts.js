import { IoIosTrendingUp } from "react-icons/io";
const Arts = (props) => {
  return (
    <>
      <div className="flex relative bg-white bg-opacity-10 w-full rounded-md p-5">
        <a
          href={"https://reddit.com" + props.article.permalink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-white md:text-2xl">{props.article.title}</div>
        </a>
        <div className="flex absolute w-full text-white text-opacity-50 justify-end items-center bottom-0 gap-1 text-sm px-10">
          <IoIosTrendingUp className="text-green-500" />
          {props.article.ups}
        </div>
      </div>
    </>
  );
};

export default Arts;
