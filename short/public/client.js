const boton=document.getElementById('short');
const url=document.getElementById('url');
const nuevaUrl=document.getElementById('urlShort');
//post
boton.addEventListener('click', () => {
    const urlLarga=url.value;
    if (urlLarga){
        fetch('/acortar',{

            method:'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url:url.value,
            })
        }).then((r)=>r.json()).then((res)=>{
            //nuevaUrl.href=res.urlCorta;
            //nuevaUrl.innerHTML=res.urlCorta;
            var urlCompleta=`${location.origin}${res.urlCorta}`;
            nuevaUrl.href=urlCompleta;
            nuevaUrl.innerHTML=urlCompleta;
        })

    }
  
});
//para mostrar la url corta y agregarla al <a>
// el location me da la url del navegador
