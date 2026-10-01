const pubs=(window.PUBLICATIONS||[]).slice().sort((a,b)=>b.year-a.year||(b.priority||0)-(a.priority||0)||a.title.localeCompare(b.title));
const allKey="All";
const preferredTags=["Multimodal AI","Generative AI","Tabular AI","Learning Algorithms","Drug Design","Clinical Trial Optimization","Clinical Decision Support"];
const observedTags=Array.from(new Set(pubs.flatMap(p=>p.tags||[])));
const allTags=[allKey,...preferredTags.filter(t=>observedTags.includes(t)),...observedTags.filter(t=>!preferredTags.includes(t))];
let current=allKey;
const uiLang=window.PAGE_LANG||"en";
const filterBar=document.getElementById("filter-bar");
const list=document.getElementById("publication-list");

const zhLabel={
  "All":"全部",
  "Multimodal AI":"多模态 AI",
  "Generative AI":"生成式 AI",
  "Tabular AI":"表格数据 AI",
  "Learning Algorithms":"学习算法",
  "Drug Design":"药物设计",
  "Clinical Trial Optimization":"临床试验优化",
  "Clinical Decision Support":"临床决策支持",
  "Preprint":"预印本"
};
const ui=(en,zh)=>uiLang==="zh"?zh:en;
const displayLabel=x=>uiLang==="zh"?(zhLabel[x]||x):x;

function renderFilters(){
  filterBar.innerHTML=allTags.map(t=>`<button class="button ${t===current?"is-selected":""}" data-tag="${t}">${displayLabel(t)}</button>`).join("");
  filterBar.querySelectorAll("button").forEach(b=>b.onclick=()=>{current=b.dataset.tag;renderFilters();renderPubs();});
}
function authorHtml(p){
  const cf=new Set(p.coFirstAuthors||[]);
  const ca=new Set(p.correspondingAuthors||[]);
  return p.authors.split(", ").map(name=>{
    const mark=`${cf.has(name)?"†":""}${ca.has(name)?"*":""}`;
    const core=(name==="Jintai Chen"||name==="陈晋泰")?`<strong>${name}</strong>`:name;
    return `${core}${mark?`<sup>${mark}</sup>`:""}`;
  }).join(", ");
}
function renderPubs(){
  const rows=current===allKey?pubs:pubs.filter(p=>(p.tags||[]).includes(current));
  list.innerHTML=rows.map(p=>{
    const isPdf=/\/pdf\/|\.pdf(?:$|\?)/i.test(p.paper||"");
    const codeDataSame=p.code&&p.data&&p.code===p.data;
    const links=[
      p.paper&&`<a href="${p.paper}" target="_blank">${isPdf?ui("PDF","PDF"):ui("Paper","论文")} ↗</a>`,
      p.homepage&&`<a href="${p.homepage}" target="_blank">${ui("Homepage","主页")} ↗</a>`,
      codeDataSame&&`<a href="${p.code}" target="_blank">${ui("Code & Data","代码与数据")} ↗</a>`,
      !codeDataSame&&p.code&&`<a href="${p.code}" target="_blank">${ui("Code","代码")} ↗</a>`,
      !codeDataSame&&p.data&&`<a href="${p.data}" target="_blank">${ui(p.dataLabel||"Data",p.dataLabelZh||"数据")} ↗</a>`,
      p.pythonPackage&&`<a href="${p.pythonPackage}" target="_blank">${ui("Python Package","Python 包")} ↗</a>`,
      p.rPackage&&`<a href="${p.rPackage}" target="_blank">${ui("R Package","R 包")} ↗</a>`
    ].filter(Boolean).join("");
    const badge=uiLang==="zh"?(p.badgeZh||(((p.badge||p.venue)==="Preprint")?"预印本":(p.badge||p.venue))):(p.badge||p.venue);
    return `
      <article class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${authorHtml(p)}</div>
          <div class="pub-bottom">
            <div><span class="tag venue-tag">${badge}</span></div>
            <div class="pub-tags">${(p.tags||[]).map(t=>`<span class="tag">${displayLabel(t)}</span>`).join("")}</div>
          </div>
          <div class="pub-links">${links}</div>
        </div>
      </article>`;
  }).join("");
}
renderFilters();renderPubs();
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{el.classList.toggle("is-active");document.getElementById(el.dataset.target)?.classList.toggle("is-active")});
document.getElementById("year").textContent=new Date().getFullYear();