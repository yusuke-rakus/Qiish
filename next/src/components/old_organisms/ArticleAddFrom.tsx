import React from "react";
import Image from "next/image";
import { Select, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ReactMarkdown from "react-markdown";

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
  previewContent: string;
  prevFlag: boolean;
  onChange: Function;
};

const ArticleAddFrom: React.FC<Props> = ({
  user_info_data,
  previewContent,
  prevFlag,
  onChange,
}) => {
  const tagStyle =
    "mx-1 mb-1 p-1 bg-[rgb(255,195,98)] text-white text-center font-sans text-xs shadow-md rounded-lg";
  // タグはまとめることも可能
  const frontTags = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue",
  ];
  const backendTags = ["Java", "Ruby", "PHP", "Phyton"];
  const otherTags = ["Nodejs", "docker", "flutter"];
  const engineer_types = ["FR", "WEB", "ML", "CL", "QA"];

  return (
    <Form>
      <Form.Item
        name="title"
        rules={[{ required: true, message: "タイトルが空欄です" }]}
      >
        <span className="p-2">
          <Input
            className="placeholder-2xl focus:placeholder-gray-400"
            placeholder="タイトル"
            bordered={false}
            size={"large"}
          />
        </span>
      </Form.Item>
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
      <div className="w-full p-4 m-2 bg-white rounded-lg border shadow-md">
        {prevFlag ? (
          <div className="w-full p-2 rounded-xl hover:bg-gray-100">
            <Form.Item
              name="content"
              rules={[{ required: true, message: "記事が空欄です" }]}
            >
              <TextArea
                placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
                autoSize={{ minRows: 5 }}
                bordered={false}
                onChange={(e) => onChange(e.target.value)}
              />
            </Form.Item>
          </div>
        ) : (
          <div className="w-full p-2 rounded-xl bg-gray-100">
            <div className="markdown">
              <ReactMarkdown>{previewContent}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
      <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
        <Button
          className="drop-shadow-2xl"
          size="large"
          shape="round"
          htmlType="submit"
        >
          <span className="text-[rgb(255,195,98)] hover:border-[rgb(255,215,150)] hover:text-[rgb(255,207,131)]">
            {" "}
            保存
          </span>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ArticleAddFrom;
