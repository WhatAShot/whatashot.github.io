// Edit this file to change the research directions shown on the homepage.
// English and Chinese labels are kept together so the language toggle stays maintainable.
window.RESEARCH_CONFIG = {
  aiMethods: [
    {
      id: "multimodal",
      title: "Multimodal AI",
      titleZh: "多模态 AI",
      summary: "Unifying signals, images, biological language, and natural language to uncover intrinsic structure through shared representations and advance clinical reasoning.",
      summaryZh: "融合生理信号、医学影像、生物语言与自然语言，以共享表征揭示内在结构，推动临床推理。",
      tags: ["Biosignals", "Medical Imaging", "Biological Sequences & Language", "MLLMs"],
      tagsZh: ["生物信号", "医学影像", "生物序列与语言", "多模态大模型"]
    },
    {
      id: "generative",
      title: "Generative AI",
      titleZh: "生成式 AI",
      summary: "Developing controllable generative models to design functional molecules and create digital twins of biological systems.",
      summaryZh: "开发可控生成模型，设计功能性分子，并构建生物系统的数字孪生。",
      tags: ["Peptide Design", "Molecular Generation", "Physiological Synthesis", "Digital Twin"],
      tagsZh: ["多肽设计", "分子生成", "生理信号生成", "数字孪生"]
    },
    {
      id: "tabular",
      title: "Tabular AI",
      titleZh: "表格数据 AI",
      summary: "Learning and reasoning across heterogeneous tables to build foundation models and agents for decision-making under uncertainty.",
      summaryZh: "开展跨异质表格的学习与推理，构建基础模型与面向不确定性决策的智能体。",
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
