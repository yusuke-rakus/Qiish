import React from "react";
import Image from "next/image";
import { Select, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

// FCの型定義
type Props = {
  TAGS: {
    ENGINEER: string[];
    SKILL: {
      label: string;
      data: string[];
    }[];
  };
  Fnc: {
    changeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeEngineerType: (value: React.SetStateAction<string>) => void;
    changePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    changeTags: (value: React.SetStateAction<never[]>) => void;
    onSubmitEditUser: (e: React.FormEvent<HTMLFormElement>) => void;
  };
};

const ProfileEditFrom: React.FC<Props> = ({ TAGS, Fnc }) => {
  return (
    <Form onSubmitCapture={(e) => Fnc.onSubmitEditUser(e)}>
      {/* 送信ようのメソッド用意 */}
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
                  onChange={Fnc.changeUserName}
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
                  onChange={Fnc.changeEngineerType}
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
                onChange={Fnc.changeEmail}
              />
            </Form.Item>
            <Form.Item
              name="passwors"
              rules={[{ required: true, message: "パスワードが空欄です" }]}
            >
              <Input.Password
                className="focus:placeholder-gray-400"
                placeholder="パスワードを入力"
                bordered={false}
                size={"large"}
                onChange={Fnc.changePassword}
              />
            </Form.Item>
            <Form.Item
              className="hover:bg-gray-100"
              name="tags"
              rules={[{ required: true, message: "使用技術が空欄です" }]}
            >
              <Select
                mode="tags"
                allowClear
                placeholder="使用技術"
                bordered={false}
                onChange={Fnc.changeTags}
              >
                {/* フロント、バックエンド、その他のそれぞれの表示 */}
                {TAGS.SKILL.map((SkillType) => {
                  return (
                    <Select.OptGroup
                      key={SkillType.label}
                      label={SkillType.label}
                    >
                      {SkillType.data.map((SkillTag) => {
                        return (
                          <Select.Option key={SkillTag} value={SkillTag}>
                            {SkillTag}
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
                placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
                autoSize={{ minRows: 5 }}
                bordered={false}
                onChange={Fnc.changeDescription}
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
