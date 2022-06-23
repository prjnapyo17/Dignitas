// Nomor 1
function callback (angka){
    let val = [1,2,3];
    angka = val.join(" ")
    console.log(angka)
}

const useCallback = () => {
    // callback(callback)
    callback()
}
useCallback(callback);

// Nomor 2
const pouringWater = new Promise((resolve) => {
    setTimeout(function() {
        resolve('Pouring Water');
    }, 3000);
})

const boiled = new Promise((resolve) => {
    setTimeout(function() {
        resolve('boiled');
    }, 2000);
})

const seasoning = new Promise((resolve) => {
    setTimeout(function() {
        resolve('seasoning');
    }, 1000);
})

const wash = new Promise((callback) => {
    callback(pouringWater)
})

const dry = new Promise((callback) => {
    callback(boiled)
})

// dry
//     .then( (resolve) => {
//         console.log(resolve,'Done!')
//     })

const fold = new Promise((callback) => {
    callback(seasoning)
})

// fold
//     .then( (resolve) => {
//         console.log(resolve,'Done!')
//     })
let doCookNoodles = Promise.all([wash,dry,fold]);

doCookNoodles
    .then( (resolve) => {
        console.log(resolve.join(" "),'Done!')
    })

const countDouble = async (x) => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

const addPromise = async (x) => {
    return await new Promise(resolve => {
    countDouble(10).then((a) => {
        countDouble(20).then((b) => {
        countDouble(30).then((c) => {
            resolve(x + a + b + c);
            })
        })
      })
    });
}

addPromise(10).then((sum) => {
    console.log(sum)
})
