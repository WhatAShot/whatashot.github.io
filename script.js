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
  biomedical.innerHTML = config.biomedicalAreas.map(a=>`
    <div class="application-item">
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


/* Reveal the visitor counter only after Busuanzi returns the live site PV. */
const visitorContainer = document.getElementById("busuanzi_container_site_pv");
const rawSitePv = document.getElementById("busuanzi_value_site_pv");
const totalSitePv = document.getElementById("visitor_total_site_pv");

if (visitorContainer && rawSitePv && totalSitePv) {
  const revealVisitorCount = () => {
    const raw = Number.parseInt((rawSitePv.textContent || "").replace(/,/g, ""), 10);
    if (!Number.isFinite(raw) || raw <= 0) return false;

    totalSitePv.textContent = raw.toLocaleString("en-US");
    visitorContainer.classList.remove("visitor-count-loading");
    return true;
  };

  if (!revealVisitorCount()) {
    const observer = new MutationObserver(() => {
      if (revealVisitorCount()) observer.disconnect();
    });
    observer.observe(rawSitePv, { childList: true, subtree: true, characterData: true });
  }
}
