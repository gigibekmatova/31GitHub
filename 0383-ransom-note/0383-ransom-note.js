/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var dictM = {}

    for (let i = 0; i < magazine.length; i++) {
        var m = magazine[i];
        if(!(m in dictM))
        {
            dictM[m] = 1;
        }
        else
        {
            dictM[m] = dictM[m]+1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        var r = ransomNote[i];
        if(!(r in dictM))
        {
            return false;
        }
        else
        {
            var num = dictM[r]-1;

            if(num < 0)
            {
                return false;
            }

            dictM[r] = num;
        }
    }
    return true;
};