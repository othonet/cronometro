let btnStart = document.querySelector('#startCronometro');
let btnPause = document.querySelector('#pauseCronometro');
let btnReset = document.querySelector('#resetCronometro');
let cronometro = document.querySelector('#cronometro');
let minutes = 0;
let seconds = 0;
let started = false;

btnStart.addEventListener('click', () => {
    started = true;
    verificaStatus(started);
})

function verificaStatus(status) {
    if (status === true) {
        startCronometro();
    } else if (status === false) {
        pauseCronometro();
    }
}

function startCronometro() {
    
    let intCronoStarted = setInterval(crono, 100);
    iniciaAnimacao(cronometro);
    
    btnPause.addEventListener('click', (e) => {
        
        pausaAnimacao(cronometro);
        clearInterval(intCronoStarted);
    })
    
    btnReset.addEventListener('click', (e) => {
        
        minutes = 0;
        seconds = 0;
        
        //Chama e monta o cronômetro
        cronoMount(minutes, seconds)
    })
}

function crono() {
    ++seconds;
    if (seconds == 60) {
        ++minutes;
        seconds = 0;
    }
    
    //Chama e monta o cronômetro
    cronoMount(minutes, seconds);
}

function cronoMount(minutes, seconds) {
    minutes < 10 ? minutes = `0${minutes}` : minutes = `${minutes}`;
    seconds < 10 ? seconds = `0${seconds}` : seconds = `${seconds}`;
    cronometroMount = `${minutes}:${seconds}`;
    cronometro.innerHTML = cronometroMount;
}

function iniciaAnimacao(elemento){
    elemento.classList.add("jumping");
}

function pausaAnimacao(elemento){
    elemento.classList.remove("jumping");
}