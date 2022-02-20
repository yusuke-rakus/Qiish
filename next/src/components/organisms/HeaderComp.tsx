import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Drawer, Space } from "antd";
import { fetchSearchedArticle } from "../../lib/api/fetchData";

// 記事検索の型
export type search = {
  visible: boolean;
  keyword?: string;
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
        <a href={"/articleSaved"}>下書き記事</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href={"/loginuser"}>ログアウト</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <div className="flex gap-1 justify-between border">
        <div className="m-4 ml-12 text-4xl text-sky-400 font-semibold">
          Qiish
        </div>
        <div>
          <button className="p-4 text-3xl hover:text-blue-400">
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
                  className="px-5 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded"
                >
                  検索
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded"
                >
                  Cancel
                </button>
              </Space>
            }
          ></Drawer>

          <Dropdown overlay={menu}>
            <a
              className="m-4 text-3xl text-gray-600 hover:text-blue-400 rounded-full ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <UserOutlined /> <DownOutlined />
            </a>
          </Dropdown>

          {/* 画面遷移のためLink */}
          <Link href={"/articleAdd"}>
            <a className="px-4 py-3 m-4 text-white hover:text-white font-semibold bg-sky-400 hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 rounded-md shadow-xl">
              Add News
            </a>
          </Link>
          <Link href={"/qiitaList"}>
            <a className="px-4 py-3 mr-5 my-4 text-white hover:text-white font-semibold bg-sky-400 hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 rounded-md shadow-xl">
              Qiita
            </a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComp;
