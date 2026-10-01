const A=window.ACADEMIC||{};
function rows(items,mode){
 return (items||[]).map(x=>`<div class="academic-row"><span class="academic-date">${x[0]}</span><div><strong>${x[1]}</strong>${x[2]?`<small>${x[2]}</small>`:""}</div></div>`).join("");
}
document.getElementById("honors").innerHTML=rows(A.honors);
document.getElementById("teaching").innerHTML=rows(A.teaching);
document.getElementById("talks").innerHTML=rows(A.talks);
document.getElementById("services").innerHTML=(A.services||[]).map(x=>`<div class="service-item">${x}</div>`).join("");
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{el.classList.toggle("is-active");document.getElementById(el.dataset.target)?.classList.toggle("is-active")});
document.getElementById("year").textContent=new Date().getFullYear();