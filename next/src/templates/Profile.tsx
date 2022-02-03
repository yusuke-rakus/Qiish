import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ProfileLarge } from "../components/organisms";
import useSWR from "swr";
import { ProfileEdit } from "./";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { changeFollowStatus } from "../pages/api/addData";
import { useLoginChecker } from "../hooks/useLoginChecker";
import axios from "axios";
import { editUserInfo } from "../pages/api/editData";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";

const Profile: React.FC = () => {
  const [editFlag, setEditFlag] = useToggle(true);

  // ユーザーのプロフィールデータ
  const { data, error } = useSWR("/profile");

  const [followStatus, setFollowStatus] = useToggleByNum(
    data.userInfo.followStatus
  );
  const [followerCount, setFollowerCount] = useAddOrSubOne(
    data.userInfo.followerCount
  );
  // プロフィール編集用のステート
  // カスタムフック使用(Text)
  const [userName, setUserName] = useTextState(data.userInfo.userName);
  const [email, setEmail] = useTextState(data.userInfo.email);
  const [description, setDescription] = useTextState(data.userInfo.description);
  // カスタムフック使用(Select)
  const [engineerType, setEngineerType] = useSelectState(
    data.userInfo.engineerType
  );
  // カスタムフック使用(タグを初期化)
  const initialTags: number[] = [];
  useEffect(() => {
    for (const tag of data.userInfo.tags) {
      initialTags.push(tag.id);
    }
  }, [data.userInfo.tags, initialTags]);

  // カスタムフック使用(ユーザータグの格納)
  const [tagsNum, setTagsNum] = useSelectState(initialTags);

  // タグのid,skill,imageを取得
  let tagsByNum: any = [];
  const [tagsData, setTagsData] = useState<any>();
  useEffect(() => {
    const tagsData = async () => {
      const res = await axios.get("http://localhost:9090/getTag");
      setTagsData(res.data.tags);
    };
    tagsData();
  }, []);
  // 選択した記事タグを配列に格納する処理
  for (let tagNum of tagsNum) {
    const tagsFilterByTagNum = tagsData.filter((tag: any) => tag.id == tagNum);
    tagsByNum.push(tagsFilterByTagNum[0]);
  }

  // プロフィールがログインユーザーかどうか判別
  const checkLoginUserFlag = useLoginChecker(data.userInfo.id);

  // ログインユーザーが本人以外のユーザーをフォローする機能
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(followStatus, data.userInfo.id);
    setFollowerCount(followStatus);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setFollowStatus();
  };

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
        setEditFlag();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // プロフィール表示用のデータ
  const userInfo = {
    userName: userName,
    email: email,
    userImage: data.userInfo.image,
    articleCount: data.userInfo.articleCount,
    engineerType: engineerType,
    tagsNum: tagsNum,
    description: description,
    followCount: data.userInfo.followCount,
  };

  // プロフィール編集用のメソッド
  const editFunc = {
    setUserName,
    setEmail,
    setDescription,
    setEngineerType,
    setTagsNum,
    onSubmitEditUser,
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {editFlag ? (
        <div className="flex justify-center">
          <div className="m-10 w-2/5 h-auto">
            <Link href={"/"}>
              <a className="text-gray-400 hover:text-slate-600">
                <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
              </a>
            </Link>
            <ProfileLarge
              userInfo={userInfo}
              tagsByNum={tagsByNum}
              checkLoginUserFlag={checkLoginUserFlag}
              followStatus={followStatus}
              followerCount={followerCount}
              changeUsrFollow={usrFollowing}
            />
            {checkLoginUserFlag && (
              <div className="flex justify-end">
                <span className="mt-2 mr-2 p-2 text-2xl text-white rounded-lg bg-orange-500 hover:bg-orange-300 hover:text-white drop-shadow-2xl">
                  <button type="button" onClick={setEditFlag}>
                    編集
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <ProfileEdit
          userInfo={userInfo}
          editFunc={editFunc}
          changeEditFlag={setEditFlag}
        />
      )}
    </div>
  );
};

export default Profile;
