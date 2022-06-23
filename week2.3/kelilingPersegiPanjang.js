const kelilingPersegiPanjang = ((x,y) => {
    if (x != y){
        return (x+y)*2
    }else {
        return 'ini adalah persegi'
    }
})
// console.log(kelilingPersegiPanjang(3,6))

/*
export {kelilingPersegiPanjang} // export ES6
*/
module.exports.kelilingPersegiPanjang = kelilingPersegiPanjang;
