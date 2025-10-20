/**
 * 118. 杨辉三角
 * https://leetcode.cn/problems/pascals-triangle/description/?envType=study-plan-v2&envId=top-100-liked
 */

function generate(numRows: number): number[][] {
    const method1 = () => {
        // 题目规定 numRows >= 1，所以必定有第一行数据
        const result = [
            [1],
        ];

        // 直接从第二行开始计算
        for (let row = 1; row < numRows; row++) {
            result[row] = [];
            // 为第n行添加n个数据
            for (let col = 0; col <= row; col++) {
                const topLeft = result[row - 1][col - 1] ?? 0;
                const topRight = result[row - 1][col] ?? 0;
                result[row][col] = topLeft + topRight;
            }
        }

        return result;
    };

    // 命令式，效率更低
    const method2 = () => {
        return Array
            .from({ length: numRows }, (_, row) => new Array(row + 1).fill(1))
            .map((items, row, result) => {
                if (row === 0) {
                    return items;
                }
                for (let col = 0; col <= row; col++) {
                    const topLeft = result[row - 1][col - 1] ?? 0;
                    const topRight = result[row - 1][col] ?? 0;
                    items[col] = topLeft + topRight;
                }
                return items;
            });
    };

    return method1();
};

console.log(generate(5));