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
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", ()=>{

nav.classList.toggle("active");

});


document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click", ()=>{

nav.classList.remove("active");

});

});
