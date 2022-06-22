// 1. Object Literal
// Problem : tidak efektif untuk object yang banyak
// let siswa1 = {
//     nama: 'tole',
//     energi: 10,
//     makan : function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan! Energi kamu ${this.energi}`);
//     }
// }

// let siswa2 = {
//     nama: 'budi',
//     energi: 20,
//     makan : function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan! Energi kamu ${this.energi}`);
//     }
// }

// siswa1.makan(2)
// siswa2.makan(5)

// 2. Function Declaration
// function Siswa(nama, energi) {
//     let siswa = {};
//     siswa.nama = nama;
//     siswa.energi = energi;

//     siswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     siswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return siswa;
// }

// let tole = Siswa('tole', 10);
// let budi = Siswa('budi', 99);
// tole.makan(2)
// budi.main(10)
// console.log(tole)
// console.log(budi);

// 3. Constructor Function
// keyword new
// function Siswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let tole = new Siswa('tole', 75);
// console.log(tole);

// 4. Object.create
// const methodSiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//        this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 3;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }
// function Siswa(nama, energi) {
//     let siswa = Object.create(methodSiswa);
//     siswa.nama = nama;
//     siswa.energi = energi;

//     return siswa;
// }

// let tole = Siswa('tole', 10);
// let budi = Siswa('budi', 99);
// let wuling = Siswa('wuling', 45);
// tole.makan(2);
// budi.main(10);
// wuling.tidur(6);
// console.log(tole);
// console.log(budi);
// console.log(wuling);

function Siswa(nama, energi) {
    // let this = Object.create(Siswa.prototype); // default function Siswa sudah memiliki parent yg bernama prototype
    this.nama = nama;
    this.energi = energi;
}

Siswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

let tole = new Siswa('tole', 20);

tole.makan(3)
console.log(tole);