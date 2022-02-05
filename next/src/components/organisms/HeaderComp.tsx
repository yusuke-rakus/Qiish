import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Drawer, Space } from "antd";
import { fetchSearchedArticle } from "../../lib/api/fetchData";

// 記事検索の型
export type search = {
  visible: boolean;
  keyword: string;
  onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  search: () => Promise<void>;
  onClose: () => void;
  showDrawer: () => void;
};

const HeaderComp: React.FC<search> = ({
  visible,
  keyword,
  onChangeKeyword,
  search,
  onClose,
  showDrawer,
}) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href={"/profile"}>プロフィール</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href={"/loginuser"}>ログアウト</a>
      </Menu.Item>
    </Menu>
  );

  // const [visible, setVisible] = useState(false);
  // const [keyword, setKeyword] = useState("");

  // const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) =>
  //   setKeyword(e.target.value);

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };

  // const search = async () => {
  //   fetchSearchedArticle(keyword);
  //   setVisible(false);
  // };

  return (
    <React.Fragment>
      <div className="flex gap-1 justify-end">
        <button className="m-4 text-3xl hover:text-orange-500">
          <SearchOutlined type="primary" onClick={showDrawer} />
        </button>

        <Drawer
          title={
            <input
              type="text"
              onChange={onChangeKeyword}
              placeholder="キーワードを入力"
              className="p-3 text-xl w-11/12 "
            />
          }
          placement="top"
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <button
                onClick={search}
                className="px-5 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded"
              >
                検索
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded"
              >
                Cancel
              </button>
            </Space>
          }
        ></Drawer>

        <Dropdown overlay={menu}>
          <a
            className="m-4 text-3xl text-gray-600 hover:text-orange-500 rounded-full ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <UserOutlined /> <DownOutlined />
          </a>
        </Dropdown>

        {/* 画面遷移のためLink */}
        <Link href={"/articleAdd"}>
          <a className="px-4 py-2 m-4 text-white hover:text-white font-semibold bg-orange-400 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 rounded-md shadow-xl">
            Add News
          </a>
        </Link>
        <Link href={"/qiitaList"}>
          <a className="px-4 py-2 mr-5 my-4 text-white hover:text-white font-semibold bg-orange-400 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 rounded-md shadow-xl">
            Qiita
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default HeaderComp;
