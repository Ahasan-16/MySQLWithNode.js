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
        insertData(con);
    }
})
function insertData(con){
    sqlCommand="INSERT INTO `students`( `Name`, `Class`, `Phone`, `City`) VALUES ('Mohammad Ahasan','bsc','01752537287','Chattogram')"
    con.query(sqlCommand,function(error){
        if(error){
            console.log("data insert failed");
        }
        else
        {
            console.log("data inserted");
        }
    })
}
