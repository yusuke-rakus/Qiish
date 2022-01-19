const registerUser: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <input
        type="text"
        placeholder="E-mail（rakusのメールアドレス)
        "
        className="m-4 px-6 py-4 w-80 bg-white rounded-sm"
      />
      <div className=" w-2/6">
        ※パスワードを忘れた方は、パスワードの再発行をして下さい。
        会員登録時にご登録して頂いたメールアドレスにパスワード再発行手続きのメールをお送りします。
      </div>

      <button className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600">
        送信
      </button>
    </div>
  );
};

export default registerUser;
