/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
    return false;
  }
  var smap = {};
  var tmap = {};

  for (let i = 0; i < s.length; i++) {
    if (!smap.hasOwnProperty(s[i])) {
      smap[s[i]] = t[i];
    }
    if (!tmap.hasOwnProperty(t[i])) {
      tmap[t[i]] = s[i];
    }

    if (smap[s[i]] !== t[i] || tmap[t[i]] !== s[i]) return false;

  }

  return true;
};