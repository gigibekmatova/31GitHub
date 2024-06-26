/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    var x=0,y=1
    yield x
    yield y
    while(true){
        var z=x+y
        yield z
        x=y
        y=z
    }
     
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */