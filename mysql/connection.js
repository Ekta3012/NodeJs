var mysql=require('mysql');

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"node"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    //var sql="CREATE TABLE user (name varchar(255), address varchar(255))";
    //var insert="INSERT INTO user (name,address) VALUES ('Ekta','Buxar')";
    //var select = "SELECT * FROM user";
    var alter="ALTER TABLE user ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(alter,function(err,result){
        if(err) throw err;
        //console.log(result[1].name);
        console.log("table updated");   
    });
});