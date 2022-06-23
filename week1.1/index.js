console.log("output log")
console.log(1)

let dataYoga = {
    "nama" : "Yoga",
    "iswibu" : true,
    "waifu" : "",
    "jumlahMata" : 2,
    "jumlahTelinga" : 2,
    "warnaMata" : "ungu",
    "caraKeDignitas" : () => {
        return "jalan kaki";
    },
    "hobi" : ["main gim", "nonton anim", "nakluk dunia"]
}

console.log(dataYoga.caraKeDignitas())
console.log(dataYoga.hobi[2])

const tglSekarang = new Date();
console.log(tglSekarang)

let menu1 = 10000
let menu2 = 10000
let menu3 = 10000

let jumlahYangHarusDibayar = menu1 + menu2
console.log("harga yang di bayar adalah = ", jumlahYangHarusDibayar)
let uangYangDikasih = 50000
console.log("Uang yang dikasih = ", uangYangDikasih)
let kembaliannya = uangYangDikasih - jumlahYangHarusDibayar
console.log(kembaliannya)

const firstName = "Prajna"
const lastName = "Prayoga"

console.log(firstName+" "+lastName)
console.log(`${firstName} ${lastName}`)

let dataNama = ["akmal", "anwar", "agus", "anis"]
console.log(dataNama.length)
console.log(dataNama.slice(0,3)) // slice(start,end)

const listSiswa = ["salwa", "wahyu", "arta"]
listSiswa.splice(1,0,"yoga")
console.log(listSiswa)
