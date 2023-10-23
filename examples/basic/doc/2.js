let {AsyncParallelHook} = require('tapable');
let hook = new AsyncParallelHook();
//作用类似于Promise.all
console.time('cost');
hook.tapPromise('1',()=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,1000);
    });
});
hook.tapPromise('2',()=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,2000);
    });
});
hook.tapPromise('3',()=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,3000);
    });
});
hook.promise().then(res=>{
  console.timeEnd('cost');
});
