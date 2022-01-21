document.querySelector(".container-menu").addEventListener("click",(e)=>{
    e.target.classList.toggle("Active");
})

let opciones = document.querySelectorAll(".acordion");

opciones.forEach(opcion => {
    opcion.addEventListener("click",()=>{
        opcion.classList.toggle("showContent")
        let t = opcion.nextElementSibling;
        if (t.style.display === 'block') {
            t.style.display = 'none'
        }else{
            t.style.display = 'block'
        }
    })
});