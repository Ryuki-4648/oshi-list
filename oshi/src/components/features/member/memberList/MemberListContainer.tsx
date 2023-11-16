import { MemberListPresenter } from "./MemberListPresenter";

// アプリ固有のドメイン知識に関連するコンポーネントは、components/features配下に配置

// Containerではロジックを実装し、presenter呼び出す用のコンポーネントとして定義する。

export function MemberListContainer() {
  return <MemberListPresenter />;
}
