import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ArticleEditFrom } from "../components/organisms";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useToggle } from "../hooks";
import { SelectStateType, TextEventType } from "../hooks/useInputState";

type Props = {
  article: {
    id: any;
    title: string;
    content: string;
    postedDate: any;
  };
  articleTagsNum: SelectStateType;
  editFunc: {
    setTitle: (e: TextEventType) => void;
    setContent: (e: TextEventType) => void;
    setTagsNum: (value: React.SetStateAction<SelectStateType>) => void;
    onEditArticle: () => void;
  };
  setEditFlag: () => void;
};

const ArticleEdit: React.FC<Props> = ({
  article,
  articleTagsNum,
  editFunc,
  setEditFlag,
}) => {
  // カスタムフック使用(Toggle)
  const [previewFlag, setPreviewFlag] = useToggle(true);

  const Fnc = {
    editTitle: editFunc.setTitle,
    editContent: editFunc.setContent,
    editTags: editFunc.setTagsNum,
    setPreviewFlag,
    onEditArticle: editFunc.onEditArticle,
  };

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
            prevFlag={previewFlag}
            articleEdit={articleEdit}
            Fnc={Fnc}
            SKILLTAGS={SKILLTAGS}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleEdit;
