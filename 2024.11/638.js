// 638. 大礼包
// https://leetcode.cn/problems/shopping-offers/

// 在 LeetCode 商店中， 有 n 件在售的物品。每件物品都有对应的价格。然而，也有一些大礼包，每个大礼包以优惠的价格捆绑销售一组物品。
// 给你一个整数数组 price 表示物品价格，其中 price[i] 是第 i 件物品的价格。另有一个整数数组 needs 表示购物清单，其中 needs[i] 是需要购买第 i 件物品的数量。
// 还有一个数组 special 表示大礼包，special[i] 的长度为 n + 1 ，其中 special[i][j] 表示第 i 个大礼包中内含第 j 件物品的数量，且 special[i][n] （也就是数组中的最后一个整数）为第 i 个大礼包的价格。
// 返回 确切 满足购物清单所需花费的最低价格，你可以充分利用大礼包的优惠活动。你不能购买超出购物清单指定数量的物品，即使那样会降低整体价格。任意大礼包可无限次购买。

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  // 缓存needs->dp结果
  const memo = new Map();

  /**
   * dp[curNeeds]: 购买curNeeds所需花费的最低价格 = min(不买大礼包, 买大礼包) = min(sum(curNeeds), price(special(curNeeds))+dp[needs-count(special(curNeeds))])
   * @param {typeof needs} curNeeds 
   */
  const dp = (curNeeds) => {
    // 避免重复计算
    if (memo.has(curNeeds)) {
      return memo.get(curNeeds);
    }
    let answer = 0;
    // 不买大礼包
    for (let i = 0; i < curNeeds.length; i++) {
      answer += price[i] * curNeeds[i];
    }
    // 买大礼包
    for (let items of special) {
      const price = items.at(-1);
      const nxtNeeds = [];
      for (let i = 0; i < curNeeds.length; i++) {
        nxtNeeds[i] = curNeeds[i] - items[i];
      }
      // 不能买多
      if (nxtNeeds.some(need => need < 0)) {
        continue;
      }
      answer = Math.min(answer, price + dp(nxtNeeds));
    }

    // 缓存本次结果
    memo.set(curNeeds, answer);
    return answer;
  }

  // 过滤大礼包
  // 缓存礼包物品个数->礼包价格
  const map = new Map();
  for (let item of special) {
    const counts = [...item.slice(0, -1)];
    const price = item.at(-1);
    const mapKey = counts.toString();
    // 去重，保留价格较低的礼包
    if (map.has(mapKey) && price > map.get(mapKey)) continue;
    // 你不能购买超出购物清单指定数量的物品
    if (counts.some((count, i) => count > needs[i])) continue;
    map.set(mapKey, price);
  }
  special = Array.from(map).map(([countsString, price]) => countsString.split(",").map(Number).concat(price));

  return dp(needs);
};

// A ，B ，C 的价格分别为 ¥2 ，¥3 ，¥4 。
// 可以用 ¥4 购买 1A 和 1B ，也可以用 ¥9 购买 2A ，2B 和 1C 。 
// 需要买 1A ，2B 和 1C ，所以付 ¥4 买 1A 和 1B（大礼包 1），以及 ¥3 购买 1B ， ¥4 购买 1C 。 
// 不可以购买超出待购清单的物品，尽管购买大礼包 2 更加便宜。
console.log(shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]));  // 11

// console.log(shoppingOffers([2, 2], [[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 1, 4], [1, 1, 5], [1, 1, 6], [1, 1, 7], [1, 1, 8], [1, 1, 9], [1, 1, 10], [1, 1, 11], [1, 1, 12], [1, 1, 13], [1, 1, 14], [1, 1, 15]], [10, 10]));