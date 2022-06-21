async function checkAsync(p,l){
    const hasil = await new Promise((resolve, reject) =>{
        const panjang = p;
        const lebar = l;
        if(typeof panjang == 'number' && typeof lebar =='number'){
            const calculateBalok = panjang * lebar
            resolve(calculateBalok)
            console.log()
        }else{
            reject('panjang and lebar must be an number')
        }
    }).then(res => {
        // return `hasilnya = ${res}`
       return res
    }).catch(err =>{
        return 'ini error nya=' +err
    })
    return hasil;
}


async function main(){
    const dataPribadi = {
        absen: 1,
    }

    let value1 = checkAsync(1,2);
    console.log(await value1);
    if(dataPribadi.absen == 1){
        value1 = checkAsync(2,3)
    }

    console.log(await value1);
}

main()