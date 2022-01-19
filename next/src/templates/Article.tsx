import React from "react";
import { HeartOutlined, MessageTwoTone } from "@ant-design/icons";
import { ProfileSmall } from "../components/organisms";
import TextArea from "antd/lib/input/TextArea";
import Image from "next/image";

const Article: React.FC = () => {
  const tagStyle =
    "m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg";

  const tagsName = [
    "フロントエンド",
    "CSS",
    "tailwindCSS",
    "初心者",
    "フロントエンド",
    "tailwindCSS",
    "初心者",
    "フロントエンド",
    "CSS",
    "tailwindCSS",
    "初心者",
    "フロントエンド",
    "CSS",
    "tailwindCSS",
    "初心者",
  ];
  return (
    <div className="h-full">
      <div className="flex justify-center">
        <div className="text-center m-10 bg-white w-1/2 h-auto rounded-lg border shadow-md">
          <div className="pb-10 pt-20 text-2xl font-bold">
            {/* title(Article) */}
            TailwindCSSのチートシートを公開します。
          </div>
          <div className="pb-2">
            {/* likeCount(Article) */}
            <div className="flex justify-center items-center">
              <button>
                <HeartOutlined className="text-2xl hover:text-orange-500" />
              </button>
              <a
                href="#"
                className="ml-1 text-xl text-black hover:text-gray-400"
              >
                10
              </a>{" "}
              &nbsp;
              {/* commentCount(Article) */}
              <MessageTwoTone twoToneColor="#f97316" className="text-2xl" />
              <span className="ml-1 text-xl">1</span>
            </div>
          </div>
          <div className="px-10">
            {/* tags(Article) */}
            <div className="flex flex-wrap">
              {tagsName.map((tagName) => {
                return (
                  <span className={tagStyle} key={tagName}>
                    {tagName}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="pt-1 text-slate-500 text-center">
            {/* posted_date(Article) */}
            <span>投稿日: 2021年12月7日</span>
          </div>
          <p className="px-14 pt-6 text-lg">
            {/* content(Article) */}
            プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
          </p>
        </div>

        <div className="w-1/5 mt-8">
          {/* profile(User) */}
          <ProfileSmall user_info_data={user_info_data} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
          <div className="my-2 text-3xl font-bold text-center">コメント</div>
          <hr />
          <div className="ml-4 mb-3">
            <div className=" mt-4 flex">
              {/* <Link></Link>タグ */}
              {/* image(User) */}
              <Image
                className="rounded-full"
                src={"/img/avatar.jpg"}
                alt="アバター"
                width={30}
                height={30}
              />
              <div className="flex items-center pl-1">
                {/* userName(User) */}@{user_info_data.user_name}
              </div>
            </div>
            {/* content(Comment) */}
            <div className="pl-2 py-3 pr-6 text-center">
              プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
            </div>
            <div className="flex items-center">
              {/* likeList(Comment) */}
              <button>
                <HeartOutlined className="text-xl text-gray-300 hover:text-orange-500" />
              </button>
              <a
                href="#"
                className="ml-1 text-md text-black hover:text-gray-400"
              >
                10
              </a>
              {/* posted_date(Comment) */}
              <span className="ml-6">2021-11-1 11:40</span>
            </div>
          </div>
          <hr />
          <div className="ml-4 mb-3">
            <div className=" mt-4 flex">
              {/* image(User) */}
              <Image
                className="rounded-full"
                src={"/img/avatar.jpg"}
                alt="アバター"
                width={30}
                height={30}
              />
              <div className="flex items-center pl-1">
                {/* userName(User) */}@{user_info_data.user_name}
              </div>
            </div>
          </div>
          <div className="w-full p-2 text-xl">
            <TextArea
              placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
              autoSize={{ minRows: 3 }}
              bordered={false}
            />
          </div>
          <hr />
          <div className="flex justify-between px-4 py-2">
            <div>
              {/* <PictureFilled className="text-3xl" style={{ color: "#BCBCBC" }} /> */}
            </div>
            <button className="p-1 text-white rounded-lg bg-orange-500 hover:bg-orange-500 drop-shadow-2xl">
              コメント
            </button>
          </div>
        </div>
        <div className="w-1/5 mt-10"></div>
      </div>
    </div>
  );
};

export default Article;

// APIでデータが取ってこれれば不要
// ------------------------------------------
// デモユーザー
const user_data = {
  user_name: "rakus111111",
  password: "Yamtataro123",
};

const skill_tags = [
  { user_info_id: 1, skill_id: 1, skill_name: "フロントエンド" },
  { user_info_id: 1, skill_id: 5, skill_name: "TypeScript" },
  { user_info_id: 1, skill_id: 6, skill_name: "Vue" },
  { user_info_id: 1, skill_id: 3, skill_name: "TailwindCSS" },
];

export const user_info_data = {
  user_info_id: 1,
  first_name: "太郎",
  last_name: "山田",
  user_name: user_data.user_name,
  email: "yama@taro.com",
  engineer_type: "",
  comment: "趣味はサウナです。",
  skill_tags: skill_tags,
  enginner_type: "FR",
};
