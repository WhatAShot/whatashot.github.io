// Edit this file to change the research directions shown on the homepage.
// English and Chinese labels are kept together so the language toggle stays maintainable.
window.RESEARCH_CONFIG = {
  aiMethods: [
    {
      id: "multimodal",
      title: "Multimodal AI",
      titleZh: "多模态 AI",
      summary: "Learning across biosignals, medical imaging, biological sequences, language, and other heterogeneous modalities.",
      summaryZh: "面向生物信号、医学影像、生物序列、语言等异质模态的统一学习。",
      tags: ["Biosignals", "Medical Imaging", "Biological Sequences & Language", "MLLMs"],
      tagsZh: ["生物信号", "医学影像", "生物序列与语言", "多模态大模型"]
    },
    {
      id: "generative",
      title: "Generative AI",
      titleZh: "生成式 AI",
      summary: "Generative models for data synthesis, molecular and peptide design, and digital twins.",
      summaryZh: "面向数据合成、分子与多肽设计以及数字孪生的生成式模型。",
      tags: ["Peptide Design", "Molecular Generation", "Physiological Synthesis", "Digital Twin"],
      tagsZh: ["多肽设计", "分子生成", "生理信号生成", "数字孪生"]
    },
    {
      id: "tabular",
      title: "Tabular AI",
      titleZh: "表格数据 AI",
      summary: "Learning and reasoning for structured data, from deep tabular prediction to data agents.",
      summaryZh: "面向结构化数据的学习与推理，从深度表格预测到数据智能体。",
      tags: ["Deep Tabular Prediction", "Data Agent"],
      tagsZh: ["深度表格预测", "数据智能体"]
    }
  ],

  biomedicalAreas: [
    {
      title: "Drug Design",
      titleZh: "药物设计",
      subtitle: "Generation · Interaction · Affinity · Screening",
      subtitleZh: "生成 · 相互作用 · 亲和力 · 筛选"
    },
    {
      title: "Clinical Trial Optimization",
      titleZh: "临床试验优化",
      subtitle: "Design · Enrollment · Outcome Prediction",
      subtitleZh: "设计 · 入组 · 结局预测"
    },
    {
      title: "Clinical Decision Support",
      titleZh: "临床决策支持",
      subtitle: "Diagnosis · Prognosis · Treatment",
      subtitleZh: "诊断 · 预后 · 治疗"
    }
  ]
};
