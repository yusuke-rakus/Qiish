import React, { useEffect } from "react";
import { ProfileEditFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ENGINEER, SKILL } from "../const/Tags";
import { useTextState, useSelectState } from "../hooks";
import { editUserInfo } from "../pages/api/editData";
import { useRouter } from "next/router";

type Props = {
  userInfo: {
    id: number;
    userName: string;
    email: string;
    engineerType: string;
    description: string;
    image: string;
    follow: number;
    followCount: number;
    follower: number;
    followerCount: number;
    tags: {
      id: number;
      skill: string;
      image: number;
    }[];
    articles: string;
    articleCount: number;
    likes: number;
    comments: number;
  };
  changeEditFlag: () => void;
};
const TAGS = { ENGINEER, SKILL };

const ProfileEdit: React.FC<Props> = ({ userInfo, changeEditFlag }) => {
  const router = useRouter();
  // カスタムフック使用(Text)
  const [userName, setUserName] = useTextState(userInfo.userName);
  const [email, setEmail] = useTextState(userInfo.email);
  const [description, setDescription] = useTextState(userInfo.description);
  // カスタムフック使用(Select)
  const [engineerType, setEngineerType] = useSelectState(userInfo.engineerType);
  // カスタムフック使用(タグを初期化)
  // const [tags, setTags] = useSelectState(() => {
  //   const initialTags = [];
  //   for (const tag of userInfo.tags) {
  //     initialTags.push(tag.id);
  //   }
  //   return initialTags;
  // });
  const initialTags: number[] = [];
  useEffect(() => {
    for (const tag of userInfo.tags) {
      initialTags.push(tag.id);
    }
  }, [userInfo.tags, initialTags]);
  // カスタムフック使用(編集用記事タグの格納)
  const [tagsNum, setTagsNum] = useSelectState(initialTags);

  // ユーザー情報編集の処理
  const onSubmitEditUser = async () => {
    try {
      const res = await editUserInfo(
        userName,
        email,
        description,
        engineerType,
        tagsNum
      );

      if (res.data.status === "success") {
        alert("ユーザー情報編集に成功しました。プロフィール画面へ戻ります。");
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Fnc = {
    setUserName,
    setEngineerType,
    setEmail,
    setDescription,
    setTagsNum,
    onSubmitEditUser,
  };
  const userData = { userName, email, description, engineerType, tagsNum };

  return (
    <div className="flex justify-center">
      <div className="m-10 lg:w-3/5 md:w-2/5 h-auto">
        <button type="button" onClick={changeEditFlag}>
          <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
        </button>
        <ProfileEditFrom userData={userData} TAGS={TAGS} Fnc={Fnc} />
      </div>
    </div>
  );
};

export default ProfileEdit;
