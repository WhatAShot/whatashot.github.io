const config = window.RESEARCH_CONFIG || {aiMethods:[], biomedicalAreas:[]};
const pageLang = window.PAGE_LANG || new URLSearchParams(window.location.search).get("lang") || "en";
const zh = pageLang === "zh";

const colorClasses = ["multimodal","generative","tabular","algorithms"];
const research = document.getElementById("research");
if (research) {
  research.innerHTML = config.aiMethods.map((m,i)=>`
    <section class="research-box ${colorClasses[i] || "multimodal"}">
      <h3 class="title is-4">${zh && m.titleZh ? m.titleZh : m.title}</h3>
      <p>${zh && m.summaryZh ? m.summaryZh : m.summary}</p>
      <div class="tags research-tags">
        ${((zh && m.tagsZh) ? m.tagsZh : (m.tags || [])).map(t=>`<span class="tag">${t}</span>`).join("")}
      </div>
    </section>`
  ).join("");
}

const biomedical = document.getElementById("biomedical-grid");
if (biomedical) {
  biomedical.innerHTML = config.biomedicalAreas.map((a,i)=>`
    <div class="application-node">
      <span class="application-dot" aria-hidden="true"></span>
      <div class="application-index">0${i+1}</div>
      <h3>${zh && a.titleZh ? a.titleZh : a.title}</h3>
      <p>${zh && a.subtitleZh ? a.subtitleZh : a.subtitle}</p>
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
