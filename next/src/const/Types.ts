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
// PagesのSWRを用いた引数の型
export type SWRPROPS = {
  [key: string]: object;
};
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
  editFnc: {
    setTitle: (e: TextEventType) => void;
    setContent: (e: TextEventType) => void;
    setTagsNum: (value: React.SetStateAction<SelectStateType>) => void;
    onEditArticle: () => void;
    setPreviewEditFlag: () => void;
  };
  previewEditFlag: boolean;
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
  editFnc: {
    setTitle: (e: TextEventType) => void;
    setContent: (e: TextEventType) => void;
    setTagsNum: (value: React.SetStateAction<SelectStateType>) => void;
    onEditArticle: () => void;
    setPreviewEditFlag: () => void;
  };
  SKILLTAGS: SkillTags;
};

// --------------------------------------------

// Profile関連の型
// --------------------------------------------

// プロフィール(大)の型
// 編集用のステートを管理しているため、userInfoは親コンポーネントで受け取ってる
export type ProfileLarge = {
  userInfo: {
    userName: string;
    userImage: string;
    articleCount: any;
    engineerType: SelectStateType;
    description: string;
    followCount: boolean;
  };
  tagsByNum: tags;
  checkLoginUserFlag: boolean;
  followerCount: number;
  followStatus: boolean;
  changeUsrFollow: () => void;
};

// プロフィール(小)の型
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

// 編集用プロフィールで利用するユーザー情報
type UserInfoForEdit = {
  userName: string;
  email: string;
  engineerType: SelectStateType;
  tagsNum: SelectStateType;
  description: string;
};
// 編集用プロフィールで利用するメソッド
type FuncForEdit = {
  setUserName: (e: TextEventType) => void;
  setEmail: (e: TextEventType) => void;
  setEngineerType: (value: React.SetStateAction<SelectStateType>) => void;
  setTagsNum: (value: React.SetStateAction<SelectStateType>) => void;
  setDescription: (e: TextEventType) => void;
  onSubmitEditUser: () => Promise<void>;
};
// 編集用プロフィールの型
export type ProfileEdit = {
  userInfo: UserInfoForEdit;
  editFunc: FuncForEdit;
  changeEditFlag: () => void;
};

// 編集用プロフィールのコンポーネント
export type ProfileEditFrom = {
  userData: UserInfoForEdit;
  TAGS: {
    ENGINEER: string[];
    SKILL: SkillTags;
  };
  Fnc: FuncForEdit;
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

// 引数コメントの型
export type CommentType = {
  id: number;
  articleId: number;
  likeStatus: number;
  likesCount: number;
  userInfoId: number;
  comment: string;
  commentDate: string;
  commentLikesUserList: {
    articleCount: number;
    articles: number;
    comments: string;
    description: string;
    email: string;
    engineerType: string;
    follow: string;
    followCount: number;
    followStatus: number;
    follower: string;
    followerCount: number;
    id: number;
    image: string;
    likes: number;
    tags: tags;
    userName: string;
  }[];
  userInfo: UserType;
};

// コメント情報の型
export type CommentData = {
  commentData: CommentType;
};
// コメントコンポーネントの型
export type CommentComp = {
  commentData: CommentType;
  likesCount: number;
  likeStatus: boolean;
  changeCommentLike: () => void;
  setLikeUserModalStatus: () => void;
};

export type CommentLikesUserList = {
  commentLikesUserList: UserType[];
};

// Qiita関連の型アノテーション
// --------------------------------------------

export type QiitaComp = {
  qiita: {
    body: string;
    coediting: boolean;
    comments_count: number;
    created_at: string;
    group: number;
    id: string;
    likes_count: number;
    page_views_count: number;
    private: boolean;
    reactions_count: number;
    rendered_body: string;
    tags: { name: string; versions: any }[];
    team_membership: number;
    title: string;
    updated_at: string;
    url: string;
    user: QiitaUserData;
  };
  isExistProfile: boolean;
};

type QiitaUserData = {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
};

export type QiitaUser = {
  qiita_user: QiitaUserData;
};

// --------------------------------------------

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
