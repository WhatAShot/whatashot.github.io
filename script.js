const config = window.RESEARCH_CONFIG;

function renderResearch() {
  if (!config) return;

  const methodGrid = document.getElementById("method-grid");
  methodGrid.innerHTML = config.aiMethods.map((method, index) => `
    <button class="research-card ${index === 0 ? "active" : ""}" data-method="${method.id}">
      <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${method.title}</h3>
      <p>${method.summary}</p>
    </button>
  `).join("");

  const pipeline = document.getElementById("pipeline");
  pipeline.innerHTML = config.biomedicalAreas.map((area, index) => {
    const stage = `
      <div class="stage">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${area.title}</strong>
        <small>${area.subtitle}</small>
      </div>`;
    return index < config.biomedicalAreas.length - 1 ? stage + '<div class="arrow">→</div>' : stage;
  }).join("");

  function showMethod(id) {
    const d = config.aiMethods.find(x => x.id === id);
    if (!d) return;
    document.getElementById("detail-kicker").textContent = d.title;
    document.getElementById("detail-title").textContent = d.detailTitle;
    document.getElementById("detail-text").textContent = d.detailText;
    document.getElementById("detail-tags").innerHTML = d.tags.map(x => `<span>${x}</span>`).join("");
  }

  document.querySelectorAll(".research-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".research-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      showMethod(card.dataset.method);
    });
  });

  if (config.aiMethods.length) showMethod(config.aiMethods[0].id);
}

renderResearch();
document.getElementById("year").textContent = new Date().getFullYear();
