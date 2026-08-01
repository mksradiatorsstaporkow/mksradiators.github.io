function addNews(){

let title = document.getElementById("newsTitle").value;

let date = document.getElementById("newsDate").value;

let text = document.getElementById("newsText").value;


if(title=="" || date=="" || text==""){

alert("Uzupełnij wszystkie pola!");

return;

}


let news = JSON.parse(localStorage.getItem("news")) || [];


news.push({

title:title,

date:date,

text:text

});


localStorage.setItem("news",JSON.stringify(news));


document.getElementById("newsTitle").value="";

document.getElementById("newsDate").value="";

document.getElementById("newsText").value="";


showNews();


}



function showNews(){


let news = JSON.parse(localStorage.getItem("news")) || [];


let box=document.getElementById("newsList");


if(news.length===0){

box.innerHTML="Brak aktualności";

return;

}



box.innerHTML="";



news.reverse().forEach(n=>{


box.innerHTML+=`

<div class="saved-news">

<h3>${n.title}</h3>

<span>${n.date}</span>

<p>${n.text}</p>

</div>

`;


});


}



showNews();
