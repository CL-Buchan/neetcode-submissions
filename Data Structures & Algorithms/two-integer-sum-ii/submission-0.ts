class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let sum = 0;
        let left = 0, right = numbers.length - 1;

        while (left < right) {
            sum = numbers[left] + numbers[right];

            if (sum === target) {
                return [left + 1, right + 1];
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }

        return [];
    }
}
