import React from "react";
import Image from "next/image";
import { Select, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { SelectStateType } from "../../hooks/useInputState";

// FCの型定義
type Props = {
  userData: {
    userName: string;
    email: string;
    description: string;
    engineerType: SelectStateType;
    tagsNum: SelectStateType;
  };
  TAGS: {
    ENGINEER: string[];
    SKILL: {
      label: string;
      tags: { id: number; skill: string; image: null }[];
    }[];
  };
  Fnc: {
    setUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setEngineerType: (value: SelectStateType) => void;
    setDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setTagsNum: (value: SelectStateType) => void;
    onSubmitEditUser: (e: React.FormEvent<HTMLFormElement>) => void;
  };
};

const ProfileEditFrom: React.FC<Props> = ({ userData, TAGS, Fnc }) => {
  return (
    // initialValuesはname属性に対応
    <Form
      initialValues={{
        userName: userData.userName,
        engineerType: userData.engineerType,
        email: userData.email,
        description: userData.description,
        tags: userData.tagsNum,
      }}
      onSubmitCapture={(e) => Fnc.onSubmitEditUser(e)}
    >
      <div className="w-full p-8 m-2 bg-white rounded-lg border shadow-md">
        <div className="m-4">
          <div className="flex justify-center items-center">
            {/* image(User) */}
            <Image
              className="rounded-full"
              src={"/img/avatar.jpg"}
              alt="アバター"
              width={120}
              height={120}
            />
            <div className="pt-7">
              <Form.Item
                name="userName"
                rules={[{ required: true, message: "名前が空欄です" }]}
              >
                <Input
                  className="focus:placeholder-gray-400"
                  placeholder="名前を入力"
                  bordered={false}
                  size={"large"}
                  onChange={Fnc.setUserName}
                />
              </Form.Item>
              <Form.Item
                name="engineerType"
                rules={[{ required: true, message: "職種が空欄です" }]}
              >
                <Select
                  size={"large"}
                  placeholder="職種"
                  className="w-20"
                  bordered={false}
                  onChange={Fnc.setEngineerType}
                >
                  {TAGS.ENGINEER.map((engineerType) => {
                    return (
                      <Select.Option key={engineerType} value={engineerType}>
                        {engineerType}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "メールアドレスが空欄です" }]}
            >
              <Input
                className="focus:placeholder-gray-400"
                placeholder="メールアドレスを入力"
                bordered={false}
                size={"large"}
                onChange={Fnc.setEmail}
              />
            </Form.Item>
            <Form.Item
              name="tags"
              className="hover:bg-gray-100"
              rules={[{ required: true, message: "使用技術が空欄です" }]}
            >
              <Select
                mode="multiple"
                placeholder="使用技術"
                bordered={false}
                onChange={Fnc.setTagsNum}
              >
                {/* フロント、バックエンド、その他のそれぞれの表示 */}
                {TAGS.SKILL.map((SkillType) => {
                  return (
                    <Select.OptGroup
                      key={SkillType.label}
                      label={SkillType.label}
                    >
                      {SkillType.tags.map((tags) => {
                        return (
                          <Select.Option key={tags.id} value={tags.id}>
                            {tags.skill}
                          </Select.Option>
                        );
                      })}
                    </Select.OptGroup>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
        </div>
        {/* comment(User) */}
        <div className="text-xl text-center m-2">
          <span className="block w-full p-2 text-xl rounded-xl hover:bg-gray-100">
            <Form.Item
              name="description"
              rules={[{ required: true, message: "自己紹介が空欄です" }]}
            >
              <TextArea
                placeholder="自己紹介文"
                autoSize={{ minRows: 5 }}
                bordered={false}
                onChange={Fnc.setDescription}
              />
            </Form.Item>
          </span>
        </div>
      </div>
      <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
        <Button
          className="drop-shadow-2xl"
          size="large"
          shape="round"
          htmlType="submit"
        >
          <span className="text-orange-500 hover:text-orange-300">保存</span>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileEditFrom;
