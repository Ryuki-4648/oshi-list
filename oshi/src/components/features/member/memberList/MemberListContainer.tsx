import { useEffect, useState } from "react";
import { Member } from "../../../../entities/member/entity";
import { MemberListPresenter } from "./MemberListPresenter";
import { listMembers } from "../../../../usecases/member";

// アプリ固有のドメイン知識に関連するコンポーネントは、components/features配下に配置

// Containerではロジックを実装し、presenter呼び出す用のコンポーネントとして定義する。

export function MemberListContainer() {
  // 非同期で取得されるlistMembersの実行結果を保持するためのstate
  // APIの実行は非同期となるため、stateとして保持する必要がある
  const [members, setMembers] = useState<Member[]>([]);

  // データの取得とstateへのセットを行う関数
  const list = async (): Promise<void> => {
    const ret = await listMembers();
    setMembers(ret);
  };

  // コンポーネントのマウント時にデータの取得を行う
  useEffect(() => {
    list();
  }, []);

  return <MemberListPresenter members={members} />;
}
