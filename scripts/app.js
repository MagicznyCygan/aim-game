
const counterContainer = document.querySelector('.counter');
let targetleft;
let targettop;
let counter = 0;
setInterval(function(){
    targettop = Math.floor(Math.random() * document.body.clientHeight - 30)
    targetleft = Math.floor(Math.random() * document.body.clientWidth - 30)
    const target = document.createElement('div');
    target.classList.add('target');
    if(targettop < 30){
        targettop = 30;
    }
    if(targetleft < 30){
        targetleft = 30;
    }
    target.style.top = targettop + 'px';
    target.style.left = targetleft + 'px';
    document.body.append(target);

    target.addEventListener('click', function(){
        this.remove()
        counter++;
        counterContainer.textContent = counter;
        console.log('listener');
    })
    setInterval(function(){
        target.remove()
    },3000)
},3000)