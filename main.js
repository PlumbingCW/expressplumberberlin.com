(function(){
  var d=document, drawer=d.getElementById('mob-drawer'), ov=d.getElementById('mob-overlay'), btn=d.querySelector('.hamburger');
  function openMenu(){drawer.classList.add('open');ov.classList.add('open');drawer.setAttribute('aria-hidden','false');btn.setAttribute('aria-expanded','true');d.documentElement.style.overflow='hidden';}
  function closeMenu(){drawer.classList.remove('open');ov.classList.remove('open');drawer.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false');d.documentElement.style.overflow='';}
  if(btn&&drawer){
    btn.addEventListener('click',openMenu);
    ov.addEventListener('click',closeMenu);
    drawer.querySelector('.mob-close').addEventListener('click',closeMenu);
    drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
    window.addEventListener('resize',function(){if(window.innerWidth>768)closeMenu();});
  }
  d.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item=q.closest('.faq-item'), open=item.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();
