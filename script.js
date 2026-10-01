const details = {
  multimodal: {
    kicker: "Multimodal AI",
    title: "From fixed modalities to pan-modal intelligence.",
    text: "We study models that reason across heterogeneous observations and remain useful as the available modalities, sensors, and views change.",
    tags: ["ECG / EEG", "Medical imaging", "Protein multimodality", "MLLMs"]
  },
  generative: {
    kicker: "Generative AI",
    title: "Generation as a tool for design, simulation, and personalization.",
    text: "We develop generative systems for therapeutic design, physiological synthesis, patient-specific digital twins, and clinically grounded simulation.",
    tags: ["Peptide design", "Molecular generation", "Digital twins", "Simulation"]
  },
  tabular: {
    kicker: "Tabular AI",
    title: "General-purpose intelligence for structured data.",
    text: "We build neural architectures, pretraining paradigms, and reasoning models for tables and tabular data, from general benchmarks to clinical decisions.",
    tags: ["ExcelFormer", "TabR1", "Pretraining", "Clinical prediction"]
  }
};
document.querySelectorAll(".research-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".research-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    const d = details[card.dataset.method];
    document.getElementById("detail-kicker").textContent = d.kicker;
    document.getElementById("detail-title").textContent = d.title;
    document.getElementById("detail-text").textContent = d.text;
    document.getElementById("detail-tags").innerHTML = d.tags.map(x => `<span>${x}</span>`).join("");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();