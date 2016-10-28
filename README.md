# Callback2Promise
Wraps Callback-style functions into Promise-style functions

Source code
```javascript
const c2p = function(fn,argIdRs,argIdRj){
    return new Promise((resolve,reject)=>{
        fn(onRs,onRj);
        function onRs(...arg){
            if(argIdRs == null) return resolve(arg);
            return resolve(arg[argIdRs])
        }
        function onRj(...arg){
            if(argIdRj == null) return reject(arg);
            return reject(arg[argIdRj])
        }
    });
};
```

Past
```javascript
chrome.system.memory.getInfo(function(result){
    //result.capacity
    //result.availableCapacity
});
```
Now
```javascript
c2p(cb=>chrome.system.memory.getInfo(cb))
    .then((result) => {
        //result.capacity
        //result.availableCapacity
    });
```
Future
```javascript
let [result] = await c2p(cb=>chrome.system.memory.getInfo(cb));
//result.capacity
//result.availableCapacity
```
