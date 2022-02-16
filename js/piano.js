const keyb=['q','2','w','3','e','r','5','t','6','y','7','u','z','s','x','d','c','v','g','b','h','n','j','m']
let keys=document.querySelectorAll('.tecla');
console.log(keys)

//funcion para detectar el click del mouse
keys.forEach(tecla =>{
    tecla.addEventListener('click',()=>playMusic(tecla));
    });

//funcion para detectar las teclas
document.addEventListener('keydown',e=>{
    let key=e.key;
    let KeyIndex=keyb.indexOf(key);
    if(KeyIndex>-1) playMusic(keys[KeyIndex]);
    
    });
//funcion para reproducir audio
function playMusic(tecla){
    const audio=document.getElementById(tecla.dataset.note);
    audio.currentTime=0;
    audio.play();
    
}