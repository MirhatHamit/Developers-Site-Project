const menuBtn=document.querySelector('.menu-toggle')
console.log(menuBtn)
const menuSide=document.querySelector('.sidebar')
console.log(menuSide)
menuBtn.addEventListener('click',()=>{
menuSide.classList.toggle('open')
})