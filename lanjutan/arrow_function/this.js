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

// const Siswa = function () {
//     this.nama = 'tole';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     setInterval( () => {
//         console.log(this.umur++);
//     }, 500);
// }

// const tole = new Siswa()

// di atas, penggunaan function declaration pada function setInterval menjadi hoisting, dan ia mencari nilai di global tidak dalam variable Siswa

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})