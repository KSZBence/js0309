window.addEventListener("load",init)

function init(){
    const articlelist = document.querySelectorAll("article")
    articlelist[0].innerHTML = "<div><img src='kepek/dog.jpg' alt='a'></div>"
    articlelist[0].innerHTML += "<button>ok</button>"
    const button = document.querySelectorAll("button")
    const divlist = document.querySelectorAll("article div");
    button[0].addEventListener("click", formaz)    
    divlist[0].addEventListener("mouseenter", formaz2)
}

function formaz(){
    const divlist = document.querySelectorAll("article div");
    divlist[0].classList.add("formazas")
}

function formaz2(){
    const artlist = document.getElementsByClassName(".hatter")
    artlist[0].classList.add("hatter")
}