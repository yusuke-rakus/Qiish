const registerUser: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <div className="m-4 mr-20 text-4xl font-semibold text-orange-500">
        パスワード再設定
      </div>
      <div>登録中のメールアドレス：yamada.taro@rukusparters.co.jp</div>
      <input
        type="text"
        placeholder="新しいパスワード(英数字8桁以上)
        "
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />

      <button className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600">
        送信
      </button>
    </div>
  );
};

export default registerUser;
