import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { TextEventType } from "../../hooks/useInputState";

type Props = {
  setCommentText: (e: TextEventType) => void;
  onAddComment: () => void;
};

const CommentForm: React.FC<Props> = ({ setCommentText, onAddComment }) => {
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
          <button className="p-1 text-white rounded-lg bg-orange-500 hover:bg-orange-500 drop-shadow-2xl">
            コメント
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CommentForm;
