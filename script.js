/*let key = "2b196b27e1b54405a8d06c233f16a7b5";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");
const getData = async(input) => {
  let res = await fetch (`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData = await res.json();
  console.log(jsonData);
  cardData.innerHTML="";
  jsonData.articles.forEach(article => {
    console.log(article);
    let divs = document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);
  searchType.innerHTML="Search:"+input;
 divs.innerHTML=`
 <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        `

    divs.addEventListener("click",function(){
      window.open(article.url);
    })
  })*/
/*
  /* let divs = document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);
 divs.innerHTML=`
 <img src="${jsonData.articles[0].urlToImage}" alt="">
        <h3>${jsonData.articles[0].title}</h3>
        <p>${jsonData.articles[0].description}</p>
        ` */
*
/*}
window.addEventListener("load", function(){
  getData('india');
})
SearchBtn.addEventListener("click", function(){
let inputText = inputData.value;
getData(inputText);
})
function navClick(navName){
  if(navName =="politics"){
    document.getElementById("politics").style.color="rgb(0,140,255)"
    document.getElementById("sports").style.color="white"
    document.getElementById("technology").style.color="white"
  }
  if(navName =="sports"){
    document.getElementById("politics").style.color="white"
    document.getElementById("sports").style.color="rgb(0,140,255)"
    document.getElementById("technology").style.color="white"
  }
  if(navName =="technology"){
    document.getElementById("politics").style.color="white"
    document.getElementById("sports").style.color="white"
    document.getElementById("technology").style.color="rgb(0,140,255)"
  }
 getData(navName); 
}
let key = "2b196b27e1b54405a8d06c233f16a7b5";
//let key = "pub_57902dc1a752472dcd4c325b9f7058625dfa4";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");
/*const getData = async(input) => {
  let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData = await res.json();
  console.log(jsonData.articles);
  cardData.innerHTML="";
  jsonData.articles.forEach(function(article){
    console.log(article);
    let divs = document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);
  searchType.innerHTML="Search:"+input;
 divs.innerHTML=`
 <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        `

    divs.addEventListener("click",function(){
      window.open(article.url);
    })
  })
  /*let divs = document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);
 divs.innerHTML=`
 <img src="${jsonData.articles[0].urlToImage}" alt="">
        <h3>${jsonData.articles[0].title}</h3>
        <p>${jsonData.articles[0].description}</p>
        `*/

      
        
        const getData = async (input) => {
          try {
            let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
            let jsonData = await res.json();
        
            if (jsonData.articles && jsonData.articles.length > 0) {
              cardData.innerHTML = "";
              jsonData.articles.forEach(function (article) {
                let divs = document.createElement("div");
                divs.classList.add("card");
                cardData.appendChild(divs);
                searchType.innerHTML = "Search: " + input;
                divs.innerHTML = `
                  <img src="${article.urlToImage}" alt="">
                  <h3>${article.title}</h3>
                  <p>${article.description}</p>
                `;
        
                divs.addEventListener("click", function () {
                  window.open(article.url);
                });
              });
            } else {
              cardData.innerHTML = "<p>No articles found for your search.</p>";
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            cardData.innerHTML = "<p>An error occurred while fetching articles. Please try again later.</p>";
          }
        };
        
        // ... (rest of your code)

window.addEventListener("load", function(){
  getData('india');
})
SearchBtn.addEventListener("click", function(){
let inputText = inputData.value;
getData(inputText);
})
function navClick(navName){
  if(navName =="politics"){
    document.getElementById("politics").style.color="rgb(0,140,255)"
    document.getElementById("sports").style.color="white"
    document.getElementById("technology").style.color="white"
  }
  if(navName =="sports"){
    document.getElementById("politics").style.color="white"
    document.getElementById("sports").style.color="rgb(0,140,255)"
    document.getElementById("technology").style.color="white"
  }
  if(navName =="technology"){
    document.getElementById("politics").style.color="white"
    document.getElementById("sports").style.color="white"
    document.getElementById("technology").style.color="rgb(0,140,255)"
  }
 getData(navName); 
}
