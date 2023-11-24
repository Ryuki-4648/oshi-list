import { Member } from "../../../../entities/member/entity";
import { MemberListPresenter } from "./MemberListPresenter";

// アプリ固有のドメイン知識に関連するコンポーネントは、components/features配下に配置

// Containerではロジックを実装し、presenter呼び出す用のコンポーネントとして定義する。

export function MemberListContainer() {
  const members: Member[] = [
    {
      memberId: 1,
      name: "衛藤美彩",
      generation: 1,
      birthday: "1993年1月4日",
    },
    {
      memberId: 2,
      name: "橋本奈々未",
      generation: 1,
      birthday: "1993年2月20日",
    },
    {
      memberId: 3,
      name: "与田祐希",
      generation: 3,
      birthday: "2000年5月5日",
    },
    {
      memberId: 4,
      name: "賀喜遥香",
      generation: 4,
      birthday: "2001年8月8日",
    },
    {
      memberId: 5,
      name: "山下美月",
      generation: 3,
      birthday: "1999年7月26日",
    },
  ];
  return <MemberListPresenter members={members} />;
}
