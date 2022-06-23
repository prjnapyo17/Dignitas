// Nomor 1

const example = "dignitas bka is the coolest academy";

function kapitalHurufDepan(word) {
    let examples = word.split(" "); // memisahkan kalimat menjadi menjadi array [dignitas,bka]
    return examples.map( word => { // mengembalikan nilai dengan perulangan
        return word[0].toUpperCase() + word.slice(1); // mengambil index 0 atau huruf pertama di kalimat lalu ditambahkan huruf kalimat dari index 1
    }).join(" ");
}

console.log(kapitalHurufDepan(example))

// menggunakan di bawah ini juga bisa
// const kapitalHurufDepan = ( examples => {
//     let example = examples.split(" ");
//     for(var i=0; i < example.length; i++){
//         example[i] = example[i].charAt(0).toUpperCase() + example[i].slice(1);
//     }
//     return example.join(" ");
// })

// console.log(kapitalHurufDepan("dignitas bka"))

// Nomor 2
let a = 9876549

function balikUrutanAngka(angka) {
    let angkaString = angka.toString(); // menjadikan number ke string
    let angkaAwal = angkaString.split(''); // mengubah string menjadi array
    let balikAngka = angkaAwal.reverse(); // membalikkan isi array
    let angkaAkhir = balikAngka.join(''); // menggabungkan array menjadi string
    
    return angkaAkhir;
}
console.log("angka awal : "+a)
console.log("angka akhir : "+balikUrutanAngka(a))

/* Memakai bisa ini juga
let angkaAwal = 9876549;
const balikUrutanAngka = ((sampleAngka) => {
    sampleAngka = Number(String(angkaAwal).split('').reverse().join(''));
    return sampleAngka;
})

console.log("angka awal : "+angkaAwal)
console.log("angka akhir :"+balikUrutanAngka(angkaAwal));*/

// Nomor 3
const convertUang = (asalUang, totalUang, tujuanUang) => {
    const mataUang = {
        IDR : {
            IDR : 1,
            USD : 0.000069,
            JPY : 0.0092,
            CNY : 0.00046,
            MYR : 0.00030
        },
        USD : {
            USD : 1,
            IDR : 14549.85,
            JPY : 134.41,
            MYR : 4.40,
            CNY : 6.70
        },
        JPY : {
            JPY : 1,
            USD : 0.0074,
            CNY : 0.050,
            IDR : 108.23,
            MYR : 0.033
        },
        CNY : {
            CNY : 1,
            USD : 2172.08,
            IDR : 2172.47,
            MYR : 0.66,
            JPY : 20.08
        },
        MYR : {
            MYR : 1,
            USD : 0.23,
            IDR : 3308.84,
            JPY : 30.58,
            CNY : 1.52 
        }
    }
    // buat ngambil nama object pertama dari variable object rateUang
    const rateUang = mataUang[asalUang]; // mengambil index awal dari object

    // mengambil object dari object
    const ratesUang = rateUang[tujuanUang]; // buat ngambil rates(value) dari tujuanUang(key)
    // console.log(ratesUang);

    // a
    const hasilUang = ratesUang * totalUang; // menghitung rate uang dikali uang yang dimasukkan
    return (`${totalUang} ${asalUang} setara dengan ${hasilUang} ${tujuanUang}`);
}

console.log(convertUang('USD',10,'USD'));