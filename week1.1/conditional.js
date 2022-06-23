const a = 4

if(a%2==0){
    console.log("this is an even number")
}else{
    console.log("this is not an even number")
}

const b = 8
const c = a+b

if(c >= b){
    console.log(b+" is even number and result of "+(a+b)+" more than "+b)
}

a ? console.log ("variable a have an value "+a) : console.log ("variable b have an value "+b);