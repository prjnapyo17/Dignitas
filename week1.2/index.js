function exampleInsertTable(tableName, columnList, dataList){
    console.log(`inset into ${tableName} (${columnList.toString()}) values (${dataList.toString()})`)
    return dataList[0]
}

let columnListArg = ['id', 'fullname', 'umur']
let dataListArg = [1, 'anwar', '18']
let tableNameArg = 'user'
exampleInsertTable(tableNameArg,columnListArg,dataListArg);

const exampleDefaultParameter = (name = 'stranger') => {
    console.log("hello bestie "+ name)
}

const namaKelean = ['anwar', 'stipen', 'yogs', 'dips', 'ita', undefined]

namaKelean.map(name =>{
    exampleDefaultParameter(name)
})

const idBarang = 1
const checkoutBarang = () => {
    const transactionTableInsert = exampleInsertTable('transaction',['id','nama'],['id_trx_001','finna'])
    console.log(transactionTableInsert, " hasil insert table transaction") //menghasilkan id tabel transaksi(PK)

    const transactionDetailTableInsert = exampleInsertTable("transaction_detail",['id','trx_id','id_barang'],['id_trxd_001',transactionTableInsert,idBarang])
    console.log(transactionDetailTableInsert) //menghasilkan id tabel detail transaksi dan mengambil data primary key dari table transaksi dan menjadi foreign key
}

checkoutBarang();