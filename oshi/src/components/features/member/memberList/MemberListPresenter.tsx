// Presenter：ビジネスロジックを記載しない。描画を担うコンポーネント。

import { Member } from "../../../../entities/member/entity";
import { Th } from "../../../ui/table/Th";
import { Tr } from "../../../ui/table/Tr";

// Presenter:ロジックを記載しない。データの取得もしないので、引数で受け取る
type Props = {
  members: Member[];
};

export function MemberListPresenter({ members }: Props) {
  return (
    <ul>
      {members.map((member) => (
        <li>
          <div>
            <h2>name</h2>
            <p>aaaa</p>
            <table>
              <thead>
                <tr>
                  <Th>aaaaaa</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <th>aaa</th>
                  <td>bbbb</td>
                </Tr>
                <Tr>
                  <th>aaa</th>
                  <td>bbbb</td>
                </Tr>
              </tbody>
            </table>
          </div>
        </li>
      ))}
    </ul>
  );
}
