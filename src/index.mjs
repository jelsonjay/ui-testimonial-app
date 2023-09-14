import "./styles.css";

const btnSlide = document.querySelectorAll(".btn-slide")
const slide = document.querySelector("#slide")
let i


btnSlide[0].onclick = function(){
  slide.style.transform = "translateX(0px)"

  for(i = 0; i < 4 ; i++){
    btnSlide[i].classList.remove("active")
  }
  this.classList.add("active")
}
btnSlide[1].onclick = function(){
  slide.style.transform = "translateX(-800px)"
  for(i = 0; i < 4 ; i++){
    btnSlide[i].classList.remove("active")
  }
  this.classList.add("active")
}
btnSlide[2].onclick = function(){
  slide.style.transform = "translateX(-1600px)"
  for(i = 0; i < 4 ; i++){
    btnSlide[i].classList.remove("active")
  }
  this.classList.add("active")
}
btnSlide[3].onclick = function(){
  slide.style.transform = "translateX(-2400px)"
  for(i = 0; i < 4 ; i++){
    btnSlide[i].classList.remove("active")
  }
  this.classList.add("active")
}
