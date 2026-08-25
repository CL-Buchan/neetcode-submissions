class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        if (str.length === 0 || str === "") {
            return true;
        }

        let reversedStr = "";

        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];

            if (reversedStr === str) {
                return true;
            }
        }

        return false;
    }

}