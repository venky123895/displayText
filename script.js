const inpText=document.getElementById('text');
const disp=document.getElementById('displayText');
inpText.addEventListener('keydown',function(){
    disp.innerText=inpText.value;
});
