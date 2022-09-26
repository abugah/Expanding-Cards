const sections=document.querySelectorAll('.section');
sections.forEach(function(section){
    section.addEventListener('click',()=>{
        removeActiveClasses();
        section.classList.add('active');
    })
})
function removeActiveClasses(){
    sections.forEach(section => {
        section.classList.remove('active');
    })
}