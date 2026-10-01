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
})();