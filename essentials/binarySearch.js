/**
 * 二分查找
 * @param {number[]} arr
 * @param {number} target
 */
export function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return left
}

// console.log(binarySearch([0, 3, 5, 5, 6, 7, 8], 7))
