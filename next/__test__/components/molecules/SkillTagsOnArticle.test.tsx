import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SkillTagsOnArticle } from "../../../src/components/molecules";

describe("記事技術タグのテスト", () => {
  type Props = {
    tags: {
      id: number;
      skill: string;
    }[];
    onClickTag: (id: number) => void;
  };
  // ダミーのPropsを定義
  const mockCallback = jest.fn();
  let dummyProps: Props = {
    tags: [
      {
        id: 1,
        skill: "React",
      },
      {
        id: 2,
        skill: "Next",
      },
    ],
    onClickTag: mockCallback,
  };
  it("記事技術タグが表示すること", () => {
    render(<SkillTagsOnArticle {...dummyProps} />);
    expect(screen.getByRole("button", { name: "React" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });
});
