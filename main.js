const buyBtns = document.querySelectorAll('.js-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

function SHOW(){
    modal.classList.add('open');
}
function CLOSE(){
    modal.classList.remove('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click' , SHOW)
}
modalClose.addEventListener('click' , CLOSE);

