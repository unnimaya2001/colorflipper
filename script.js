let color =["red","green","rgb(113,55,100)",'#f14351'];
let btn = document.querySelector('.btn');
let colour = document.querySelector('.colour');

btn.addEventListener("click", function() {
let randomNbr = random()
document.body.style.backgroundColor = color[randomNbr]
btn.style.backgroundColor = color[randomNbr]
colour.textContent = color[randomNbr]

function random(){
    return Math.floor(Math.random()*color.length)
}
})