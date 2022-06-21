const sample1 = "budi is weaboo and he have"
const sample2 = 20
const sample3 = "collection of anime video"

// console.log(sample1)
// console.log(sample2)
// console.log(sample3)

// console.log("budi is weaboo and he have")
// console.log(20)
// console.log("collection of anime video")

console.log(sample1+" "+sample2+" "+sample3)
const jumlah = (sample1+" "+sample2+" "+sample3)
console.log("jumlah variabel = ",(sample1+" "+sample2+" "+sample3).length)
// console.log("dan jumlah hurufnya adalah", cetak.length)

let str = "but budi denailed it. even though he was caught watching".split('.');
str[1] = str[1].charAt(1).toUpperCase() + str[1].slice(2);

console.log(jumlah+" "+str.join('. '));

// let str1 = "but budi denailed it. even though he was caught watching"
// str1.replace(/. /g,". E")

// console.log(str1)

// exponentiation
const pangkat = Math.pow(5, 5)
console.log(pangkat)

// let z = 5 ** 5
// console.log(z)

const a = "hours per day"
'Boolean' === a ? console.log("is bool") : console.log("bool not")

console.log(sample1+" "+sample2+" "+sample3+" "+str.join('. ')+" "+pangkat+" "+a)

console.log(typeof a)

//if else
if(typeof a === 'string'){
    console.log("ini adalah string")
}else{
    console.log("bukan")
}

//ternary
typeof a === 'string' ? console.log("ini memang string") : console.log("bukan");
