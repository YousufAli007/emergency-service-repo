//  heard 
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
// copy 

function  copyAlert(id,alert){
            if (confirm(alert)) {
            const he = document.getElementById(id).innerText;
            navigator.clipboard.writeText(he)
               
        }
        
}

document.getElementById('emergencyNumber')
    .addEventListener('click', function() {
          copyAlert('titleNum' ,'Number copied:999')

    });

document.getElementById('policeHepline')
    .addEventListener('click', function() {
          copyAlert('titleNum' ,'Number copied:999')

    });
document.getElementById('fireServie')
    .addEventListener('click', function() {
          copyAlert('titleNum' ,'Number copied:999')

    });
document.getElementById('ambulanceService')
    .addEventListener('click', function() {
          copyAlert('ambulanceNum' ,'Number copied:1994-999999')

    });

document.getElementById('womenChild')
    .addEventListener('click', function() {
          copyAlert('womenNum' ,'Number copied:109')

    });
document.getElementById('antiHelp')
    .addEventListener('click', function() {
          copyAlert('antiNum' ,'Number copied:106')

    });
document.getElementById('electricityHelp')
    .addEventListener('click', function() {
          copyAlert('electricityNum' ,'Number copied:16216')

    });
document.getElementById('bracHelping')
    .addEventListener('click', function() {
          copyAlert('bracNum' ,'Number copied:16445')

    });
document.getElementById('railwayBD')
    .addEventListener('click', function() {
          copyAlert('railwayNum' ,'Number copied:163')

    });


    // copy-count 
    const copyQueryBtn= document.querySelectorAll('.copyQuery');
    for(const totalCopyQuery of copyQueryBtn){
        totalCopyQuery.addEventListener('click',function(){
            const copyHeard =document.getElementById('copy-count').innerText;
                const parseCopy =parseInt(copyHeard);
                const sumCopy = parseCopy + sumNumber;
            document.getElementById('copy-count').innerText=sumCopy;
        })
    }

 const minusCount = 20;

 const call= document.querySelectorAll('.emergencyCall')
  for(const allCall of call){
    allCall.addEventListener('click', function(){
          const cone =parseInt(document.getElementById('cone-count').innerText);
        if(cone <20){
            alert("You don't have any money! 20 money to call.")
            return
        }
         const min =cone -minusCount;
         document.getElementById('cone-count').innerText = min;
    })
  }


//   call History 

