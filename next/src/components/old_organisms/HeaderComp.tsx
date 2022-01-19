import React, { useState } from "react";
import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Menu, Dropdown } from "antd";

const HeaderComp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href={"/profile"}>プロフィール</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href={"/resetPassword"}>パスワード変更</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href={"/loginuser"}>ログアウト</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <React.Fragment>
      <div className="flex gap-1 justify-end">
        <button className="m-4 text-3xl">
          <SearchOutlined />
        </button>

        <Dropdown overlay={menu}>
          <a
            className="m-4 text-3xl text-gray-600 rounded-full ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <UserOutlined /> <DownOutlined />
          </a>
        </Dropdown>

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
