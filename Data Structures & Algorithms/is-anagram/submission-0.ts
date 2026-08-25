class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        let arr1 = s.trim().toLowerCase().split("");
        let arr2 = t.trim().toLowerCase().split("");
        const n = arr1.length;

        arr1.sort((a, b) => a.localeCompare(b));
        arr2.sort((a, b) => a.localeCompare(b));

        for (let i = 0; i < n; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        
        return true;
    }
}
