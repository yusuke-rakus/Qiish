import React, { useState } from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const HeaderComp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <React.Fragment>
      <div className="flex gap-1 justify-end">
        <button className="m-4 text-3xl">
          <SearchOutlined />
        </button>

        {/* 画面遷移のためLink */}
        <Link href={"/profile"}>
          <a className="text-black hover:text-gray-400 m-4 text-3xl rounded-full">
            <UserOutlined />
          </a>
        </Link>

        {/* 画面遷移のためLink */}
        <Link href={"/articleAdd"}>
          <a className="px-4 py-2 mr-10 m-4 text-white hover:text-white font-semibold bg-orange-400 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 rounded-md shadow-xl">
            Add News
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default HeaderComp;
