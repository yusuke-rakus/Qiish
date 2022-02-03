// カスタムフックで利用している型
// --------------------------------------------
// onChange(e.target.value)の型(inputタグ,textareaタグ)
export type TextEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

// onChange(e.target.value)の型(selectタグ)
export type SelectStateType = string | number[];

// --------------------------------------------

// 汎用性のある型
// --------------------------------------------
// タグ(単数)の型
export type tag = {
  id: number;
  skill: string;
  image: null;
};
// タグ(複数数)の型
export type tags = tag[];

// constディレクトリにあるスキルタグの型
type SkillTag = {
  label: string;
  tags: tag[];
};
export type SkillTags = SkillTag[];

// ユーザーの型
export type UserType = {
  id: number;
  userName: string;
  email: string;
  engineerType: string;
  description: string;
  image: string;
  follow: string;
  followCount: number;
  follower: string;
  followerCount: number;
  tags: tags;
  articles: number;
  articleCount: number;
  likes: number;
  comments: string;
  followStatus: number;
};
export type UserDataType = { user_data: UserType };

// --------------------------------------------

// Article関連の型アノテーション
// --------------------------------------------

// Article関連で汎用性のある型
export type ArticleData = {
  id: number;
  title: string;
  content: string;
  postedDate: string;
};

// 詳細記事の型
export type ArticleDetail = {
  article: ArticleData;
  articleTags: tag[];
  postedUser: UserType;
  commentCountOnArticle: number;
  likesCount: number;
  likeStatus: boolean;
  changeArticleLike: () => void;
  followerCount: number;
  followStatus: boolean;
  checkLoginUserFlag: boolean;
  changeUsrFollow: () => void;
  setEditFlag: () => void;
  onDeleteArticle: () => void;
  setLikeUserModalStatus: () => void;
};

// 編集記事の型
export type ArticleEdit = {
  article: ArticleData;
  articleTagsNum: SelectStateType;
  editFunc: {
    setTitle: (e: TextEventType) => void;
    setContent: (e: TextEventType) => void;
    setTagsNum: (value: React.SetStateAction<SelectStateType>) => void;
    onEditArticle: () => void;
  };
  setEditFlag: () => void;
};

// 投稿記事コンポーネントの型
export type ArticleAddForm = {
  previewContent: string;
  prevFlag: boolean;
  Fnc: {
    setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setTags: (value: number[]) => void;
    setPreviewFlag: () => void;
    onAddArticle: () => void;
  };
  SKILLTAGS: SkillTags;
};

// 編集記事投稿コンポーネントの型
export type ArticleEditFrom = {
  prevFlag: boolean;
  articleEdit: {
    title: string;
    content: string;
    tags: SelectStateType;
  };
  Fnc: {
    editTitle: (e: TextEventType) => void;
    editContent: (e: TextEventType) => void;
    editTags: (value: React.SetStateAction<SelectStateType>) => void;
    setPreviewFlag: () => void;
    onEditArticle: () => void;
  };
  SKILLTAGS: SkillTags;
};

// --------------------------------------------

// Profile関連の型
// --------------------------------------------

// プロフィール(小)の方
export type ProfileSmall = {
  user: UserType;
  checkLoginUserFlag: boolean;
  followerCount: number;
  followStatus: boolean;
  changeUsrFollow: () => void;
};

// 長方形プロフィールの型
export type ProfileRectangle = {
  user_data: UserType;
  followStatus: boolean;
  changeUsrFollow: () => void;
  loginCheckStatus: boolean;
};

// --------------------------------------------

// Follow,Follower関連の型アノテーション
// --------------------------------------------

//  Followコンポーネントの型
export type FollowType = {
  user_data: UserType;
};

// --------------------------------------------

// Comment関連の型アノテーション
// --------------------------------------------

export type Comment = {
  commentData: {
    id: number;
    articleId: number;
    likeStatus: number;
    likesCount: number;
    userInfoId: number;
    comment: string;
    commentDate: string;
    userInfo: UserType;
  };
};

// --------------------------------------------

// 入力データのタイプがStr型
export type InputStrType = {
  target: { value: React.SetStateAction<string> };
};
// onChange として定義したメソッドの型
export type onChangeProps = {
  onChange: Function;
  placeholder?: string;
};
