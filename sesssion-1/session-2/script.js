// console.log("Hie");


// let,var,const
// const a=10;
// var a=10;
// let a=10;
// a=20;
// console.log(a);

// arrow function
// const sum = (a,b) =>a+b;

// console.log(sum(10,20));

// const num=[1,2,3,4,5];
// const ans= num.map((num) => {
//     return "The number is" +num;
// })
// console.log(ans);

const coding = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Coding work!!!");
            resolve();
        },2500);
    });
}

const development = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Development work!!!");
            resolve();
        },5000);
    });
}

const fun = async() =>{
    await coding();
    await development();
    console.log("Work is done!!!");
}

fun();