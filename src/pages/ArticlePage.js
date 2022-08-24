const ArticlePage = (b) => {
  return (
    <div className="flex w-full min-h-screen p-10">
      <div className="flex flex-col w-full rounded-md bg-white bg-opacity-20 p-5 gap-10">
        <div className="flex w-full text-white text-2xl">
          This is where all of the text for the articles will go.
        </div>
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="lmao"
          />
        </div>
        <div className="flex">
          This is where upvotes, and comment count will display.
        </div>
        <div className="flex">This is where comments will be rendered</div>
      </div>
    </div>
  );
};

export default ArticlePage;
