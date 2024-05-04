/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
   const temp = Symbol();
    const callback = this;
    
    Object.defineProperties(context, {[temp]: { value: callback, configurable: true }});

    const result = context[temp](...args);
    delete context[temp];

    return result;  
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */