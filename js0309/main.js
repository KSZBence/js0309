window.addEventListener("load",init)

function init(){
    const LINKLIST = ["kepek/dog.jpg","kepek/masikdog.jfif","kepek/dog.jpg","kepek/masikdog.jfif","kepek/dog.jpg","kepek/masikdog.jfif"]
    const ARTICLE = document.querySelectorAll("article")
    for (let index = 0; index < LINKLIST.length; index++) {
        ARTICLE[0].innerHTML += `<img src='${LINKLIST[index]}' alt='a'>`
    }
    let kepek = document.querySelectorAll("img")
    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("click", kiir)
    }
}

function kiir(event){
    console.log(event.target.src)
    let div = document.getElementById("megjelenito")
    div.innerHTML = `<img src='${event.target.src}' alt='a'>`
}