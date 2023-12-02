/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const pm = {}
  const sm = {}
  const sa = s.trim().split(' ')
  if(pattern.length !== sa.length) return false
  for(let i = 0; i< pattern.length; i++) {
    if(!pm.hasOwnProperty(pattern[i])) {
       pm[pattern[i]] = sa[i]
    }
    if(!sm.hasOwnProperty(sa[i])) {
       sm[sa[i]] = pattern[i]
    }
      if( !(pm[pattern[i]] === sa[i] && sm[sa[i]] === pattern[i] ) ) {
      return false   
    }
    
  }
  return true
};