import React from "react";
import { Select, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ReactMarkdown from "react-markdown";
import { ArticleSaveFromType } from "../../const/Types";
import { SwapOutlined } from "@ant-design/icons";

const ArticleEditFrom: React.FC<ArticleSaveFromType> = ({
  prevFlag,
  articleSave,
  saveFnc,
  saveStatus,
  SKILLTAGS,
}) => {
  return (
    <div>
      <Form
        initialValues={{
          title: articleSave.title,
          content: articleSave.content,
          tags: articleSave.tags,
        }}
        onSubmitCapture={saveFnc.addOrSave}
      >
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
          <span className="p-2">
            <Input
              className="placeholder-2xl focus:placeholder-gray-400"
              placeholder="タイトル"
              bordered={false}
              size={"large"}
              defaultValue={articleSave.title}
              onChange={saveFnc.onChangeTitle}
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
            onChange={saveFnc.setTagsNum}
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
        <div className="w-full p-4 m-2 bg-white rounded-lg border shadow-md">
          {prevFlag ? (
            <div className="w-full p-2 rounded-xl hover:bg-gray-100">
              <Form.Item
                name="content"
                rules={[{ required: true, message: "記事が空欄です" }]}
              >
                <TextArea
                  placeholder="マークダウン記法で記述してください"
                  autoSize={{ minRows: 5 }}
                  bordered={false}
                  onChange={saveFnc.onChangeContent}
                />
              </Form.Item>
            </div>
          ) : (
            <div className="w-full p-2 rounded-xl bg-gray-100">
              <ReactMarkdown className="markdown">
                {articleSave.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            className="drop-shadow-2xl mr-3"
            shape="round"
            size="large"
            htmlType="button"
            onClick={saveFnc.setPreviewEditFlag}
          >
            <span className="text-[rgb(255,195,98)] hover:border-[rgb(255,215,150)] hover:text-[rgb(255,207,131)]">
              プレビューモード
            </span>
          </Button>
          <Button
            className="drop-shadow-2xl"
            size="large"
            shape="round"
            htmlType="submit"
          >
            <span className="text-[rgb(255,195,98)] hover:border-[rgb(255,215,150)] hover:text-[rgb(255,207,131)]">
              {saveStatus ? "投稿" : "下書き投稿"}
            </span>
          </Button>
          <Button
            className="drop-shadow-2xl"
            size="large"
            shape="round"
            htmlType="button"
            onClick={saveFnc.setSaveStatus}
          >
            <span className="text-[rgb(255,195,98)] hover:border-[rgb(255,215,150)] hover:text-[rgb(255,207,131)]">
              <SwapOutlined />
            </span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ArticleEditFrom;
