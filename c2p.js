export const c2p = function(fn,argIdRs,argIdRj){
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
