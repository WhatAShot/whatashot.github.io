const A = window.ACADEMIC || {};
function rows(items, kind){
  return (items || []).map(x => {
    if(kind==="talk"){
      return `<div class="academic-row"><span class="academic-date">${x[0]}</span><div><strong>${x[1]}</strong><small>${x[2]}</small></div></div>`;
    }
    if(kind==="teaching"){
      return `<div class="academic-row"><span class="academic-date">${x[0]}</span><div><strong>${x[1]}</strong><small>${x[2]}</small></div></div>`;
    }
    return `<div class="academic-row"><span class="academic-date">${x[0]}</span><div><strong>${x[1]}</strong></div></div>`;
  }).join("");
}
document.getElementById("honors").innerHTML = rows(A.honors);
document.getElementById("teaching").innerHTML = rows(A.teaching,"teaching");
document.getElementById("talks").innerHTML = rows(A.talks,"talk");
document.getElementById("services").innerHTML = (A.services || []).map(x => `<div class="service-item">${x}</div>`).join("");
document.getElementById("year").textContent = new Date().getFullYear();