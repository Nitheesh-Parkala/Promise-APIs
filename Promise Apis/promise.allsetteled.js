//note: It will give an object in the result of console.
const n1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("n1 Sucess"),3000)
})

const n2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("n2 Sucess"),1000)
})

const n3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("n3 Sucess"),5000)
})

Promise.allSettled([n1,n2,n3]).then(res=>{
    console.log(res);
});

//what if one of the array in [m1,m2,m3]will fail example:
const m1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("m1 Sucess"),3000)
})

const m2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("m2 Sucess"),1000)
    setTimeout(()=>reject("m2 Fail"),1000)
})

const m3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("m3 Sucess"),5000)
})

Promise.allSettled([m1,m2,m3]).then(res=>{
    console.log(res); // here i'm uncaught error it should not be happen.
}).catch((err)=>{
    console.error(err)
});

//note: It will give an object in the result of console.