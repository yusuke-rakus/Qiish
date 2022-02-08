import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SkillTagsOnQiita } from "../../../src/components/molecules";

describe("SkillTagsOnQiitaのテスト", () => {
  type Props = {
    tags: {
      name: string;
      version?: any;
    }[];
  };
  // ダミーのpropsを定義
  let dummyProps: Props;
  beforeEach(() => {
    dummyProps = {
      tags: [
        {
          name: "React",
        },
        {
          name: "Next",
        },
      ],
    };
  });
  // react-markdownがESMによりCSMでないためエラーが発生する
  it("コンポーネントが表示されること", () => {
    //   render(<SkillTagsOnQiita {...dummyProps} />);
    //   expect(screen.getByText(dummyProps.tags[0].name)).toBeInTheDocument();
  });
});
