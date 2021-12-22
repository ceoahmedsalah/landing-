         // *** List of contents ***
 
// 1- Show and Hide Navbar in small screens
// 2- responsive slideshow
// 3- Show and hide collapsible lorem ipsum
// 4- Scroll to top button 
// 5- Dark Mode theme 
 
// 1- show and hide nav
let btn = document.getElementById("btn");
let navLinks = document.querySelector("#nav");
let close = document.querySelector("#close-btn");
//show nav, hide open icon, show close icon 
btn.onclick = function() {
 				navLinks.classList.add("open-nav");
 				btn.style.display = "none";
 				close.style.display = "block";
 }
 //hide nav, return open icon,hide close icon
 close.onclick = function() {
 				navLinks.classList.remove("open-nav");
 				btn.style.display = "block";
 				close.style.display = "none";
 }
 // slides 
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
     slideIndex = 1
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
 // 3- Show and hide collapsible lorem ipsum
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// 4- Scroll to top button
 const scrollBtn = document.getElementsByClassName("backTop")[0]
const isInViewport = (elem) => {
    const { top, bottom } = elem.getBoundingClientRect();
		const winHeight = window.innerHeight || document.documentElement.clientHeight;
  	return bottom >= 0 && top <= winHeight
};
const showBackToTop = () =>	window.addEventListener("scroll", () => scrollBtn.classList.toggle("backTop--active", window.scrollY > 500));
const btnTop = () => window.scrollTo({ top: 0,	behavior: "smooth" });
showBackToTop()
btnTop()


function toggleTheme(){
 if(localStorage.getItem("shala-theme") !== null){
       	  if(localStorage.getItem("shala-theme") === "dark"){
             $("body").addClass("dark");
       	  }
       	  else{
            $("body").removeClass("dark");
       	  }
       }
      updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
      $("body").toggleClass("dark");
      if($("body").hasClass("dark")){
      localStorage.setItem("shala-theme","dark");
      }
      else{
        localStorage.setItem("shala-theme","light");
      }
      updateIcon();
    });
    function updateIcon(){
       if($("body").hasClass("dark")){
         $(".toggle-theme i").removeClass("fa-moon");
         $(".toggle-theme i").addClass("fa-sun");
       }
       else{
         $(".toggle-theme i").removeClass("fa-sun");
         $(".toggle-theme i").addClass("fa-moon");
       }
    }
;

// 4- Dark Mode theme 
