import { Member } from "../entities/member/entity";

export const listMembers = async (): Promise<Member[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("listMembersの呼び出し");

  return [
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
};
