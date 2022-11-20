const inpText=document.getElementById('text');
const disp=document.getElementById('displayText');
inpText.addEventListener('keyup',function(){
    disp.innerText=inpText.value;
});
