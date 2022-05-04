const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyDown(event){
    if (event.keyCode === 38) {
        if (!isJumping) {
        jump();
        pontua();
        console.log('pressionou seta para cima!');
        }
    }
}

function pontua(){
    let score = 0;
    if(position >= 60){
        score += 10;
        console.log(score);
    }
}

function jump(){
   
    isJumping = true;

    let upInterval = setInterval(()=> {
        if (position >= 150){
            clearInterval(upInterval)
        
    let downInterval = setInterval(() => {
        if (position <= 0){
            clearInterval(downInterval);
            isJumping = false;
        }
        else{
            position -=20;
            dino.style.bottom = position + 'px';
        }
    },20)
        } else{
            position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if(isGameOver) return;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="gameover">Fim de jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';

        }
    },20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keydown', handleKeyDown);