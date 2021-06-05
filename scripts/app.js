
const counterContainer = document.querySelector('.counter');
let targetX;
let targetY;
let counter = 0;

const game = () => {
    const target = document.createElement('div');
    generateTarget(target);
    shootTheTarget(target);
    deleteTargetIfNotClicked(target);
}

const generateTarget = (target) => {
    targetY = Math.floor(Math.random() * document.body.clientHeight - 30)
    targetX = Math.floor(Math.random() * document.body.clientWidth - 30)
    target.classList.add('target');
    if(targetY < 30){
        targetY = 30;
    }
    if(targetX < 30){
        targetX = 30;
    }
    target.style.top = targetY + 'px';
    target.style.left = targetX + 'px';
    document.body.append(target);
}

const shootTheTarget = (target) => {
    target.addEventListener('click', function(){
        playShootSound();
        this.remove()
        counter++;
        counterContainer.textContent = counter;
    })

    document.body.addEventListener('click', function(){
        target.remove();
    })
}

const deleteTargetIfNotClicked = (target) => {
    setInterval(function(){
        target.remove()
    },3000)
}

const playShootSound = () => {
    var audio = new Audio('../music/shoot.mp3');
    audio.play();
}
setInterval(game, 3000)
