const pubs = (window.PUBLICATIONS || []).slice().sort((a,b) => b.year - a.year || a.title.localeCompare(b.title));
const allTags = ["All", ...Array.from(new Set(pubs.flatMap(p => p.tags || [])))];
let current = "All";

const filterBar = document.getElementById("filter-bar");
const list = document.getElementById("publication-list");

function renderFilters(){
  filterBar.innerHTML = allTags.map(tag => `<button class="filter-pill ${tag===current ? "active":""}" data-tag="${tag}">${tag}</button>`).join("");
  filterBar.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    current = btn.dataset.tag;
    renderFilters();
    renderPubs();
  }));
}

function authorHtml(authors){
  return authors.replace(/Jintai Chen/g, "<strong>Jintai Chen</strong>");
}

function renderPubs(){
  const filtered = current === "All" ? pubs : pubs.filter(p => (p.tags || []).includes(current));
  list.innerHTML = filtered.map(p => {
    const links = [
      p.paper ? `<a href="${p.paper}" target="_blank" rel="noreferrer">Paper ↗</a>` : "",
      p.code ? `<a href="${p.code}" target="_blank" rel="noreferrer">Code ↗</a>` : "",
      p.project ? `<a href="${p.project}" target="_blank" rel="noreferrer">Project ↗</a>` : ""
    ].filter(Boolean).join("");
    return `
      <article class="publication-item">
        <div class="pub-year">${p.year}</div>
        <div class="pub-main">
          <div class="pub-topline"><span class="venue-badge">${p.badge || p.venue}</span></div>
          <h2>${p.title}</h2>
          <p class="pub-authors">${authorHtml(p.authors)}</p>
          <div class="pub-meta">
            <span>${p.venue}</span>
            <div class="pub-tags">${(p.tags||[]).map(t => `<span>${t}</span>`).join("")}</div>
          </div>
          <div class="pub-links">${links}</div>
        </div>
      </article>`;
  }).join("");
}
renderFilters();
renderPubs();
document.getElementById("year").textContent = new Date().getFullYear();