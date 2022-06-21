//PROMISE

const kerjaanDirumah = async () =>{
    //1. ibu cuci piring 
    const hasil = await new Promise((resolve, reject) =>{
        const panjang = 1;
        const lebar = 4;
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

    console.log(hasil ,"hasil")
}

const kerjaanDirumah2 = async () =>{
    //1. ibu cuci piring 
    const hasil = await new Promise((resolve, reject) =>{
        const panjang = "1";
        const lebar = 4;
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

    console.log(hasil ,"hasil")
}


async function main(){
    try{
        await kerjaanDirumah();
        await kerjaanDirumah2();
    } catch(e){
        console.log(e);
    }
}

main()

