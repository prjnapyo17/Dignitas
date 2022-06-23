const kelilingSegitiga = ((a,b,c) => {
    let hasil = a + b + c
    return hasil;
})
console.log(kelilingSegitiga(1,2,3))

const kelilingPersegiPanjang = ((x,y) => {
    let hasil;
    if (x != y){
        return (x+y)*2
    }else {
        return 'ini adalah persegi'
    }
    // return hasil
    // x === y ? hasil = 2*(x+y) : console.log('ini adalah persegi')
    // return hasil;
})
console.log(kelilingPersegiPanjang(3,2))