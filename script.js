let digitalElement = document.querySelector(".digital");
let dia = document.querySelector(".dia")
let hElement= document.querySelector('.p_h')
let mElement= document.querySelector('.p_m')
let sElement= document.querySelector('.p_s')

function updateClock() {
  
  now = new Date();
  day = now.getDate();
  year = now.getFullYear();
  month = now.getMonth();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

    digitalElement.innerHTML = `${fixClock(hours)} : ${fixClock(minutes)} : ${fixClock(seconds)}`;
     sDeg = (360/60 *seconds-90);
     mDeg = (360/60 *minutes-90);
     hDeg = (360/12 *hours-90);//da 2 volta de 12 horas
      
    sElement.style.transform = `rotate(${seconds}deg)`
    mElement.style.transform = `rotate(${minutes}deg)`
    hElement.style.transform = `rotate(${hours}deg)`
    dia.innerHTML = `${day}/${month}/${year}`
   
}

function fixClock(time){
    // if(time < 10){
    //     return '0'+time;
    // }else{
    //     return time;
    // }
    return time < 10 ? `0${time}` : time;

}
setInterval(updateClock, 1000);
updateClock();
