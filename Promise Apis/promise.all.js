// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Sucess"),3000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Sucess"),1000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 Sucess"),5000)
// })

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// });


//what if one of the array in [p1,p2,p3]will fail example:
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Sucess"),3000)
})

const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P2 Sucess"),1000)
    setTimeout(()=>reject("P2 Fail"),1000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Sucess"),5000)
})

Promise.all([p1,p2,p3]).then(res=>{
    console.log(res); // here i'm uncaught error it should not be happen.
}).catch((err)=>{
    console.error(err)
});
//here im using catch statement bec we should not get uncaught error.