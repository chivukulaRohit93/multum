var config = require('./dbconfig');
const sql = require('mssql');

async function getOrders(){
    try{
        let pool = await sql.Connect(config);
        let user = await pool.request().query("SELECT * from user");
        return user.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function addOrder(order){
    try {
        let pool = await sql.connect(config);
    let insertProduct = await pool.request()
    .input('username', sql.VarChar, order.username)
    .input('password', sql.VarChar, order.password)
    .execute('InsertOrders');
    return insertProduct.recordsets;    
    } catch (err) {
        console.log(err);
    }
    
}




module.exports = {
    getOrders : getOrders,
    addOrder : addOrder
}