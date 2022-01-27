const keyb = ['q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u', 'z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm']
let keys = document.querySelectorAll('.tecla');

//funcion para detectar el click del mouse
keys.forEach(tecla => {
    tecla.addEventListener('click', () => playMusic(tecla));
});

let stopAnimationKeyb = e => {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove("bactive")
};

keys.forEach(tecla => {
    tecla.addEventListener("keyup", stopAnimationKeyb)
});

//funcion para detectar las teclas
document.addEventListener('keydown', e => {
    let key = e.key;
    let KeyIndex = keyb.indexOf(key);
    console.log(KeyIndex);
    if (KeyIndex > -1) { playMusic(keys[KeyIndex]); }
    switch (KeyIndex) {
        case 0:
        case 2:
        case 4:
        case 5:
        case 7:
        case 9:
        case 11:
        case 12:
        case 14:
        case 16:
        case 17:
        case 19:
        case 21:
        case 23:
            keys[KeyIndex].classList.add("bactive");
            break;
        case 0:
        case 1:
        case 3:
        case 6:
        case 8:
        case 10:
        case 13:
        case 15:
        case 18:
        case 20:
        case 22:
            keys[KeyIndex].classList.add("nactive");
            break;
    }
});
//funcion para reproducir audio
function playMusic(tecla) {
    const audio = document.getElementById(tecla.dataset.note);
    audio.currentTime = 0;
    audio.play();

}