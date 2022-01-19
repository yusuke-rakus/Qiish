import Router from "next/router";

const goToReissue = () => {
  Router.push("/reissuePassword");
};

const registerUser: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <div className="mr-56 text-4xl font-semibold text-orange-500">Login</div>
      <input
        type="text"
        placeholder="E-mail（rakusのメールアドレス）"
        className="m-4 px-6 py-4 w-80 bg-white rounded-sm"
      />
      <input
        type="text"
        placeholder="Password（英数字8文字以上）"
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />
      <button
        onClick={goToReissue}
        className="ml-40 text-sm text-gray-500 no-underline hover:underline"
      >
        パスワードを忘れた場合
      </button>
      <button className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600">
        ログイン
      </button>
    </div>
  );
};

export default registerUser;
