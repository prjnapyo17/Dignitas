// konsep this pada arrow function

// Constructor function
// const Siswa = function() {
//     this.nama = 'tole';
//     this.umur = 99;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const tole = new Siswa(); 
// tole.sayHello();

// Arrow Function
// const Siswa = function() {
//     this.nama = 'tole';
//     this.umur = 99;
//     this.sayHello =  () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const tole = new Siswa(); 
// tole.sayHello();

// Object Literal
const mhs = {
    nama: 'tole',
    umur: 66,
    sayHello: () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}

// mhs.sayHello() => Output Halo, nama saya tole, dan saya 66 tahun. Karena arrow function tidak memiliki konsep this