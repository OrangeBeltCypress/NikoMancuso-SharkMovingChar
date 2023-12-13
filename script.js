const objimage = document.querySelector(".char")

const speed = 15;

window.addEventListener('load',()=>{
    objimage.style.position = 'absolute';
    objimage.style.left = 0;
    objimage.style.top = 0;
})



window.addEventListener('keydown',(e)=>{
switch(e.key){
    case 'ArrowLeft':
        objimage.style.left = parseInt(objimage.style.left) - speed +"px";
        break;
    case 'ArrowRight':
        objimage.style.left = parseInt(objimage.style.left) + speed +"px";
        break;
    case 'ArrowDown':
        objimage.style.top = parseInt(objimage.style.top) + speed +"px";
            break;
    case 'ArrowUp':
        objimage.style.top = parseInt(objimage.style.top) - speed +"px";
        break;
        

}
})
















