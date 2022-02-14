import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { SKILL as SKILLTAGS } from "../../const/Tags";
import { ArticleSaveType } from "../../const/Types";
import { ArticleSaveFrom } from "../molecules";

const ArticleSave: React.FC<ArticleSaveType> = ({
  article,
  articleTagsNum,
  previewEditFlag,
  saveFnc,
  saveStatus,
  setEditFlag,
}) => {
  const articleSave = {
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
          <ArticleSaveFrom
            prevFlag={previewEditFlag}
            articleSave={articleSave}
            saveFnc={saveFnc}
            saveStatus={saveStatus}
            SKILLTAGS={SKILLTAGS}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleSave;
