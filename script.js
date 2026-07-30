const matchDate = new Date("August 8, 2026 17:00:00").getTime();


const timer = setInterval(function(){


const now = new Date().getTime();


const distance = matchDate - now;



const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));


const seconds = Math.floor((distance % (1000 * 60)) / 1000);



document.getElementById("countdown").innerHTML =

"⏳ Do meczu pozostało: " +

days + " dni " +

hours + " godz. " +

minutes + " min. " +

seconds + " sek.";



if(distance < 0){

clearInterval(timer);

document.getElementById("countdown").innerHTML =
"Mecz trwa lub już się odbył ⚽";

}


},1000);
