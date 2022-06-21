// const each = ( (angka) => {
//     let val = [1,2,3,4];
//     angka = val.join(" ");
//     console.log(angka);

//     for(let i=0; i < val.length; i++){
//        val[i] = val[i]*2; //harus di isi [i], karena kalau tidak 
//     }
//     angka = val.join(" ");
//     console.log(angka)
// });
// each()

// Nomor 1
const each= ((array = [], callback) => {
    array.map((angka)=>{
        callback(angka)
    });
    // for (let i = 0; i < array.length; i++) {
    //     array[i] = array[i]*2;
    //     array.join(" ")
    // }
})

each([1,2,3,4], val => console.log(val))
each([1,2,3,4], val => console.log(val*2))


// Nomor 2
const tambahArray = ((array, action, position, angka = '') => {
    let arr = array;
    
    let pos = {
        first : 0,
        last : array.length
    }
    // console.log(arr);
    if(action == 'add'){
        arr.splice(pos[position], 0, angka)
    }else if(action == 'delete') {
        arr.splice(pos[position], 1)
    }else {
        console.log("salah input")
    }
    // let act = {
    //     add : arr.splice(pos[position], 0, angka),
    //     delete : arr.splice(pos[position], 1)
    // }
    // console.log(act.add);
    return arr
})

console.log(tambahArray([1,2,3,4],'add','first',5))
console.log(tambahArray([1,2,3],'delete','last'))

// console.log(tambahArray)

// Nomor 3
const reject = ((array = [], callback) => {
    // callback(array)
    let angka = [];
    array.map(item => {
        // console.log(callback(item))

        if(callback(item) == false){
            // console.log(item)
            angka.push(item)
        }else  {
            // console.log("salah")
        }
    })
    console.log(angka)
    // return angka;
})

reject([1,2,3,4], val => val > 2)



