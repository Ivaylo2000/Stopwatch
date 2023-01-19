let start = document.querySelector('.start');
let stopp = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let seconds = document.querySelector('.seconds'); 
let tenss = document.querySelector('.tenss'); 
let h2=document.querySelector('h2');
let timer;

let targetTime=0;



start.addEventListener('click', ()=>{
  reset.setAttribute('disabled','');
  stopp.removeAttribute('disabled');
  let min = Math.ceil(5);
  let max = Math.ceil(10);
  targetTime = Math.floor(Math.random()*(max-min)+min);
  h2.innerHTML = `Stop at ${targetTime}:00 seconds`;
  console.log(targetTime);
  let tens=0;
  let sec=0;
  timer=setInterval(() => {
    
    tenss.innerHTML = tens;
    if(tens>99){
      sec++;
      seconds.innerHTML=sec;
      tens=0;
    }
    tens++;
    start.setAttribute('disabled','')
  }, 10);
  
});



stopp.addEventListener('click', ()=>{
  
clearInterval(timer)
if(seconds.innerHTML==targetTime && tenss.innerHTML==00){
  h2.innerHTML= 'You win';
}
else{
  h2.innerHTML= 'You lost';
}
reset.removeAttribute('disabled');
})



reset.addEventListener('click', ()=>{
  
  tenss.innerHTML = '00';
  seconds.innerHTML='00';
  h2.innerHTML= 'Stop at ';
  stopp.setAttribute('disabled','');
  start.removeAttribute('disabled');

})