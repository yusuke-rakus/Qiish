import { useState, useEffect } from "react";
import Auth from "../templates/Auth";
import getCookie, { removeArticleUserId } from "../lib/cookie/handleCookie";
import { ArticleList } from "../templates";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  // 記事詳細のみCookieにarticleUserIdを保持するため削除
  useEffect(() => {
    const guestId = getCookie();
    if (guestId == null) {
      setIsLogin(false);
      console.log("ログアウトします");
    } else if (guestId != null) {
      setIsLogin(true);
      console.log("記事一覧を表示します");
    }
    removeArticleUserId();
  });
  return <>{isLogin ? <ArticleList /> : <Auth />}</>;
};

export default Home;
