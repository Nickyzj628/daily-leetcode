/**
 * 数组扁平化
 * @param {any} arr
 */
function flatten(arr) {
	const ans = []
	const dfs = (arr) => {
		if (!Array.isArray(arr)) return ans.push(arr)
		for (let item of arr) dfs(item)
	}
	dfs(arr)
	return ans
}

console.log(flatten([1, [2, [3, 4], 5], 6, [7]])) // [1,2,3,4,5,6,7]
