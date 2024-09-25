/**
 * 快速排序
 * @param {number[]} arr
 * @returns {number[]}
 */
export function quickSort(arr) {
	if (arr.length < 2) return arr
	const left = []
	const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0]
	const right = []
	arr.forEach((item) => {
		if (item < pivot) left.push(item)
		else right.push(item)
	})
	return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort([7, 3, 5, 5, 6, 0, 8]))
