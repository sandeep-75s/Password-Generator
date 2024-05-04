var upper = document.querySelector('.uppercase');
var lower = document.querySelector('.lowercase');
var number1 = document.querySelector('.number');
var symbol = document.querySelector('.symbol');
var rangeInput = document.querySelector('.rangeinput');
let number= document.querySelector('.pass-no');
let textpassword ="";
var value1=4;
var pass = document.querySelector('.h2pass');
let passcolor = document.querySelector('.pass-color')
let finalbtn= document.querySelector('.finalbtn');
var type = document.querySelector('.pass-type');
rangeInput.addEventListener('input',rangeinput);
function rangeinput(){
        value1 = rangeInput.value;
        number.textContent=value1;
        setColor(value1);
        handlSlider();
        
}
function handlSlider(){
    var password3 = rangeInput.value;
    const min = rangeInput.min;
    const max = rangeInput.max;
    // rangeInput.style.backgroundSize = 50%;///////   // rangeInput.style.backgroundSize=(((rangeInput.value)-min)*100/(max-min+100))+ "% 100%";
    // rangeInput.setAttribute("style","backgroundColor:black")
    

}
function copyClick() {
    var copy = pass.innerText;
    if(copy=='Password'){
        alert('Generate the password')
    }
    else{
        navigator.clipboard.writeText(pass.innerText);
        alert("Copied text "+pass.innerText);
    }
}

function generate(str,value) {
    for (let i = 0; i <value; i++) {
        var char = Math.floor(Math.random() * (str.length - 1 + 1)) + 1;
        // * str.length + 1);
        
        textpassword+= str.charAt(char)
    }
    pass.textContent=textpassword;
}

function setColor(value){
    if(value<=4){
        passcolor.setAttribute("style","background-color:red");
        type.textContent='Low';
    }
    else if(value>3 && value<=8){
        passcolor.setAttribute("style","box-shadow: 0px 0px 30px yellow");
        passcolor.setAttribute("style","background-color:yellow");
        type.textContent='Medium';
    }
    else{
        passcolor.setAttribute("style","box-shadow: 0px 0px 30px green");
        passcolor.setAttribute("style","background-color:green");
        type.textContent='Strong';
    }
    
}

function Upper(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
    generate(str,value);
}
function Lower(value){
    var str = 'abcdefghijklmnopqrstuvwxyz';
    generate(str.toLowerCase(),value);
}
function Number(value){
    var str = '1234567890';
    generate(str,value);
}
function Symbol(value){
    var str = '!@#$%^&*()_+=-[]{};:\|<,>.?/';
    generate(str,value);
}
function UpperLower(value){
    var str = 'aABbCcDDeEFGHIJKLMNOPQRSTUVWXYZfghijklmnopqrstuvwxyz';
    generate(str,value);
}
function UpperNumber(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'1234567890';
    generate(str,value);
}
function UpperSymbol(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}[]:;|\<>,.?/';
    generate(str,value);
}
function LowerNumber(value){
    var str = 'abcdefghijklmnopqrstuvwxyz1234567890';
    generate(str,value);
}
function NumberSymbol(value){
    var str = '!@#$%^&*()_+-={}[]:;|\<>?/.,1234567890';
    generate(str,value);
}
function LowerSymbol(value){
    var str = '!@#$%^&*()_+-={}[]:;|\<>?/.,abcdefghijklmnopqrstuvwxyz';
    generate(str,value);
}
function UpperLowerNumber(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
    generate(str,value);
}
function UpperNumberSymbol(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-{}[]:|;\<>?/.,1234567890';
    generate(str,value);
}
function UpperLowerSymbol(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-{}[]:|;\<>?/.,abcdefghijklmnopqrstuvwxyz';
    generate(str,value);
}
function LowerNumberSymbol(value){
    var str = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-{}[]:|;\<>?/.,1234567890';
    generate(str,value);
}
function UpperLowerNumberSymbol(value){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-{}[]:|;\<>?/.,1234567890';
    generate(str,value);
}
function displaypass() {
    if(value1>0&&upper.checked==true&& lower.checked==false && number1.checked==false && symbol.checked==false){
        Upper(rangeInput.value);
        textpassword="";
    }else if(value1>0&&number1.checked==false&&upper.checked==false && lower.checked==true&&symbol.checked==false){
        Lower(value1);
        textpassword="";
    }
    else if(value1>0&&number1.checked==true&&upper.checked==false && lower.checked==false&&symbol.checked==false){
        Number(value1);
        textpassword="";
    }
    else if(value1>0&&symbol.checked==true&&upper.checked==false && lower.checked==false&&number1.checked==false){
        Symbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==true && number1.checked==false && symbol.checked==false){
        UpperLower(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==false && number1.checked==true && symbol.checked==false){
        UpperNumber(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==false && number1.checked==false && symbol.checked==true){
        UpperSymbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==false && lower.checked==true && number1.checked==true && symbol.checked==false){
        LowerNumber(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==false && lower.checked==false && number1.checked==true && symbol.checked==true){
        NumberSymbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==false && lower.checked==true && number1.checked==false && symbol.checked==true){
        LowerSymbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==true && number1.checked==true && symbol.checked==false){
        UpperLowerNumber(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==false && number1.checked==true && symbol.checked==true){
        UpperNumberSymbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==false && lower.checked==true && number1.checked==true && symbol.checked==true){
        LowerNumberSymbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==true && number1.checked==true && symbol.checked==true){
        UpperLowerNumberSymbol(value1);
        textpassword="";
    }
    else if(value1>0 && upper.checked==true && lower.checked==true && number1.checked==false && symbol.checked==true){
        UpperLowerNumberSymbol(value1);
        textpassword="";
    }
       
    else{
        alert("Empty")
    }
}
finalbtn.addEventListener('click',displaypass);