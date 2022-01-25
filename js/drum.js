let drum = document.querySelectorAll(".drum");
let cymbal1 = document.getElementById("Component\ 13");
let cymbal2 = document.getElementById("Component\ 16");
let cymbal = document.getElementById("cymbal3");
let tom = document.querySelectorAll(".inner");
let teclas = ['f', 'i', 'o', 'p', 'k', 'l', 'a', '0'];

///animations
let animationCymbal1 = () => {
    cymbal1.style.transform = 'translateY(28px)';
}

let animationCymbal2 = () => {
    cymbal2.style.transform = 'translateY(28px)';
}

let animationCymbal3 = () => {
    cymbal.style.transform = 'rotate(15deg)';
    cymbal.style.transformOrigin = '50% 10%';
}

let stopAnimation = e => {
    if (e.propertyName !== 'transform') return
    e.target.style.transform = 'rotate(0deg)'
    cymbal.style.transformOrigin = '0% 0%';
}

let stopAnimationCymbals = e => {
    if (e.propertyName !== 'transform') return
    e.target.style.transform = 'translateY(0px)';
}

let stopAnimationTom = e => {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove("active")
}

tom.forEach(tomInner => {
    tomInner.addEventListener("transitionend", stopAnimationTom)
})

cymbal.addEventListener("transitionend", stopAnimation)
cymbal1.addEventListener("transitionend", stopAnimationCymbals);
cymbal2.addEventListener("transitionend", stopAnimationCymbals);
///

document.addEventListener("keydown", (e) => {
    let key = e.key;
    let index = teclas.indexOf(key);
    if (index > -1) {
        playDrum(drum[index])
    }
    switch (index) {
        case 7:
            animationCymbal1();
            break;
        case 5:
            animationCymbal2();
            break;
        case 0:
            animationCymbal3();
            break;
    }
    switch (index) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 6:
            tom[index].classList.add("active");
            break;
    }
})

drum.forEach(dc => {
    dc.addEventListener("click", () => playDrum(dc));
})

function playDrum(dc) {
    let drumSound = document.getElementById(dc.dataset.sound)
    drumSound.currentTime = 0;
    drumSound.play();
    if (dc == drum[7]) {
        animationCymbal1()
    }
    if (dc == drum[5]) {
        animationCymbal2()
    }
    if (dc == drum[0]) {
        animationCymbal3()
    }
}


