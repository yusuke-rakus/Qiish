import React from "react";
import { Select, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ReactMarkdown from "react-markdown";
import { ArticleAddFormType } from "../../const/Types";
import remarkGfm from "remark-gfm";
import { SwapOutlined } from "@ant-design/icons";

const ArticleAddFrom: React.FC<ArticleAddFormType> = ({
  previewContent,
  prevFlag,
  Fnc,
  saveStatus,
  SKILLTAGS,
}) => {
  return (
    <div>
      <Form onSubmitCapture={Fnc.addOrSave}>
        <div className="flex justify-end gap-2">
          <Button
            className=""
            shape="default"
            size="large"
            htmlType="button"
            onClick={Fnc.setPreviewFlag}
          >
            <span className="text-sky-400 hover:border-gray-300">
              プレビューモード
            </span>
          </Button>
          <Button className="" size="large" shape="default" htmlType="submit">
            <span className="text-sky-400 hover:border-gray-300">
              {saveStatus ? "投稿" : "下書き保存"}
            </span>
          </Button>
          <Button
            className=""
            size="large"
            shape="default"
            htmlType="button"
            onClick={Fnc.setSaveStatus}
          >
            <span className="text-sky-400 hover:border-gray-300">
              <SwapOutlined />
            </span>
          </Button>
        </div>

        <Form.Item
          name="title"
          rules={[
            { required: true, message: `タイトルが空欄です` },
            {
              max: 50,
              message: "タイトルは 50 文字以下入力してください",
            },
          ]}
        >
          <span>
            <input
              className="mt-8 px-4 py-8 w-full h-10 text-4xl font-semibold focus:outline-none"
              placeholder="記事タイトル"
              onChange={Fnc.setTitle}
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
            bordered={false}
            onChange={Fnc.setTags}
          >
            {SKILLTAGS.map((SkillType) => {
              return (
                <Select.OptGroup key={SkillType.label} label={SkillType.label}>
                  {SkillType.tags.map((tags) => {
                    return (
                      <Select.Option key={tags.id} value={tags.id}>
                        {tags.skill}
                      </Select.Option>
                    );
                  })}
                </Select.OptGroup>
              );
            })}
          </Select>
        </Form.Item>
        <div className="w-full p-4 m-2 bg-white border shadow">
          {prevFlag ? (
            <div className="w-full p-2 hover:bg-gray-100">
              <Form.Item
                name="content"
                rules={[{ required: true, message: "記事が空欄です" }]}
              >
                <TextArea
                  placeholder="マークダウン記法で記述してください"
                  autoSize={{ minRows: 5 }}
                  bordered={false}
                  onChange={Fnc.setContent}
                />
              </Form.Item>
            </div>
          ) : (
            <div className="w-full p-2">
              <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
                {previewContent}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};

export default ArticleAddFrom;
