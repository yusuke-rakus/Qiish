import React from "react";
import { ProfileEditFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";

type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
  changeEditFlag: Function;
};

const ProfileEdit: React.FC<Props> = ({ changeEditFlag, user_info_data }) => {
  return (
    <div className="flex justify-center">
      <div className="m-10 w-2/5 h-auto">
        <button type="button" onClick={() => changeEditFlag()}>
          <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
        </button>
        <ProfileEditFrom user_info_data={user_info_data} />
      </div>
    </div>
  );
};

export default ProfileEdit;
