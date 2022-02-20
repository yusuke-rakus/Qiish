import { useEffect } from "react";
import { removeArticleUserId } from "../lib/cookie/handleCookie";
import { ArticleList } from "../templates";

const Home: React.FC = () => {
  // 記事詳細のみCookieにarticleUserIdを保持するため削除
  useEffect(() => {
    removeArticleUserId();
  });
  return (
    <div>
      <ArticleList />
    </div>
  );
};

export default Home;
