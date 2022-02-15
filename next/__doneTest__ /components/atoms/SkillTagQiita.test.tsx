import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SkillTagQiita } from "../../../src/components/atoms";

describe("SkillTagQiitaのテスト", () => {
  type Props = {
    name: string;
  };
  // ダミーのpropsを定義
  let dummyProps: Props;
  beforeEach(() => {
    dummyProps = {
      name: "React",
    };
  });

  it("コンポーネントが表示されること", () => {
    render(<SkillTagQiita {...dummyProps} />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
