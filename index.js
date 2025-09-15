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
        deleteData(con);
    }
})
function deleteData(con){
    //column er name likte backtic er bitor ``
    sqlCommand="DELETE FROM `students` WHERE `Id`=3"
    con.query(sqlCommand,function(error){
        if(error){
            console.log("data delete failed");
        }
        else
        {
            console.log("data deleted");
        }
    })
}
