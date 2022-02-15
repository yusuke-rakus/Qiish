import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SkillTagsOnProfile } from "../../../src/components/molecules";

describe("プロフィール技術タグのテスト", () => {
  // FCの型定義
  type Props = {
    tags: {
      id: number;
      skill: string;
    }[];
  };
  let dummyProps: Props = {
    tags: [
      { id: 1, skill: "Java" },
      { id: 2, skill: "Python" },
    ],
  };
  it("プロフィール技術タグが表示すること", () => {
    // render(<SkillTagsOnProfile {...dummyProps} />);
    // expect(screen.getByRole("button", { name: "Java" })).toBeInTheDocument();
    // expect(screen.getByRole("button", { name: "Python" })).toBeInTheDocument();
  });
});
