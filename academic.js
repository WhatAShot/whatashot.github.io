const A=window.ACADEMIC||{};
const zh=(window.PAGE_LANG||"en")==="zh";
function rows(items){
 return (items||[]).map(x=>`<div class="academic-row"><span class="academic-date">${x[0]}</span><div><strong>${x[1]}</strong>${x[2]?`<small>${x[2]}</small>`:""}</div></div>`).join("");
}
document.getElementById("honors").innerHTML=rows(zh?A.honorsZh:A.honors);
document.getElementById("teaching").innerHTML=rows(zh?A.teachingZh:A.teaching);
document.getElementById("talks").innerHTML=rows(zh?A.talksZh:A.talks);
document.getElementById("services").innerHTML=((zh?A.servicesZh:A.services)||[]).map(x=>`<div class="service-item">${x}</div>`).join("");
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{el.classList.toggle("is-active");document.getElementById(el.dataset.target)?.classList.toggle("is-active")});
document.getElementById("year").textContent=new Date().getFullYear();