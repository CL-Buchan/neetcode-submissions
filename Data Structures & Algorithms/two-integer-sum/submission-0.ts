class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let start = 0;
        const seen = new Map<number, number>();
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            const diff = target - nums[i];
            if (seen.has(diff)) {
                const j = seen.get(diff);
                return [j, i];
            }
            seen.set(nums[i], start);
            start++;
        }

        return [];
    }
}
