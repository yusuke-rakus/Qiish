import React from "react";
import { Button } from "antd";
import { LikeUserModalType, UserType } from "../const/Types";
import ModalScreen from "../components/ModalScreen";
import { LikeUser } from ".";

const LikeUserListModal: React.FC<LikeUserModalType> = ({
  lieksUserList,
  likeUserModalStatus,
  setLikeUserModalStatus,
}) => {
  return (
    <div>
      {likeUserModalStatus && (
        <div>
          <div className="fixed inset-0 z-50">
            <div className="p-3 text-center">
              <div>
                <div className="text-3xl font-bold text-white">
                  いいねユーザー一覧
                </div>
                <div className="flex justify-center items-center ">
                  <div className="w-1/2">
                    {lieksUserList.map((user_data: UserType) => {
                      return (
                        <LikeUser key={user_data.id} user_data={user_data} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <span className="flex justify-center">
              <Button onClick={setLikeUserModalStatus}>
                <span className="hover:text-sky-400">戻る</span>
              </Button>
            </span>
          </div>
          <ModalScreen />
        </div>
      )}
    </div>
  );
};

export default LikeUserListModal;
