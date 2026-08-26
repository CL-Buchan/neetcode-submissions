class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sMap = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join("");
            if (sMap.has(key)) {
                sMap.get(key).push(strs[i]);
            } else {
                sMap.set(key, [strs[i]]);
            }
        }
        return [...sMap.values()];
    }
}
