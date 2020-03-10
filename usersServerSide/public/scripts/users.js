const nom = document.getElementById('nombre');
const ape = document.getElementById('apellido');
const email = document.getElementById('email');
const boton = document.getElementById('boton');
const tabla = document.getElementById('tablaUsuario');
traerUsuario()

boton.addEventListener('click', () => {
    fetch('/usuarios', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nom.value,
            apellido: ape.value,
            email: email.value,
            

        }),
    }).then((res) => res.json()
    ).then((res) => {
       traerUsuario();
    });
});
function dibujarTabla(usuarios) {
    tabla.innerHTML = '';
    usuarios.forEach((usuario) => {
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td')
        const tr = document.createElement('tr');

        td1.innerHTML = usuario.nombre
        td2.innerHTML = usuario.apellido
        td3.innerHTML = usuario.email
        td4.innerHTML = usuario.id

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        tabla.appendChild(tr);



    })
}
function traerUsuario(){
    fetch('/usuarios').then((res) => res.json()
    ).then((res) => {
        dibujarTabla(res)
    });
}
