import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { ChangeEvent, useState } from "react";
import { reissuePassword } from "./api/fetchData";

const ReissuePassword: React.FC = () => {
  const router = useRouter();
  // メールアドレス
  const [mailAddress, setMailAddress] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setMailAddress(e.target.value);

  const reissue = async () => {
    const result = await reissuePassword(mailAddress);
    console.log(result);

    //error:エラーメッセージ表示 /success:パスワード再設定画面に遷移
    if (mailAddress == "") {
      toast.error(`メールアドレスを入力してください。`);
    } else if (result.status == "error") {
      toast.error(`このメールアドレスは存在しません。`);
    } else {
      toast.success(
        `メールアドレスが確認できました。新しいパスワードを設定して下さい。`
      );
      // successが返ってきたらresetPasswordにmailAddressの値を渡す
      router.push({
        pathname: "/resetPassword",
        query: { email: mailAddress },
      });
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <Toaster />
      <input
        type="text"
        onChange={onChangeMailAddress}
        placeholder="E-mail（rakusのメールアドレス)"
        className="m-4 px-6 py-4 w-80 bg-white rounded-sm"
      />
      <div>
        ※パスワードを忘れた方は、メールアドレスを入力し新しいパスワードを再設定して下さい。
      </div>

      <button
        onClick={() => {
          reissue();
        }}
        className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600"
      >
        送信
      </button>
    </div>
  );
};

export default ReissuePassword;
