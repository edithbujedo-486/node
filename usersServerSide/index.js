var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var usuarios = [];
var mysql=require('mysql');
var conn=mysql.createConnection({
    host:'remotemysql.com',
    user:'f3yd4qyiKu',
    password:'xzBX09l5Ki',
    database:'f3yd4qyiKu',
}
);

app.get('/usuarios',(req,res)=>{
    conn.query('SELECT * FROM usuarios',(error,result,field)=>{
        res.send(JSON.stringify(result));
    }
    );
}
);






app.use(bodyParser.json()); 

app.post('/usuarios', (req, res)=>{
    var user = req.body;
    conn.query(`INSERT INTO usuarios(nombre, apellido,email) 
    VALUES ("${user.nombre}", "${user.apellido}", "${user.email}")`,(error,result,fields)=>{
             conn.query(`SELECT * FROM usuarios`,(error,result,field)=>{
                 res.send(result);
             })
    })

    
    })

/*
app.delete('/usuarios',(req, res)=>{
    res.send(JSON.stringify(usuarios));
});*/


app.use(express.static('public'));
app.listen(8080);

