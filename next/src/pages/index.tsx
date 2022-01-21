import Router from "next/router";
import { Header, ArticleList } from "../templates";

const goToRegisterUser = () => {
  Router.push("/registeruser");
};
const goToLogin = () => {
  Router.push("/loginuser");
};
const goToQiita = () => {
  Router.push("/qiitaList");
};

const Home: React.FC = () => {
  return (
    <div>
      <button onClick={goToRegisterUser}>会員登録</button>
      <button onClick={goToLogin}>ログイン</button>
      <button onClick={goToQiita}>Qiita</button>
      <div>
        <Header />
      </div>
      <div className="mx-80 text-4xl font-semibold text-orange-500">
        Articles
      </div>
      <div>
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
      </div>
    </div>
  );
};

export default Home;
