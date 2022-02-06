import React from "react";
import { Button } from "antd";
import { LikeUserModalType } from "../../const/Types";
import { LikeUsersOnArticle } from "../../templates";
import ModalScreen from "../ModalScreen";

const LikeUserModal: React.FC<LikeUserModalType> = ({
  lieksUserList,
  likeUserModalStatus,
  setLikeUserModalStatus,
}) => {
  return (
    <div>
      {likeUserModalStatus && (
        <div>
          <div className="fixed inset-0 z-50">
            <LikeUsersOnArticle lieksUserList={lieksUserList} />
            <span className="flex justify-center">
              <Button onClick={setLikeUserModalStatus}>
                <span className="hover:text-orange-400">戻る</span>
              </Button>
            </span>
          </div>
          <ModalScreen />
        </div>
      )}
    </div>
  );
};

export default LikeUserModal;
