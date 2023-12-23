/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
   const target_map = new Map();
    const string_map = new Map();
    let shortest = "";

    for (const char of t) {
        target_map.set(char, (target_map.get(char) ?? 0) + 1);
    }

    const substring_contains_target = () => {
        for (const [char, count] of target_map) {
            if (!string_map.has(char) || string_map.get(char) < count) return false;
        }
        return true;
    };

    let left = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        string_map.set(char, (string_map.get(char) ?? 0) + 1);
        while (substring_contains_target()) {
            const distance = i - left + 1;
            if (shortest == "" || distance < shortest.length) {
                shortest = s.substring(left, i + 1);
            }
            string_map.set(s[left], string_map.get(s[left]) - 1);
            left += 1;
        }
    }

    return shortest; 
};