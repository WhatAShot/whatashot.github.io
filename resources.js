if(window.PAGE_LANG==="zh") document.title="资源 | Jintai Chen";
document.querySelectorAll(".navbar-burger").forEach(el=>el.onclick=()=>{
 const active=el.classList.toggle("is-active");
 document.getElementById(el.dataset.target)?.classList.toggle("is-active",active);
 el.setAttribute("aria-expanded",String(active));
});
document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll(".citation-copy").forEach(button=>{
 button.addEventListener("click",async()=>{
  const code=document.getElementById(button.dataset.citationTarget);
  if(!code)return;
  try{
   await navigator.clipboard.writeText(code.textContent);
   button.textContent=window.PAGE_LANG==="zh"?"已复制":"Copied";
   setTimeout(()=>{button.textContent=button.dataset[window.PAGE_LANG==="zh"?"zh":"en"];},1800);
  }catch{
   const selection=window.getSelection();
   const range=document.createRange();
   range.selectNodeContents(code);
   selection.removeAllRanges();
   selection.addRange(range);
   button.textContent=window.PAGE_LANG==="zh"?"已选中，请复制":"Selected; copy manually";
  }
 });
});
