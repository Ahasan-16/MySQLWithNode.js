var mysql=require('mysql');

var databaseConnectionConfig={
    host:'localhost',
    user:'root',
    password:"",
    //specific je database er sate connect hobo
    database:"school"
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
