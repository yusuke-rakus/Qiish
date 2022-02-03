import Router from "next/router";
import { useEffect } from "react";
import { removeArticleUserId } from "../lib/cookie/handleCookie";
import { Header, ArticleList } from "../templates";

const goToRegisterUser = () => {
  Router.push("/registerUser");
};
const goToLogin = () => {
  Router.push("/loginUser");
};

const Home: React.FC = () => {
  // 記事詳細のみCookieにarticleUserIdを保持するため削除
  useEffect(() => {
    removeArticleUserId();
  });
  return (
    <div>
      <button onClick={goToRegisterUser}>会員登録</button>
      <button onClick={goToLogin}>ログイン</button>
      <div>
        <Header />
      </div>
      <div className="mx-80 my-1 text-4xl font-semibold text-orange-500">
        Articles
      </div>
      <ArticleList />
    </div>
  );
};

export default Home;
