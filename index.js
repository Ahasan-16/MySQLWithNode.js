var mysql=require('mysql');

var databaseConnectionConfig={
    host:'localhost',
    user:'root',
    password:""
};
var con=mysql.createConnection(databaseConnectionConfig);
con.connect(function(error){
    if(error){
        console.log("connection fail");
    }
    else
    {
        console.log("connection succeeded");
    }
})
