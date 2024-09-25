/**
 * 快速选择数组中第k大的元素
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function quickSelect(arr, k) {
	if (arr.length === 1) return arr[0]
	const pivot = arr[Math.floor(arr.length / 2)]
	const smallers = []
	const equals = []
	const biggers = []
	arr.forEach((item) => {
		if (item < pivot) smallers.push(item)
		else if (item > pivot) biggers.push(item)
		else equals.push(item)
	})
	if (k <= biggers.length) return quickSelect(biggers, k)
	if (k <= biggers.length + equals.length) return equals[0]
	return quickSelect(smallers, k - biggers.length - equals.length)
}

console.log(quickSelect([7, 3, 5, 5, 6, 0, 8], 4)) // 5
