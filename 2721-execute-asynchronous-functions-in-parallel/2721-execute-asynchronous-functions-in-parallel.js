/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let res=new Array(functions.length),length=functions.length;
        for(const i in functions){
            functions[i]().then((ress)=>{
                length--;
                res[i]=ress;
                if(length==0){
                    resolve(res)
                }
            }).catch((err)=>{
                reject(err)
            })
        }
    })
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */