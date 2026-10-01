const config = window.RESEARCH_CONFIG;

function renderResearch() {
  if (!config) return;

  const methodGrid = document.getElementById("method-grid");
  methodGrid.innerHTML = config.aiMethods.map((method, index) => `
    <article class="pillar-row">
      <div class="pillar-index">${String(index + 1).padStart(2, "0")}</div>
      <div class="pillar-main">
        <h3>${method.title}</h3>
        <p>${method.summary}</p>
      </div>
      <div class="pillar-tags">
        ${(method.tags || []).map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");

  const pipeline = document.getElementById("pipeline");
  pipeline.innerHTML = config.biomedicalAreas.map((area, index) => `
    <article class="biomedical-item">
      <span class="biomedical-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${area.title}</h3>
      <p>${area.subtitle}</p>
    </article>
  `).join("");
}

renderResearch();
document.getElementById("year").textContent = new Date().getFullYear();