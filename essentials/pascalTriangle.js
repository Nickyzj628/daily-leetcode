/** 杨辉三角形/帕斯卡三角形 */
function pascalTriangle(row) {
	const triangle = []

	// 遍历
	for (let i = 0; i < row; i++) {
		triangle[i] = []
		triangle[i][0] = 1
		triangle[i][i] = 1
		for (let j = 1; j < i; j++) {
			triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
		}
	}

	// 打印
	for (let r of triangle) {
		console.log(r.join("\t"))
	}
}

pascalTriangle(8)
