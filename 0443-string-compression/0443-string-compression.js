/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
  let res = 0;

  while(i < chars.length) {
    let groupL = 1;

    while(i + groupL < chars.length && chars[i + groupL] == chars[i]) {
      groupL++
    }

    chars[res] = chars[i]
    res++
    if(groupL > 1) {
      for(let n of groupL.toString()) {
        chars[res] = n;
        res++;
      }
    }

    i += groupL
  }

  return res
};