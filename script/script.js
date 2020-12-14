let btns=document.querySelectorAll('.btn'),
    screen=document.querySelector('#screen');

let sch=0;

let backspace=function(){
    return screen.innerText.slice(0,-1);
}

for(let btn of btns){
    btn.addEventListener('click',function(){
        switch(btn.id){
            case "enter":
                screen.innerText+='\n';
                break;
            case "backspace":
                screen.innerText=backspace();
                break;
            case "none":
                screen.innerText+='';
                break;
            case "caps":
                    sch+=1;
                    console.log(sch);
                break;    
            default:
                if(sch%2!=0){
                    screen.innerText+=btn.firstElementChild.innerText.toUpperCase();
                }else{
                    screen.innerText+=btn.firstElementChild.innerText.toLowerCase();
                }
                break;
       }
    });
}