import React, { useState } from "react";
import { ArticleAddFrom } from "../components/old_organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const ArticleAdd: React.FC = () => {
  const [contnent, setContent] = useState("");
  const [previewFlag, setPreviewFlag] = useState(true);
  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 w-2/5 h-auto">
          <Link href={"/"}>
            <a className="text-gray-400 hover:text-slate-600">
              <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
            </a>
          </Link>

          <ArticleAddFrom
            user_info_data={user_info_data}
            previewContent={contnent}
            prevFlag={previewFlag}
            onChange={setContent}
          />
        </div>
        <button onClick={() => setPreviewFlag(!previewFlag)}>preview</button>
      </div>
    </div>
  );
};

export default ArticleAdd;

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
  engineer_type: "FR",
  comment: "趣味はサウナです。",
  skill_tags: skill_tags,
};
