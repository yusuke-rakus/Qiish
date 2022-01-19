import React from "react";
import Image from "next/image";
import { Select, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Option, OptGroup } = Select;

// FCの型定義
type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
};

const ProfileEditFrom: React.FC<Props> = ({ user_info_data }) => {
  // タグはまとめることも可能
  const frontTags = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "Angular",
    "Vue",
    "TypeScript",
    "CoffeeScript",
    "Node.js",
  ];
  const backendTags = [
    "C",
    "C+",
    "C#",
    "Java",
    "Ruby",
    "PHP",
    "Phyton",
    "Objective-C",
    "Perl",
  ];
  const otherTags = [
    "Swift",
    "kotolin",
    "Bootstrap",
    "JUnit",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "SQLite",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "AWS",
    "Heroku",
    "Linux",
    "Bash",
    "CentOS",
    "Redmine",
    "shell",
    "Redmine",
    "Postman",
    "Atom",
    "ssh",
  ];
  const engineer_types = ["FR", "WEB", "ML", "CL", "QA"];

  return (
    <Form>
      <div className="w-full p-8 m-2 bg-white rounded-lg border shadow-md">
        <div className="m-4">
          <div className="flex justify-center items-center">
            {/* image(User) */}
            <Image
              className="rounded-full"
              src={"/img/avatar.jpg"}
              alt="アバター"
              width={120}
              height={120}
            />
            <div className="pt-7">
              {/* userName(User) */}
              <Form.Item
                name="userName"
                rules={[{ required: true, message: "名前が空欄です" }]}
              >
                <Input
                  className="focus:placeholder-gray-400"
                  placeholder="名前を入力"
                  bordered={false}
                  size={"large"}
                />
              </Form.Item>
              {/* engineerType(User) */}
              <Form.Item
                name="engineerType"
                rules={[{ required: true, message: "職種が空欄です" }]}
              >
                <Select
                  size={"large"}
                  placeholder="職種"
                  className="w-20"
                  bordered={false}
                >
                  {engineer_types.map((engineer) => {
                    return (
                      <Option key={engineer} value={engineer}>
                        {engineer}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div>
            {/* tags(User) */}
            <Form.Item
              name="tags"
              rules={[{ required: true, message: "使用技術が空欄です" }]}
            >
              <Select
                mode="multiple"
                allowClear
                placeholder="使用技術"
                optionLabelProp="label"
                bordered={false}
              >
                <OptGroup label="フロント">
                  {frontTags.map((tag) => {
                    return (
                      <Option key={tag} value={tag}>
                        {tag}
                      </Option>
                    );
                  })}
                </OptGroup>
                <OptGroup label="バックエンド">
                  {backendTags.map((tag) => {
                    return (
                      <Option key={tag} value={tag}>
                        {tag}
                      </Option>
                    );
                  })}
                </OptGroup>
                <OptGroup label="その他">
                  {otherTags.map((tag) => {
                    return (
                      <Option key={tag} value={tag}>
                        {tag}
                      </Option>
                    );
                  })}
                </OptGroup>
              </Select>
            </Form.Item>
          </div>
        </div>
        {/* comment(User) */}
        <div className="text-xl text-center m-2">
          <span className="block w-full p-2 text-xl rounded-xl hover:bg-gray-100">
            <Form.Item
              name="description"
              rules={[{ required: true, message: "自己紹介が空欄です" }]}
            >
              <TextArea
                placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
                autoSize={{ minRows: 5 }}
                bordered={false}
                value={user_info_data.comment}
              />
            </Form.Item>
          </span>
        </div>
      </div>
      <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
        <Button
          className="drop-shadow-2xl"
          size="large"
          shape="round"
          htmlType="submit"
        >
          <span className="text-orange-500 hover:text-orange-300">保存</span>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileEditFrom;
