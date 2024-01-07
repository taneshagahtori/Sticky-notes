let startbox=document.getElementsByClassName('startbox')[0];
let notes=document.getElementsByClassName('notes')[0];
let input=document.getElementById('userinput');
let i=0;

startbox.addEventListener('keydown', content);

document.getElementById("start").addEventListener("click", function(){
    startbox.style.display="block";
});
 
function content(e){
    if(e.keyCode=='13'){
        divStyle(input.value);
        input.value="";
        startbox.style.display="none";
    }
}

function color(){

    let randomColors = ["#ebb328", "#04e022", "#ff3de8", "#c2ff3d", "#bc83e6"];
    if(i > randomColors.length - 1){
        i = 0;
    }
    return randomColors[i++];
}

function divStyle(text){
    let div=document.createElement("div");
    div.className='note';
    div.innerHTML='<div class="details">'+'<h3>'+text+'<h3>'+'</div>';
    div.addEventListener("dblclick", function(){
        div.remove();
    });
    div.setAttribute('style','background:'+ color()+'');
    notes.appendChild(div);
}


