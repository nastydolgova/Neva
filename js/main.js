let times = document.querySelectorAll('.trip__time-btn');
let infoTimes = document.querySelector('.trip__times');
let moreTime = document.querySelector('.trip__time-more');
let trip = document.querySelector('.trip');
let imgDesktop = document.querySelector('.trip__img--desktop');

let arr = [...times];

if (arr.length < 5){
    moreTime.classList.add('hidden');
}

moreTime.addEventListener('click',function(e){
    e.preventDefault();
    moreTime.classList.add('hidden');
    infoTimes.classList.add('overflowAuto');
    trip.classList.add('overflowAuto');
    imgDesktop.style.height = '389px';
})
