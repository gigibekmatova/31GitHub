/**
 * @return {Function}
 */
function createHelloWorld() {
    
    return function(...args) {
       return "Hello World"; 
    }
};

const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction());
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
