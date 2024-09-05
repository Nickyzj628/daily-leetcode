/**
 * 二分查找
 * @param {Number[]} arr
 * @param {Number} target
 */
function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (arr[mid] < target) left = mid + 1
		else if (arr[mid] > target) right = mid - 1
		else return mid
	}
	return -1
}

console.log(binarySearch([0, 3, 5, 5, 6, 7, 8], 7))
