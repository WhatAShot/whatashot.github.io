const config = window.RESEARCH_CONFIG || {aiMethods:[], biomedicalAreas:[]};

const colorClasses = ["multimodal","generative","tabular"];
const research = document.getElementById("research");
if (research) {
  research.innerHTML = config.aiMethods.map((m,i)=>`
    <section class="research-box ${colorClasses[i] || "multimodal"}">
      <h3 class="title is-4">${m.title}</h3>
      <p>${m.summary}</p>
      <div class="tags research-tags">
        ${(m.tags || []).map(t=>`<span class="tag">${t}</span>`).join("")}
      </div>
    </section>`
  ).join("");
}

const biomedical = document.getElementById("biomedical-grid");
if (biomedical) {
  biomedical.innerHTML = config.biomedicalAreas.map(a=>`
    <div class="column">
      <div class="bio-item">
        <h3>${a.title}</h3>
        <p>${a.subtitle}</p>
      </div>
    </div>`
  ).join("");
}

document.querySelectorAll(".navbar-burger").forEach(el=>{
  el.addEventListener("click", ()=>{
    const target=document.getElementById(el.dataset.target);
    el.classList.toggle("is-active");
    target?.classList.toggle("is-active");
  });
});
const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();
