/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
     if (word1.length !== word2.length) {
        return false;
    }

    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);
    let present1 = new Set();
    let present2 = new Set();

    for (let char of word1) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq1[index]++;
        present1.add(char);
    }

    for (let char of word2) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq2[index]++;
        present2.add(char);
    }

    if (present1.size !== present2.size || ![...present1].every(char => present2.has(char))) {
        return false;
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    return freq1.every((val, index) => val === freq2[index]);
};