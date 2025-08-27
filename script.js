const sumNumber = 1;
const queryBtn= document.querySelectorAll('.heard-btn');


for (const query of queryBtn){

    query.addEventListener('click',function(){
    const heard =document.getElementById('heard-count').innerText;
    const parseHeard =parseInt(heard);
    const sumHeader = parseHeard + sumNumber;
    document.getElementById('heard-count').innerText=sumHeader;
         
    })
}