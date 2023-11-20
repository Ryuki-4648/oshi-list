// Presenter：ビジネスロジックを記載しない。描画を担うコンポーネント。

import { Th } from "../../../ui/table/Th";
import { Tr } from "../../../ui/table/Tr";

export function MemberListPresenter() {
  return (
    <ul>
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
    </ul>
  );
}
