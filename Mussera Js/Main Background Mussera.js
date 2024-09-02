let pictures = ["Mussera Photo/Mussera1.1.png", "Mussera Photo/Mussera2.1.png", "Mussera Photo/Mussera3.1.png"]
// let titles = ["Рай на море", "Бар в облаках", "Пляж 1200 метров"]
function random(pictures){
    let background = Math.round(Math.random() * pictures.length)
    return pictures[background]
}
function randomTitles(titles){
    Math.round(Math.random() * titles.length)
    return titles
}
function addbackground(){
    let element = document.querySelector("#main_random_background")
    let img = random(pictures) 
    element.style.backgroundImage = `url("${img}")`
}
setInterval(addbackground, 2500)



let header = document.querySelector("#header")
window.addEventListener("scroll", (event)=>{
    if(pageYOffset >= 750){
        header.classList.add("Header_headerBg")
    } else{
        header.classList.remove("Header_headerBg")
    }
})