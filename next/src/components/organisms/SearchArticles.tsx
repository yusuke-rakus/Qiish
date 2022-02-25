import React, { ChangeEvent } from "react";

// 記事検索の型
export type search = {
  keyword?: string;
  onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  searchArticles: () => Promise<void>;
};

const SearchArticles: React.FC<search> = ({
  searchArticles,
  onChangeKeyword,
}) => {
  return (
    <div className="flex-col">
      <div className="mt-4 px-4 py-2 flex justify-between">
        <div className="text-base font-semibold">キーワード検索</div>
        <button
          onClick={searchArticles}
          className="px-4 py-1 text-sky-400 hover:text-white bg-white hover:bg-sky-400 border-2 border-sky-400 rounded"
        >
          検索
        </button>
      </div>
      <input
        type="text"
        onChange={onChangeKeyword}
        className="mx-3 mb-4 px-2 py-2 w-11/12 text-xl rounded-md border-2 focus:outline-none  focus:border-sky-500"
      />
    </div>
  );
};

export default SearchArticles;
