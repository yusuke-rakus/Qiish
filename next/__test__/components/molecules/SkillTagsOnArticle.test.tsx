import { fireEvent, render, screen } from "@testing-library/react";
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
  it("記事技術タグが表示されてボタンがクリックできること", () => {
    render(<SkillTagsOnArticle {...dummyProps} />);

    expect(screen.getAllByRole("button")).toHaveLength(2);

    let button = screen.getByRole("button", { name: "React" });
    expect(button).toBeInTheDocument();
    expect(fireEvent.click(button)).toBe(true);

    button = screen.getByRole("button", { name: "Next" });
    expect(button).toBeInTheDocument();
    expect(fireEvent.click(button)).toBe(true);
  });
});
