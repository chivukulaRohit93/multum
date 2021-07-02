const config = {
    user : 'sa',
    password: '1234',
    server:'127.0.0.1',
    database:'user',
    options:{
        trustedconnection: true,
        encrypt: true,
        enableArithAbort: true,
        instancename : 'LAPTOP-DH6TD26N\MSSQLSERVER01',
        trustServerCertificate: true
    },
    port : 61543
}

module.exports = config;