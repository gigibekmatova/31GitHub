/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0, tank = 0, total = 0
    for (let i = 0; i < gas.length; i++){
    const usage = gas[i] - cost[i]
    tank += usage
    if(tank < 0){
            tank = 0
            start = i + 1
        }
        total += usage
    }

    return total < 0 ? -1 : start
};