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
        updateData(con);
    }
})
function updateData(con){

    sqlCommand="UPDATE `students` SET `Name`='mohammadAhasan',`Phone`='0175253000',`City`='Sylhet' WHERE `Id`=4"
    con.query(sqlCommand,function(error){
        if(error){
            console.log("data update failed");
        }
        else
        {
            console.log("data updated successfully");
        }
    })
}
