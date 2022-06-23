const dataDiri = {
    nama : 'tole ss sadsad asd',
    email : 'tole@gmail.com',
    telpon : 081212342141,
    pass : ''
}

// NAMA
const cekNama = new Promise( (resolve,reject) => {
    if(dataDiri.nama.length <= 20 && dataDiri.nama != 'Ilham Dwi Pramata Subiakto'){
        resolve('nama benar cuy');  
    }else{
        reject('nama salah cuy');
    }
})
// console.log(cekNama)

// cekNama
//     .then( (resolvedValue) => {
//         console.log(resolvedValue);
//     })
//     .catch( (rejectionReason) => {
//         console.log(rejectionReason)
//     })


// EMAIL
const cekEmail = new Promise( (resolve,reject) => {
    if(dataDiri.email.includes('@')){
        resolve('email benar bung')
    }else{
        reject('email salah bung')
    }
})

// cekEmail
//     .then( (resolvedValue) => {
//         console.log(resolvedValue);
//     })
//     .catch( (rejectionReason) => {
//         console.log(rejectionReason)
//     })


// TELEPON
const cekTelepon = new Promise( (resolve,reject) => {
    if(typeof dataDiri.telpon === 'number'){
        resolve('telpon benar cuk')
    }else{
        reject('telpon harus angka cuk')
    }
})

// console.log(cekTelepon)

// cekTelepon
//     .then( (resolvedValue) => {
//         console.log(resolvedValue);
//     })
//     .catch( (rejectionReason) => {
//         console.log(rejectionReason)
//     })

// PASSWORD
const cekPassword = new Promise( (resolve,reject) => {
    let passNama = dataDiri.nama.split(' ').join('_');
    dataDiri.pass = (passNama+'0'+dataDiri.telpon);
    resolve(dataDiri.pass)
    
})

// const handleSuccessPassword = (resolvedValue) => {
//     console.log(resolvedValue)
// }

// const handleFailurePassword = (rejectionReason) => {
//     console.log(rejectionReason)
// }

// cekPassword.then(handleSuccessPassword,handleFailurePassword)

let myPromises = Promise.all([cekNama, cekEmail, cekTelepon, cekPassword])

myPromises
    .then( (resolvedValue) => {
        console.log(resolvedValue);
    })
    .catch( (rejectionReason) => {
        console.log(rejectionReason)
    })
