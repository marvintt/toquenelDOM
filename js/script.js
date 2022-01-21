document.querySelector(".container-menu").addEventListener("click",(e)=>{
    e.target.classList.toggle("Active");
})

let opciones = document.querySelectorAll(".acordion");
let cerrar = document.querySelectorAll(".close");

opciones.forEach(opcion => {
    opcion.addEventListener("click",()=>{
        opcion.classList.toggle("showContent")
        let t = opcion.nextElementSibling;
        if (t.style.display === 'block') {
            t.style.display = 'none'
        }else{
            t.style.display = 'block'
        } 
        cerrar.forEach(close => {
            close.addEventListener("click",()=>{
                t.style.display = 'none'
                opcion.classList.remove("showContent")
            })
        })     
    })
});