const s1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("s1 Sucess"),3000)
})

const s2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("s2 Sucess"),5000)
})

const s3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("s3 Sucess"),2000)
})

Promise.race([s1,s2,s3]).then(res=>{
    console.log(res);
});

//what if it fail
const a1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("a1 Sucess"),3000)
})

const a2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("a2 Sucess"),2000)
    setTimeout(()=>reject("a2 fail."),2000)
})

const a3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("a3 Sucess"),3000)
})

Promise.race([a1,a2,a3]).then(res=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})