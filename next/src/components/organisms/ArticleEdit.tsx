import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { SKILL as SKILLTAGS } from "../../const/Tags";
import { ArticleEditType } from "../../const/Types";
import { ArticleEditFrom } from "../molecules";

const ArticleEdit: React.FC<ArticleEditType> = ({
  article,
  articleTagsNum,
  previewEditFlag,
  editFnc,
  setEditFlag,
}) => {
  const articleEdit = {
    title: article.title,
    content: article.content,
    tags: articleTagsNum,
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 lg:w-4/5 md:w-3/5 sm:w-2/5 h-auto">
          <button onClick={setEditFlag}>
            <LeftCircleOutlined className="hover:text-gray-400 ml-4 mb-2 text-4xl" />
          </button>
          <ArticleEditFrom
            prevFlag={previewEditFlag}
            articleEdit={articleEdit}
            editFnc={editFnc}
            SKILLTAGS={SKILLTAGS}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleEdit;
