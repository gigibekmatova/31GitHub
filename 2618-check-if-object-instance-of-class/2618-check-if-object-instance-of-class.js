/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
   if (obj == null) return false;
    if(typeof classFunction !== 'function') return false;
    return Object(obj) instanceof classFunction;  
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */