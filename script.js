console.log("script running...")
document.querySelector('.close').style.display = 'none';
document.querySelector('.navcontrol').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.list').style.display='inline'
        document.querySelector('.close').style.display='none'
    }
    else{
        document.querySelector('.list').style.display='none'
        setTimeout(() => {
            document.querySelector('.close').style.display='inline'
        }, 400);
            
        
    }  
        

})
