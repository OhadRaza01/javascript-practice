function avg(...args){
    return args.reduce((a , b)=>{
        return a+b;
    }) / args.length;
}

const arr = [1,2,3,4];

let average = avg(...arr);
console.log(average);
