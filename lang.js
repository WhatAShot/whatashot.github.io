(() => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const lang = requested === "zh" ? "zh" : "en";
  window.PAGE_LANG = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-en][data-zh]").forEach(el => {
    const value = lang === "zh" ? el.dataset.zh : el.dataset.en;
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-lang-option]").forEach(el => {
    el.classList.toggle("is-current-language", el.dataset.langOption === lang);
  });

  const vp=document.querySelector('[data-lang-fragment="visitor-prefix"]');
  const vs=document.querySelector('[data-lang-fragment="visitor-suffix"]');
  if(vp) vp.textContent=lang==="zh"?"本站累计访问 ":"This homepage is visited ";
  if(vs) vs.textContent=lang==="zh"?" 次":" times";

  const path=window.location.pathname;
  if(lang==="zh"){
    if(path.endsWith("publications.html")) document.title="代表性论文 | Jintai Chen";
    else if(path.endsWith("academic.html")) document.title="学术经历 | Jintai Chen";
    else document.title="Jintai Chen | 面向医疗与科学的人工智能";
  }

  // Keep the selected language when navigating among local pages.
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#") || href.startsWith("?")) return;
    if (!/\.html(?:#.*)?$/.test(href)) return;
    const parts = href.split("#");
    const base = parts[0];
    const hash = parts[1] ? "#" + parts[1] : "";
    a.setAttribute("href", base + "?lang=" + lang + hash);
  });
})();