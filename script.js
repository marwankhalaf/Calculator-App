// start js

let screen = document.getElementById("screen");
let equal = document.getElementById("equl");
let buttons = Array.from(document.getElementsByClassName("button")) ;

console.log(screen)
console.log(equal)
console.log(buttons)

buttons.map(button =>{
   button.addEventListener("click" , (e)=>{
         switch (e.target.innerText){
            case "C" :
            screen.value = ""
            break;
            case "←" :
            screen.value = screen.value.slice(0 , -1)
            break;
            case "=" :
            try {
               screen.value = eval(screen.value)
            }catch{
               alert("invalid")
            }
            break;
            default :
            screen.value += e.target.innerText  
         }
   })

})
