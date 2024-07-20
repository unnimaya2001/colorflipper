let hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

let btn = document.querySelector('.btn');
let colour = document.querySelector('.colour');

btn.addEventListener("click", function() {
   
   let per ='#';
   for (i=0;i<6;i++){
    let randomNbr = random();
    per += hex[randomNbr]
    
   }

   document.body.style.backgroundColor=per
   colour.textContent=per;
   btn.style.backgroundColor=per
   
    function random(){
        return Math.floor(Math.random()*hex.length)
    }

    })