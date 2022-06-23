// function declaration
function tampilPesan (nama) {
    console.log('halo' + nama);
}
tampilPesan('yoga');

// function expression
const tampilPesan2 = function (nama) {
    console.log('halo' + nama);
}
tampilPesan2('yoga');

// arrow function
const tampilPesan3 = (nama) => {
    console.log('halo' + nama);
}
tampilPesan3('yoga');

// implisit return
const tampilNama = nama => `Halo, ${nama}`;
console.log(tampilNama('Prajna Prayoga'));


let siswa = ['Prajna Prayoga', 'Sahrul Ramdani', 'Wulang Dhanadipa']

let jumlahHuruf = siswa.map(nama => ({
    nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf)