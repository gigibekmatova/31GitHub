/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var map = []; 
  var indegree = [];

  for (var i = 0; i < numCourses; i++)
    map[i] = [], indegree[i] = 0;

  prerequisites.forEach(function(item) {
    var from = item[1];
    var to = item[0];

    map[from].push(to);
    indegree[to]++;
  });

  var q = [];
  var finishNum = 0;
  var ans = [];

  for (var i = 0; i < numCourses; i++) {
    if (!indegree[i]) {
      q.push(i);
      finishNum++;
    }
  }

  while (q.length) {
    var from = q.shift();
    ans.push(from);

    map[from].forEach(function(to) {
      if (--indegree[to] === 0) {
        q.push(to);
        finishNum++;
      }
    });
  }

  return finishNum === numCourses ? ans : [];
};