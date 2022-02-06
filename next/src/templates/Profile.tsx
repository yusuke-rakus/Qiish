import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LeftCircleOutlined } from "@ant-design/icons";
import {
  ArticleComp,
  ProfileEdit,
  ProfileLarge,
} from "../components/organisms";
import useSWR from "swr";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { editUserInfo } from "../lib/api/editData";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";
import { tag, tags } from "../const/Types";
import { addFollow } from "../lib/api/addData";
import { removeFollow } from "../lib/api/removeData";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  // プロフィールデータ取得
  const { data: proflieData } = useSWR("/profile");
  // タグデータ取得
  const { data: fetchedTags } = useSWR("/tagsData");
  // // 投稿記事データ取得
  const { data: postedArticles } = useSWR("/postedArticles");
  // // いいねした記事データ取得
  const { data: likedArticles } = useSWR("/likedArticles");

  /**
   * DBにあるタグ情報を取得し、ステートで管理.
   */
  // フェッチしたタグデータをステートに格納し管理
  const [tagsData, setTagsData] = useState<tags>([]);
  useEffect(() => {
    setTagsData(fetchedTags.tags);
  }, [fetchedTags.tags]);
  // 格納したタグデータからタグIDのみを取り出し、Arrayステートに管理
  const initialTags = new Array<number>();
  const [tagsNum, setTagsNum] = useSelectState(initialTags);
  // プロフィールデータにあるtagのidをinitialTagsに格納
  const insertTags = () => {
    for (const tag of proflieData.userInfo.tags) {
      initialTags.push(tag.id);
    }
  };
  useEffect(() => {
    insertTags();
  });

  /**
   * プロフィール情報(編集).
   *
   * @remarks
   * 下記の記事情報をステートで管理して、編集用データとして利用
   * ユーザーネーム
   * メールアドレス
   * 自己紹介
   * エンジニアタイプ
   * 技術タグ(IDに紐づくデータ)
   */
  const [userName, setUserName] = useTextState(proflieData.userInfo.userName);
  const [email, setEmail] = useTextState(proflieData.userInfo.email);
  const [description, setDescription] = useTextState(
    proflieData.userInfo.description
  );
  const [engineerType, setEngineerType] = useSelectState(
    proflieData.userInfo.engineerType
  );
  let tagsByNum = new Array<tag>();
  // 選択済の記事技術タグIDから技術タグを格納する処理
  useEffect(() => {
    for (let tagNum of tagsNum) {
      const tagsFilterByTagNum = tagsData.filter(
        (tag: tag) => tag.id === tagNum
      );
      tagsByNum.push(tagsFilterByTagNum[0]);
    }
  });

  /**
   * 表示フラグ(真偽値)を管理.
   *
   * @remarks 表示の切り替えやログイン状態チェック
   */
  const checkLoginUserFlag = useLoginChecker(proflieData.userInfo.id);
  const [editFlag, setEditFlag] = useToggle(true);

  /**
   * フォローする又はフォローを解除する.
   *
   * @remarks APIにフォローを知らせて、ブラウザ側でフォローの状態と数をステートを用いて変更
   * @param data.userInfo.id - フォローされるユーザーID
   * @param followStatus - フォロー状態
   */
  // ±1してフォロワー数を管理
  const [followerCount, setFollowerCount] = useAddOrSubOne(
    proflieData.userInfo.followerCount
  );
  // フォロー状態を真偽値で管理
  const [followStatus, setFollowStatus] = useToggleByNum(
    proflieData.userInfo.followStatus
  );
  // フォローする処理(フォロー中: followStatus === true, フォローしていない: followStatus === false)
  const usrFollowing = async () => {
    if (!followStatus) {
      await addFollow(proflieData.userInfo.id);
    } else {
      await removeFollow(proflieData.userInfo.id);
    }
    setFollowerCount(followStatus);
    setFollowStatus();
  };

  /**
   * ユーザー情報編集を行う.
   *
   * @remarks
   * sucess: プロフィール画面へ切り替わる
   * error: アラートメッセージ表示
   * @param articleData.article.id - 記事ID
   * @param userName - ユーザーネーム
   * @param email - メールアドレス
   * @param description - 自己紹介
   * @param engineerType - エンジニアタイプ
   * @param tagsNum - タグIDの配列
   * @throws エラーメッセージを表示して処理終了
   */
  const onSubmitEditUser = async () => {
    //  バリデーションチェック
    const errorMsg = "記事投稿に失敗しました。入力内容を確認してください。";
    if (userName === " " || userName === "　" || userName === null) {
      alert(errorMsg);
      return;
    }
    if (email === " " || email === "　" || email === null) {
      alert(errorMsg);
      return;
    }
    if (description === " " || description === "　" || description === null) {
      alert(errorMsg);
      return;
    }

    try {
      // DBにユーザー情報を保存
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
      alert(errorMsg);
    }
  };

  // プロフィール表示用のデータ
  const userInfo = {
    userName: userName,
    email: email,
    userImage: proflieData.userInfo.image,
    articleCount: proflieData.userInfo.articleCount,
    engineerType: engineerType,
    tagsNum: tagsNum,
    description: description,
    followCount: proflieData.userInfo.followCount,
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

  const onClickTag = (tagId: number) => {
    // const tagsData = await fetchSearchedTag(String(tagId), guestId);
    // setArticleList(tagsData);
    console.log();
  };

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
      {/* <ArticleList /> */}
      {/* <ArticleComp /> */}
      <div className="flex justify-center bg-orange-100">
        {/* <div className=" grid grid-cols-2 gap-2 bg-orange-100"> */}
        <div className="w-1/3">
          <Tabs className="text-orange-500" defaultActiveKey="1">
            <TabPane tab="投稿した記事" key="1">
              {postedArticles &&
                postedArticles.articleList.map((articleData: any) => {
                  return (
                    <div key={articleData.id}>
                      <ArticleComp
                        articleData={articleData}
                        onClickTag={onClickTag}
                      />
                    </div>
                  );
                })}
            </TabPane>
            <TabPane tab="いいねした記事" key="2">
              {likedArticles &&
                likedArticles.articleList.map((articleData: any) => {
                  return (
                    <div key={articleData.id}>
                      <ArticleComp
                        articleData={articleData}
                        onClickTag={onClickTag}
                      />
                    </div>
                  );
                })}
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
