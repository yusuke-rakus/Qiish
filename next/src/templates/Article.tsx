import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Image from "next/image";
import { ArticleComp } from "../components/organisms";

const Article: React.FC = () => {
  return (
    <div className="h-full">
      <ArticleComp user_info_data={user_info_data} />
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
          <div className="flex justify-end px-4 py-2">
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
  { user_info_id: 1, skill_id: 1, skill_name: "JavaScript" },
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
