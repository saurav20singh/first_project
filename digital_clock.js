const clock=document.querySelector("h1");
function showTime(){
    var d= new Date();
    var h= d.getHours();
    var m=d.getMinutes();
    var s= d.getSeconds();
    var session="AM"
  
   if(h>12){
    h=h-12;
   }
   if(h>=12){
    session= PM;
   }
     var session="AM"
   h=h<10 ? "0"+h:h;
   m=m<10?"0"+m:m;
   s=s<10? "0"+s : s;

    var time=h+":"+m+":"+s+" "+session;
    clock.innerText=time;
    setTimeout(showTime,1000);
}