import React from "react";

const SearchArticles: React.FC = () => {
  return (
    <div className="h-32 flex-col ">
      <div className="mt-8 mx-4 text-base font-semibold">キーワード検索</div>
      <input
        type="text"
        className="m-3 px-2 py-2 w-11/12 text-xl rounded-md border-2 focus:outline-none  focus:border-sky-500"
      />
    </div>
  );
};

export default SearchArticles;
