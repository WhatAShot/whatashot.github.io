// Edit this file to change the research tags shown on the homepage.
// The HTML renders these entries automatically.
window.RESEARCH_CONFIG = {
  aiMethods: [
    {
      id: "multimodal",
      title: "Multimodal AI",
      summary: "Learning across heterogeneous physiological, imaging, language, molecular, and structured signals.",
      detailTitle: "From fixed modalities to pan-modal intelligence.",
      detailText: "We study models that reason across heterogeneous observations and remain useful as the available modalities, sensors, and views change.",
      tags: ["ECG / EEG", "Medical imaging", "Protein multimodality", "MLLMs"]
    },
    {
      id: "generative",
      title: "Generative AI",
      summary: "Generative models for data synthesis, molecular and peptide design, and biomedical simulation.",
      detailTitle: "Generation as a tool for design, simulation, and personalization.",
      detailText: "We develop generative systems for therapeutic design, physiological synthesis, and clinically grounded simulation.",
      tags: ["Peptide design", "Molecular generation", "Physiological synthesis", "Simulation"]
    },
    {
      id: "tabular",
      title: "Tabular AI",
      summary: "Foundation and reasoning models for structured data, clinical prediction, and decision support.",
      detailTitle: "General-purpose intelligence for structured data.",
      detailText: "We build neural architectures, pretraining paradigms, and reasoning models for tables and tabular data, from general benchmarks to clinical decisions.",
      tags: ["ExcelFormer", "TabR1", "Pretraining", "Clinical prediction"]
    }
  ],

  biomedicalAreas: [
    {
      title: "Drug Design",
      subtitle: "generation · interaction · affinity"
    },
    {
      title: "Clinical Trials",
      subtitle: "design · enrollment · prediction"
    },
    {
      title: "Diagnosis & Treatment",
      subtitle: "multimodal reasoning · personalized care"
    }
  ]
};
