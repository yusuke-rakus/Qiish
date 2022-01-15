import Link from "next/link";
import React, { useState } from "react";
import NavItems from "../molecules/NavItems";

const HeaderComp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <React.Fragment>
      <Link href="/">
        <a className="text-white font-bold text-2xl absolute top-4 left-12">
          Quish
        </a>
      </Link>
      <span className="pl-40 w-1/3">
        {/* なぜtypeをsearchにしているのか。ユーザーエージェントが別のスタイル */}
        <input
          type="search"
          className="p-2 pl-4 w-1/3 rounded-full absolute top-3 left-25"
          placeholder="キーワードを入力して記事を検索する"
        />
      </span>

      <span className="absolute flex top-5 right-12">
        {/* ヘッダーのナビゲーション */}
        <NavItems isLogin={isLogin} />
      </span>
    </React.Fragment>
  );
};

export default HeaderComp;
