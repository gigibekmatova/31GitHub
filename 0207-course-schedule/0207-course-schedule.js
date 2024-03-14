/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
   let prelen = prerequisites.length,
        maxNoCircle = numCourses * (numCourses - 1) / 2;
    if (!prelen) {
        return true;
    } else if (prelen > maxNoCircle) {
        return false;
    }

    let flags = [], // 存储未访问节点
        nodemarks = new Array(numCourses), // 存储node访问标记
        edges = new Array(numCourses); // 存储连边信息
    for (let i = 0; i < numCourses; i++) {
        flags.push(i);
        nodemarks[i] = 0;
        edges[i] = [];
    }

    for (let i = 0; i < prelen; i++) {
        let source = prerequisites[i][0],
            target = prerequisites[i][1];

        edges[target].push(source);
    }

    while (flags.length) {
        let node = flags[flags.length - 1];
        if (!dfsVisit(node)) {
            return false;
        }
        flags.pop();
    }

    return true;

    function dfsVisit(node) {
        if (nodemarks[node]) {
            return false;
        }

        if (flags.indexOf(node) !== -1) {
            nodemarks[node] = 1;
            let elen = edges[node].length;
            for (let i = 0; i < elen; i++) {
                if (!dfsVisit(edges[node][i])) {
                    return false;
                }
            }
            nodemarks[node] = 0;
        }

        return true;
    } 
};