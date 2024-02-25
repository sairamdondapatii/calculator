let buttons=document.getElementsByTagName('button');
let result=document.getElementById('result');


for(let i=0; i<buttons.length; i++){
    buttons[i].onclick=function() {
        let input=buttons[i].innerText;
        updateresult(input)
    }
    
}

function updateresult(input){
    let presentResult=result.value;
    if(presentResult=='0'){
        if(input!='C' && input!='DEL' && input!='='){
            result.value='';
            result.value=input;
        }
    }
    else{
        if(input=='DEL'){
            result.value=presentResult.substring(0,presentResult.length-1);
            if(result.value==""){
                result.value='0'
            }
        }
        if(input=='C'){
            result.value='0';
        }
        if(input!='C' && input!='DEL' && input!='='){
            result.value+=input;
        }
        if(input=="="){
            let display=result.value;
            result.value=eval(display)
           
        }
    }
}
