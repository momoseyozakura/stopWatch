/*global $*/
$(function(){
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  
  let startTime;
  let timerId;
  let elapsedTime=0;
  let timeToAdd=0;
  
 function updateTimeText() {
   var h = Math.floor(elapsedTime/3600000);
   var m = Math.floor(elapsedTime%3600000/60000);
   var s = Math.floor(elapsedTime%60000/1000);
   var ms = elapsedTime%1000;
   
   h = ("0"+ h).slice(-2);
   m = ("0"+ m).slice(-2);
   s = ("0"+ s).slice(-2);
   ms = ("0"+ ms).slice(-2);
   
   timer.textContent = h + ":" + m + ":" + s + ":" + ms;
 }
 
 function countUp(){
   timerId=setInterval(function(){
     elapsedTime=Date.now()-startTime+timeToAdd;
     updateTimeText();
     
   },10);
 }
start.addEventListener("click",function(){
  startTime=Date.now();
  countUp();
})

stop.addEventListener("click",function(){
 clearInterval(timerId);
 timeToAdd+=Date.now()-startTime;
})

reset.addEventListener("click",function(){
  elapsedTime=0;
  updateTimeText();
  timeToAdd=0
})
$(start).click(function(){
  start.disabled=true;
  stop.disabled=false;
});
$(stop).click(function(){
  start.disabled=false;
  stop.disabled=true;
  reset.disabled=false;
});
$(reset).click(function(){
  start.disabled=false;
  stop.disabled=true;
  reset.disabled=true;
});
  });