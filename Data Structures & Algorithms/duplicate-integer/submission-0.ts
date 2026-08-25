class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Map<number, number>();
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            if (seen.has(nums[i])) {
                let timesSeen = seen.get(nums[i]);
                seen.set(nums[i], timesSeen++);
                return true;
            }

            seen.set(nums[i], 1);
        }

        return false;
    }
}
