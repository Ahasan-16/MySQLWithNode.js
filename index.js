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
        selectData(con);
    }
})
function selectData(con){

    sqlCommand="SELECT * FROM `students`"
    con.query(sqlCommand,function(error,result){
        if(error){
            console.log("data select failed");
        }
        else
        {
            console.log("data select successfully");
            console.log(result);
        }
    })
}
