var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
//coneccion creada
const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'databasetest.c892mhmleqzx.us-east-1.rds.amazonaws.com',
    user:'edith',
    password:'PasswordEdith',
    database:'edith',
}
    
);



//cada vez que nos pide el acortar hacemos el insert en la tabla 
//URL Y DESPUES hace el insert en la URL_corta del id como si fuera la url corta


app.post('/acortar',(req,res)=>{
conn.query(
    `INSERT INTO URL(url)
    VALUES
    ('${req.body.url}')`,
    (error,result,field)=>{
        var urlId=result.insertId;
       conn.query(
           `INSERT INTO URL_corta(url_id,url)
           VALUES (${urlId},'${urlId}') `,
           (error,result,field)=>{
               res.send(JSON.stringify({
                   urlCorta:`/${urlId}`
               }))
           }
       )
    
    });
});



//deberia estar al ultimo
app.use(express.static('public'));
app.listen(4000);


