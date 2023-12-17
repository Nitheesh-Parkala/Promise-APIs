const b1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("b1 sucess")},3000)
})
const b2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("b2 sucess")},2000)
})
const b3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("b3 sucess")},5000)
})

Promise.any([b1,b2,b3]).then(res=>{
    console.log(res)
})
//example 2
const c1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("c1 sucess")},3000
        reject("c1 fail")},2000
        )
})
const c2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("c2 sucess")},4000
        reject("c2 fail")},2000)
})
const c3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("c3 sucess")},2000)
})

Promise.any([c1,c2,c3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err);
    console.log(err.errors); //AggregateError: to show array of object.
})