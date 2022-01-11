import { ArticleList, Profile } from "../templates";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-2/6 h-screen bg-gray-100">
        <Profile />
      </div>
      <div className="w-4/6 h-screen bg-gray-100 overflow-y-auto">
        <ArticleList />
      </div>
      <div className="w-2/6 h-screen bg-gray-100">
        <button
          type="button"
          className="py-2 px-5 m-4 bg-white text-blue-500 border-2 border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-400 w-11/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:bg-blue-500 hover:text-white rounded-xl"
        >
          記事を投稿する
        </button>
        <button
          type="button"
          className="py-2 px-5 m-4 -mt-2 bg-white text-blue-500 border-2 border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-400 w-11/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:bg-blue-500 hover:text-white rounded-xl"
        >
          ブログを投稿する
        </button>
        <div className="h-3/4 m-2 bg-white rounded-lg border shadow-md"></div>
      </div>
    </div>
  );
};

export default Home;
