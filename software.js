if(window.PAGE_LANG==="zh") document.title="软件 | Jintai Chen";
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{
 const active=el.classList.toggle("is-active");
 document.getElementById(el.dataset.target)?.classList.toggle("is-active",active);
 el.setAttribute("aria-expanded",String(active));
});
document.getElementById("year").textContent=new Date().getFullYear();
