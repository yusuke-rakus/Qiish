import Link from "next/link";
import Router from "next/router";
import React, { useState, ChangeEvent } from "react";
import getCookie, { removeUserId } from "../../lib/cookie/handleCookie";
import toast, { Toaster } from "react-hot-toast";
import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Drawer, Space } from "antd";

// 記事検索の型
export type search = {
  visible: boolean;
  keyword?: string;
  onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  searchArticles: () => Promise<void>;
  onClose: () => void;
  showDrawer: () => void;
  reloadArticles: () => void;
};

const HeaderComp: React.FC<search> = ({
  visible,
  onChangeKeyword,
  searchArticles,
  onClose,
  showDrawer,
  reloadArticles,
}) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <button
          onClick={() => {
            const guestId = getCookie();
            if (guestId == null) {
              toast.error(`ログインして下さい`);
              Router.push("/");
            } else if (guestId != null) {
              Router.push("/profile");
            }
          }}
        >
          プロフィール
        </button>
      </Menu.Item>
      <Menu.Item key="1">
        <button
          onClick={() => {
            const guestId = getCookie();
            if (guestId == null) {
              toast.error(`ログインして下さい`);
              Router.push("/");
            } else if (guestId != null) {
              Router.push("/articleSaved");
            }
          }}
        >
          下書き保存
        </button>
      </Menu.Item>
      <Menu.Item key="2">
        <button
          onClick={() => {
            removeUserId();
            Router.push("/");
          }}
        >
          ログアウト
        </button>
      </Menu.Item>
    </Menu>
  );

  const goToAddArticle = () => {
    const guestId = getCookie();
    if (guestId == null) {
      toast.error(`ログインして下さい`);
      Router.push("/");
    } else if (guestId != null) {
      Router.push("/articleAdd");
    }
  };

  const goToQiitaList = () => {
    const guestId = getCookie();
    if (guestId == null) {
      toast.error(`ログインして下さい`);
      Router.push("/");
    } else if (guestId != null) {
      Router.push("/qiitaList");
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <div className="flex gap-1 justify-between border">
        <button
          onClick={reloadArticles}
          className="m-4 ml-12 text-5xl text-sky-400 font-semibold"
        >
          Quish
        </button>
        <div>
          <button className="p-4 text-3xl hover:text-sky-400">
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
                  onClick={searchArticles}
                  className="px-5 py-2 text-white bg-sky-400 hover:bg-sky-500 rounded"
                >
                  検索
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-2 text-white bg-sky-400 hover:bg-sky-500 rounded"
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
              <UserOutlined />
              <DownOutlined />
            </a>
          </Dropdown>

          <button
            onClick={goToAddArticle}
            className="px-4 py-3 m-4 text-white hover:text-white font-semibold bg-sky-400 hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 rounded-md shadow-xl"
          >
            Add News
          </button>
          <button
            onClick={goToQiitaList}
            className="px-4 py-3 mr-5 my-4 text-white hover:text-white font-semibold bg-sky-400 hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 rounded-md shadow-xl"
          >
            Qiita
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComp;
