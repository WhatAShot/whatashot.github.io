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


/* Preserve the historical visitor count from the original whatashot.github.io homepage. */
const LEGACY_SITE_PV_BASELINE = 1057151;
const rawSitePv = document.getElementById("busuanzi_value_site_pv");
const totalSitePv = document.getElementById("visitor_total_site_pv");
if (rawSitePv && totalSitePv) {
  const previewHosts = new Set(["raw.githack.com", "localhost", "127.0.0.1"]);
  const hostname = window.location.hostname.toLowerCase();

  const syncVisitorCount = () => {
    const raw = Number.parseInt((rawSitePv.textContent || "").replace(/,/g, ""), 10);
    let total = LEGACY_SITE_PV_BASELINE;

    if (Number.isFinite(raw) && raw > 0) {
      if (hostname === "whatashot.github.io") {
        // Busuanzi site_pv is host-based, so the official host already includes legacy traffic.
        total = Math.max(raw, LEGACY_SITE_PV_BASELINE);
      } else if (!previewHosts.has(hostname)) {
        // If the site later moves to a new production domain, carry the legacy baseline forward.
        total = LEGACY_SITE_PV_BASELINE + raw;
      }
    }

    totalSitePv.textContent = total.toLocaleString("en-US");
  };

  syncVisitorCount();
  const visitorTimer = window.setInterval(syncVisitorCount, 250);
  window.setTimeout(() => window.clearInterval(visitorTimer), 10000);
}
