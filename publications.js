const pubs=(window.PUBLICATIONS||[]).slice().sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));
const allTags=["All",...Array.from(new Set(pubs.flatMap(p=>p.tags||[])))];
let current="All";
const filterBar=document.getElementById("filter-bar");
const list=document.getElementById("publication-list");

function renderFilters(){
  filterBar.innerHTML=allTags.map(t=>`<button class="button ${t===current?"is-selected":""}" data-tag="${t}">${t}</button>`).join("");
  filterBar.querySelectorAll("button").forEach(b=>b.onclick=()=>{current=b.dataset.tag;renderFilters();renderPubs();});
}
function authorHtml(p){
  const cf=new Set(p.coFirstAuthors||[]);
  const ca=new Set(p.correspondingAuthors||[]);
  return p.authors.split(", ").map(name=>{
    const mark=`${cf.has(name)?"†":""}${ca.has(name)?"*":""}`;
    const core=name==="Jintai Chen"?`<strong>${name}</strong>`:name;
    return `${core}${mark?`<sup>${mark}</sup>`:""}`;
  }).join(", ");
} 
function renderPubs(){
  const rows=current==="All"?pubs:pubs.filter(p=>(p.tags||[]).includes(current));
  list.innerHTML=rows.map(p=>{
    const links=[
      p.paper&&`<a href="${p.paper}" target="_blank">Paper ↗</a>`,
      p.code&&`<a href="${p.code}" target="_blank">Code ↗</a>`,
      p.project&&`<a href="${p.project}" target="_blank">Project ↗</a>`
    ].filter(Boolean).join("");
    return `
      <article class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${authorHtml(p)}</div>
          <div class="pub-bottom">
            <div><span class="tag venue-tag">${p.badge||p.venue}</span></div>
            <div class="pub-tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
          </div>
          <div class="pub-links">${links}</div>
        </div>
      </article>`;
  }).join("");
}
renderFilters();renderPubs();
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{el.classList.toggle("is-active");document.getElementById(el.dataset.target)?.classList.toggle("is-active")});
document.getElementById("year").textContent=new Date().getFullYear();