export function initSite(){
  if (window.__bsInit) return;
  window.__bsInit = true;

/* ---------- PRELOADER ---------- */
(function(){
  var count=document.getElementById('count'),loader=document.getElementById('loader'),n=0;
  var t=setInterval(function(){
    n+=Math.floor(Math.random()*8)+3; if(n>=100){n=100;clearInterval(t);
      setTimeout(function(){loader.classList.add('done');document.body.classList.add('reveal-ready');},350);}
    count.textContent=(n<10?'0':'')+n;
  },90);
})();

/* ---------- CURSOR ---------- */
(function(){
  if(matchMedia('(hover:none)').matches)return;
  var c=document.getElementById('cursor'),ct=document.getElementById('cursorTxt'),x=0,y=0,cx=0,cy=0;
  document.addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;ct.style.left=x+'px';ct.style.top=y+'px';});
  (function loop(){cx+=(x-cx)*.2;cy+=(y-cy)*.2;c.style.left=cx+'px';c.style.top=cy+'px';requestAnimationFrame(loop);})();
  var hov='a,button,.srow,.mem,.loc,.g';
  document.querySelectorAll(hov).forEach(function(el){
    el.addEventListener('mouseenter',function(){c.classList.add('big');
      if((el.classList.contains('loc')&&el.classList.contains('foetz'))||el.classList.contains('gold'))c.classList.add('gold');
      var label=el.getAttribute('data-cursor');if(label){ct.textContent=label;ct.style.opacity='1';}});
    el.addEventListener('mouseleave',function(){c.classList.remove('big');c.classList.remove('gold');ct.style.opacity='0';});
  });
})();

/* ---------- MAGNETIC BUTTONS ---------- */
(function(){
  if(matchMedia('(hover:none)').matches)return;
  document.querySelectorAll('.magnetic').forEach(function(el){
    el.addEventListener('mousemove',function(e){
      var r=el.getBoundingClientRect();
      var mx=e.clientX-r.left-r.width/2,my=e.clientY-r.top-r.height/2;
      el.style.transform='translate('+mx*.3+'px,'+my*.4+'px)';
    });
    el.addEventListener('mouseleave',function(){el.style.transform='';});
  });
})();

/* ---------- SCROLL REVEAL ---------- */
(function(){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();

/* ---------- STICKY BOOK ---------- */
(function(){
  var sb=document.getElementById('stickyBook');
  addEventListener('scroll',function(){
    if(scrollY>window.innerHeight*.8)sb.classList.add('show');else sb.classList.remove('show');
  });
})();

/* ---------- LANGUAGE TOGGLE ---------- */
(function(){
  var lang=document.getElementById('lang');
  function setLang(l){
    document.documentElement.setAttribute('data-lang',l);
    document.querySelectorAll('[data-'+l+']').forEach(function(el){
      var v=el.getAttribute('data-'+l); if(v!==null) el.textContent=v;
    });
    lang.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-set')===l);});
  }
  lang.addEventListener('click',function(e){var b=e.target.closest('button');if(b)setLang(b.getAttribute('data-set'));});
})();

/* ---------- BOOKING MODAL (choix Ville / Foetz) ---------- */
(function(){
  var m=document.getElementById('bookModal');
  function open(){m.classList.add('open');m.setAttribute('aria-hidden','false');}
  function close(){m.classList.remove('open');m.setAttribute('aria-hidden','true');}
  document.querySelectorAll('.js-book').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();open();});});
  document.getElementById('bookClose').addEventListener('click',close);
  m.addEventListener('click',function(e){if(e.target===m)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();
}
