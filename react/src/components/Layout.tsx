import { Layout } from "antd";
import FooterComp from "./FooterComp";
import HeaderComp from "./organisms/HeaderComp";

const { Header, Footer } = Layout;

// レイアウト全体のスタイル
const LayoutComp: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header className="bg-blue-500 w-full h-16 relative">
        <HeaderComp />
      </Header>
      <Layout>{children}</Layout>
      <Footer className="bg-blue-500 h-12 text-center">
        <FooterComp />
      </Footer>
    </Layout>
  );
};

export default LayoutComp;
