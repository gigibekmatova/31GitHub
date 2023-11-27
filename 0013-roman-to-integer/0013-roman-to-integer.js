/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var dict = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    };
    var result = 0;
    var intVal = 0;
    var nextIntVal = 0;
    for (var i = 0; i < s.length; i++) {
        intVal = dict[s[i]];
        
        if(i!=s.length-1)
        {
            nextIntVal = dict[s[i+1]];
            if(nextIntVal>intVal){
                intVal = nextIntVal-intVal;
                i = i+1;
            }
        }
        result = result + intVal;
    }
    return result;
};