let btns=document.querySelectorAll('.btn');
let letter=document.querySelectorAll('.btn span');
let screen=document.querySelector('#screen');
let backspace=function(){
   screen.innerText.pop();
}


for(let btn of btns){
    btn.addEventListener('click',function(){
        switch(btn.id){
            case "enter":
                screen.innerText+='enter';
                break;
            case "space":
                screen.innerText+='space';
                break;
            case "backspace":
                function{
                    screen.innerText.pop();
                 }
                break;
            default:
                screen.innerText+=btn.firstElementChild.innerText.toLowerCase();
                break;
                
       }
        // screen.innerText+=btn.firstElementChild.innerText.toLowerCase();
    });
}



console.log(btns);
// screen.innerText=letter[0].innerText;
// console.log(letter[0].innerText);