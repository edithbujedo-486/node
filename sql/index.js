const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'remotemysql.com',
    user:'f3yd4qyiKu',
    password:'xzBX09l5Ki',
    database:'f3yd4qyiKu',
}
    
);
const usuarios=[
    {nombre:'juana', apellido:'perez',email:'juana@gmail'},
    {nombre:'susana', apellido:'avalo',email:'susana@gmail'},
    {nombre:'claudia', apellido:'alarcon',email:'claudia@gmail'},
    {nombre:'gaston', apellido:'valle',email:'gaston@gmail'},


];
function insertDB(user,id){
    conn.query(`INSERT INTO usuarios(id,nombre, apellido,email)
    VALUES
    (${id},"${user.nombre}","${user.apellido}","${user.email}")`,
    (error,result,field)=>{
        console.log(result);
    }
    );
};



conn.query('SELECT * FROM usuarios',(error,result,field)=>{
    debugger;
    console.log(result);
}
);

usuarios.forEach(insertDB);
