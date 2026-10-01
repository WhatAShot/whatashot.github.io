const A=window.ACADEMIC||{};
const zh=(window.PAGE_LANG||"en")==="zh";
function rows(items){
 return (items||[]).map(x=>`<div class="academic-row"><span class="academic-date">${x[0]}</span><div><strong>${x[1]}</strong>${x[2]?`<small>${x[2]}</small>`:""}</div></div>`).join("");
}
document.getElementById("honors").innerHTML=rows(zh?A.honorsZh:A.honors);
function teachingTable(items){
 const courses=(items||[]).map(([course,terms])=>`<tr><th scope="row">${course}</th><td>${terms}</td></tr>`).join("");
 return `<table class="teaching-table"><thead><tr><th scope="col">${zh?"课程":"Course"}</th><th scope="col">${zh?"开课时间":"Terms Offered"}</th></tr></thead><tbody>${courses}</tbody></table>`;
}
document.getElementById("teaching").innerHTML=teachingTable(zh?A.teachingZh:A.teaching);
document.getElementById("talks").innerHTML=rows(zh?A.talksZh:A.talks);
document.getElementById("services").innerHTML=((zh?A.servicesZh:A.services)||[]).map(x=>`<div class="service-item">${x}</div>`).join("");
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{el.classList.toggle("is-active");document.getElementById(el.dataset.target)?.classList.toggle("is-active")});
document.getElementById("year").textContent=new Date().getFullYear();