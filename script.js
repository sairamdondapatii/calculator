let buttons=document.getElementsByTagName('button');
let result=document.getElementById('result');


for(let i=0; i<buttons.length; i++){
    buttons[i].onclick=function() {
        let input=buttons[i].innerText;
        updateresult(input)
    }
    
}

function updateresult(input){
    let presentResult=result.innerText;
    if(presentResult=='0'){
        if(input!='C' && input!='DEL' && input!='='){
            result.innerText='';
            result.innerText=input;
        }
    }
    else{
        if(input=='DEL'){
            result.innerText=presentResult.substring(0,presentResult.length-1);
            if(result.innerText==""){
                result.innerText='0'
            }
        }
        if(input=='C'){
            result.innerText='0';
        }
        if(input!='C' && input!='DEL' && input!='='){
            result.innerText+=input;
        }
        if(input=="="){
            let display=result.innerText;
            result.innerText=eval(display)
           
        }
    }
}
