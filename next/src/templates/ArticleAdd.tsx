import React, { useState } from "react";
import { ArticleAddFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useToggle } from "../hooks";

const ArticleAdd: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [previewFlag, setPreviewFlag] = useToggle(true);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const changeTags = (value: React.SetStateAction<never[]>) => {
    setTags(value);
  };

  const Fnc = {
    changeTitle,
    changeContent,
    changeTags,
    setPreviewFlag,
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 lg:w-4/5 md:w-3/5 sm:w-2/5 h-auto">
          <Link href={"/"}>
            <a className="text-gray-400 hover:text-slate-600">
              <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
            </a>
          </Link>
          <div>
            <ArticleAddFrom
              previewContent={content}
              prevFlag={previewFlag}
              Fnc={Fnc}
              SKILLTAGS={SKILLTAGS}
            />
          </div>
        </div>
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
