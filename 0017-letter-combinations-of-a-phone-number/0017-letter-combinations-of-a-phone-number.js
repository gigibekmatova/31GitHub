/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   const result = [];
    if (!digits) {
        return result;
    }
    const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const combination = new Array(digits.length).fill('');
    backtrack(result, mapping, combination, digits, 0);
    return result;
};

function backtrack(result, mapping, combination, digits, index) {
    if (index === digits.length) {
        result.push(combination.join(''));
    } else {
        const letters = mapping[digits.charAt(index) - '0'];
        for (const letter of letters) {
            combination[index] = letter;
            backtrack(result, mapping, combination, digits, index + 1);
        }
    }
};