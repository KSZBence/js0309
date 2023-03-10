window.addEventListener("load",init)

function init(){
    const LINKLIST = ["kepek/dog.jpg","kepek/masikdog.jfif","kepek/kep3.jpg"]
    const ASIDE = document.querySelectorAll("aside")
    for (let index = 0; index < LINKLIST.length; index++) {
        ASIDE[0].innerHTML += `<div class='kiskep'><img src='${LINKLIST[index]}' alt='a'></div>`
    }
    let kepek = document.querySelectorAll("img")
    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("click", kiir)    
    }
    const bal = document.getElementsByClassName("bal")
    bal[0].addEventListener("click", function(){balra(LINKLIST.length)})
    const jobb = document.getElementsByClassName("jobb")
    jobb[0].addEventListener("click", function(){jobbra(LINKLIST)})
}

function kiir(event){
    console.log(event.target.src)
    let div = document.getElementById("nagykep")
    div.innerHTML = `<img src='${event.target.src}' alt='a'>`
}


function balra(hossz){
    const WEBLINKLIST = []
    for (let index = 0; index < hossz; index++) {
        WEBLINKLIST.push(document.querySelectorAll("aside div img")[index].src)
        
    }
    let aktualis = document.querySelectorAll("article div img")[0].src
    let i = 0 
    
    while (aktualis != WEBLINKLIST[i]) {
        i++
    }
    let div = document.getElementById("nagykep")
    if (i > 0) {
        div.innerHTML = `<img src='${WEBLINKLIST[i-1]}' alt='a'>`
    } else {
        div.innerHTML = `<img src='${WEBLINKLIST[WEBLINKLIST.length-1]}' alt='a'>`
    }   
    
}


function jobbra(LINKLIST){
    const WEBLINKLIST = []
    for (let index = 0; index < LINKLIST.length; index++) {
        WEBLINKLIST.push(document.querySelectorAll("aside div img")[index].src)
    }
    let aktualis = document.querySelectorAll("article div img")[0].src
    let i = 0 
    
    while (aktualis != WEBLINKLIST[i]) {
        i++
    }

    let div = document.getElementById("nagykep")
    if (i < WEBLINKLIST.length-1) {
        div.innerHTML = `<img src='${WEBLINKLIST[i+1]}' alt='a'>`
    } else {
        div.innerHTML = `<img src='${WEBLINKLIST[0]}' alt='a'>`
    }   
    
}