function join(){
alert("💪 Welcome to Elite Gym - Start Transformation!");
}

/* loader */
window.onload = ()=>{
document.getElementById("loader").style.display="none";
}

/* scroll reveal */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("show");
}
});
});
