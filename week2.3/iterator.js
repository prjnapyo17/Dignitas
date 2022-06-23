// Nomor 1
const each= ((array, callback) => {
    array.map((angka)=>{
        return callback(angka)
    });
    // console.log(arr);
    // for (let i = 0; i < array.length; i++) {
    //     array[i] = array[i]*2;
    //     array.join(" ")
    // }
})

each([1,2,3,4], val => console.log(val));
each([1,2,3,4], val => console.log(val*2));

// Nomor 2
const map = ( (array = [], callback) => {
    const arr = array.map((angka)=>{
        return callback(angka)
    });
    console.log(arr);
})

map([1,2,3,4], val => val*2)

// Nomor 3
const reject = ((array = [], callback) => {
    // callback(array)
    let angka = [];
    array.map(item => {
        // console.log(callback(item))

        if(callback(item) === false){
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
