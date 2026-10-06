// Show the supplied covers when present; keep the page usable during setup.
document.querySelectorAll('[data-cover]').forEach(img=>{
  const fallback=img.parentElement.querySelector('.cover-fallback');
  const show=()=>{img.hidden=false;if(fallback)fallback.classList.add('hidden');};
  const missing=()=>{img.hidden=true;if(fallback)fallback.classList.remove('hidden');};
  img.addEventListener('load',show);img.addEventListener('error',missing);
  if(img.complete){if(img.naturalWidth)show();else missing();}
});
