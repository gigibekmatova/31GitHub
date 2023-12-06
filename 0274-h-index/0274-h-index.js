/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length;
  for (var i = len; ; i--) {
    var cnt = 0
      , cnt_equal = 0;
    citations.forEach(function(item) {
      if (item > i) cnt++;
      if (item === i) cnt_equal++;
    });

    if (cnt > i) continue;
    if (cnt + cnt_equal < i) continue;
    return i;
  }
};