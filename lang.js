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