document.querySelector(".container-menu").addEventListener("click",(e)=>{
    e.target.classList.toggle("Active");
})

let opciones = document.querySelectorAll(".acordion");
let cerrar = document.querySelectorAll(".close");

opciones.forEach(opcion => {
    let contenido = document.querySelector(".content");
    opcion.addEventListener("click",()=>{
        opcion.classList.toggle("showContent")
        let t = opcion.nextElementSibling;
        if (window.screen.width >= 768){
            if (opcion == opciones[1]) {
                if (contenido.style.display === 'block') {
                    contenido.style.display = 'none'
                }else{
                    contenido.style.display = 'block'
                } 
            }
            else{
                if (t.style.display === 'block') {
                    t.style.display = 'none'
                }else{
                    t.style.display = 'block'
                } 
            }
            cerrar.forEach(close => {
                close.addEventListener("click",()=>{
                    t.style.display = 'none'
                    opcion.classList.remove("showContent")
                })
            })   
        }
        else{
            contenido.style.display = 'none'
            if (t.style.display === 'block') {
                t.style.display = 'none'
            }else{
                t.style.display = 'block'
            } 
        }  
    })
});


let select=document.querySelectorAll('.select');
console.log(select)

//funcion para detectar el click del mouse
select.forEach(select =>{
    select.addEventListener('mouseenter',()=>playMusic(select));
    });

//funcion para reproducir audio
function playMusic(select){
    const audio=document.getElementById(select.dataset.note);
    audio.currentTime=0
    audio.play();
    
}


