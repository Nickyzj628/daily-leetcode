// 1366. 通过投票对团队排名
// https://leetcode.cn/problems/rank-teams-by-votes/

// 现在有一个特殊的排名系统，依据参赛团队在投票人心中的次序进行排名，每个投票者都需要按从高到低的顺序对参与排名的所有团队进行排位。
// 排名规则如下：
// 参赛团队的排名次序依照其所获「排位第一」的票的多少决定。如果存在多个团队并列的情况，将继续考虑其「排位第二」的票的数量。以此类推，直到不再存在并列的情况。
// 如果在考虑完所有投票情况后仍然出现并列现象，则根据团队字母的字母顺序进行排名。
// 给你一个字符串数组 votes 代表全体投票者给出的排位情况，请你根据上述排名规则对所有参赛团队进行排名。
// 请你返回能表示按排名系统 排序后 的所有团队排名的字符串。

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  const TEAMS = votes[0].split('');
  const TEAM_NUM = TEAMS.length;

  // 哈希表，统计各队伍各排位票数
  // team => rank[] => count
  const teamRanksCount = {};
  for (let team of TEAMS) {
    teamRanksCount[team] = Array(TEAM_NUM).fill(0);
  }
  for (let vote of votes) {
    for (let rank = 0; rank < vote.length; rank++) {
      const team = vote[rank];
      teamRanksCount[team][rank]++;
    }
  }

  // 自定义排序
  return TEAMS
    .toSorted((a, b) => {
      // 按排位从高到低决定
      for (let rank = 0; rank < TEAM_NUM; rank++) {
        // 当前排位可以决出名次
        if (teamRanksCount[a][rank] !== teamRanksCount[b][rank]) {
          return teamRanksCount[b][rank] - teamRanksCount[a][rank];
        }
      }
      // 排位始终并列时，按字母顺序决定
      return a.localeCompare(b);
    })
    .join('');
};

// A 队获得五票「排位第一」，没有其他队获得「排位第一」，所以 A 队排名第一。
// B 队获得两票「排位第二」，三票「排位第三」。
// C 队获得三票「排位第二」，两票「排位第三」。
// 由于 C 队「排位第二」的票数较多，所以 C 队排第二，B 队排第三。
console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));  // "ACB"