import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { CommentFormType } from "../../const/Types";

const CommentForm: React.FC<CommentFormType> = ({
  setCommentText,
  onAddComment,
}) => {
  return (
    <div>
      <Form onSubmitCapture={onAddComment}>
        <div className="w-full p-2 text-xl">
          <Form.Item
            name="content"
            rules={[{ required: true, message: "コメントが空欄です" }]}
          >
            <TextArea
              placeholder="コメントを記入する"
              autoSize={{ minRows: 3 }}
              onChange={setCommentText}
              bordered={false}
            />
          </Form.Item>
        </div>
        <div className="flex justify-end px-4 py-2">
          <button className="px-4 py-1 text-white bg-sky-500 hover:bg-sky-500 rounded shadow">
            この記事にコメントする
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CommentForm;
