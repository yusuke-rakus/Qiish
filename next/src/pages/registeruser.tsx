const registerUser: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center">
      <div className="mr-48 text-4xl font-semibold text-orange-500">
        Register
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Username"
          className="px-6 py-4 w-40 bg-white rounded-sm"
        />

        <select className="ml-4 px-4 py-4 w-36 bg-white rounded-sm">
          <option>Please select</option>
          <option>FR</option>
          <option>Web</option>
          <option>CL</option>
          <option>QA</option>
          <option>ML</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="E-mail（rakusのメールアドレス）"
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />

      <input
        type="text"
        placeholder="Password（英数字8文字以上）"
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />

      <input
        type="text"
        placeholder="Confirm Password"
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />
      <button className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600">
        会員登録
      </button>
    </div>
  );
};

export default registerUser;
