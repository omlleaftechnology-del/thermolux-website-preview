/* Shared header + footer, FR and EN. English pages live in /en/ with the same file names. */
(function(){
var en=/\/en\//.test(location.pathname),R=en?'../':'',P=location.pathname.split('/').pop()||'index.html';
document.documentElement.lang=en?'en':'fr';
var L=en?{
 nav:['Products','Services','Projects','Advice','About'],cta:'Get a quote',ctaS:'Quote',aria:'Main',menu:'Open the menu',home:'Home',
 f:{blurb:'Your expert in air conditioning, heating and ventilation in Greater Montréal.',
  c1:'Products',p:['Wall-mounted systems','Multi-zone','Central systems','Air exchangers','Thermostats'],
  c2:'Services',s:['Installation','Replacement','Repair and diagnostic','Maintenance and cleaning','Ventilation'],
  c3:'Resources',r:['LogisVert rebates','Guides and advice','FAQ','Projects','Blog'],c4:'Contact',area:'Greater Montréal, QC',
  rights:'© 2026 Thermolux Inc. All rights reserved.',legal:'Terms · Privacy · Sitemap'}
}:{
 nav:['Produits','Services','Réalisations','Conseils','À propos'],cta:'Demander une soumission',ctaS:'Soumission',aria:'Principal',menu:'Ouvrir le menu',home:'Accueil',
 f:{blurb:'Votre expert en climatisation, chauffage et ventilation dans le Grand Montréal.',
  c1:'Produits',p:['Systèmes muraux','Multizones','Systèmes centraux','Échangeurs d’air','Thermostats'],
  c2:'Services',s:['Installation','Remplacement','Réparation et diagnostic','Entretien et nettoyage','Ventilation'],
  c3:'Ressources',r:['Subventions LogisVert','Guides et conseils','FAQ','Réalisations','Blogue'],c4:'Nous joindre',area:'Grand Montréal, QC',
  rights:'© 2026 Thermolux Inc. Tous droits réservés.',legal:'Conditions · Confidentialité · Plan du site'}
};
var pages=['catalogue.html','services.html','realisations.html','blogue.html','a-propos.html'];
var other=(en?'../'+P:'en/'+P)+location.search;
var lang='<span class="lang">'+(en?'<a href="'+other+'" hreflang="fr" lang="fr">FR</a> / <a aria-current="true" href="#" lang="en">EN</a>':'<a aria-current="true" href="#" lang="fr">FR</a> / <a href="'+other+'" hreflang="en" lang="en">EN</a>')+'</span>';
var H='<header><div class="wrap nav"><a href="index.html"><img src="'+R+'img/logo.png" alt="Thermolux"></a><nav aria-label="'+L.aria+'"><ul>'+
 pages.map(function(h,i){return '<li><a href="'+h+'">'+L.nav[i]+'</a></li>'}).join('')+'</ul></nav>'+
 '<div class="r"><a class="tel-d" href="tel:4385091823">438-509-1823</a>'+lang+'<a class="btn btn-p" href="contact.html#soumission"><span class="d">'+L.cta+'</span><span class="m">'+L.ctaS+'</span></a>'+
 '<button type="button" class="burger" id="burger" aria-label="'+L.menu+'" aria-expanded="false" aria-controls="mnav"><i></i><i></i><i></i></button></div></div>'+
 '<div class="mnav" id="mnav" hidden><div class="wrap"><ul>'+
 ['index.html'].concat(pages).map(function(h,i){return '<li><a href="'+h+'">'+(i?L.nav[i-1]:L.home)+'</a></li>'}).join('')+'</ul>'+
 '<div class="mrow"><span class="mlang">'+(en?'<a href="'+other+'" hreflang="fr" lang="fr">FR</a><a aria-current="true" href="#" lang="en">EN</a>':'<a aria-current="true" href="#" lang="fr">FR</a><a href="'+other+'" hreflang="en" lang="en">EN</a>')+'</span><a class="mtel" href="tel:4385091823">438-509-1823</a></div>'+
 '<a class="btn btn-p mcta" href="contact.html#soumission">'+L.cta+'</a>'+SOC+'</div></div></header>';
var SO=[['Facebook','https://www.facebook.com/thermoluxhvac','<path d="M14 8.5V7c0-.8.4-1.2 1.300-1.200H17V3h-2.500C11.800 3 10.500 4.600 10.500 6.800V8.500H8v3h2.500V21H14v-9.500h2.600l.4-3H14Z"/>'],
 ['Instagram','https://www.instagram.com/thermolux_inc/','<rect x="3.500" y="3.500" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.900"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.900"/><circle cx="17.200" cy="6.800" r="1.200"/>'],
 ['YouTube','https://www.youtube.com/channel/UCBahHYbbfmC_9RooAHsfZZA','<path d="M21.500 7.300c-.2-.9-.9-1.600-1.800-1.800C18.100 5.100 12 5.100 12 5.100s-6.100 0-7.700.4c-.9.200-1.600.9-1.800 1.800C2.100 8.900 2.100 12 2.100 12s0 3.100.4 4.700c.2.900.9 1.600 1.800 1.800 1.600.4 7.700.4 7.700.4s6.100 0 7.700-.4c.9-.2 1.600-.9 1.800-1.800.4-1.600.4-4.700.4-4.700s0-3.100-.4-4.700ZM10 15V9l5.200 3L10 15Z"/>']];
var SOC='<div class="soc">'+SO.map(function(s){return '<a href="'+s[1]+'" target="_blank" rel="noopener" aria-label="'+s[0]+'"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'+s[2]+'</svg></a>'}).join('')+'</div>';
var f=L.f,fp=['catalogue.html','catalogue.html','catalogue.html','catalogue.html','catalogue.html'],fs=['installation.html','installation.html','reparation.html','entretien.html','services.html'],fr=['subvention.html','blogue.html','faq.html','realisations.html','blogue.html'];
function ul(t,h){return '<ul>'+t.map(function(x,i){return '<li><a href="'+h[i]+'">'+x+'</a></li>'}).join('')+'</ul>'}
var F='<footer><div class="wrap"><div class="fg"><div><a class="flogo" href="index.html"><img src="'+R+'img/logo.png" alt="Thermolux"></a><p>'+f.blurb+'</p>'+SOC+'</div>'+
 '<div><h4>'+f.c1+'</h4>'+ul(f.p,fp)+'</div><div><h4>'+f.c2+'</h4>'+ul(f.s,fs)+'</div><div><h4>'+f.c3+'</h4>'+ul(f.r,fr)+'</div>'+
 '<div><h4>'+f.c4+'</h4><ul><li><a href="tel:4385091823">438-509-1823</a></li><li><a href="mailto:info@thermolux.ca">info@thermolux.ca</a></li><li>'+f.area+'</li></ul></div></div>'+
 '<div class="fb"><span>'+f.rights+' · RBQ 5812-9388-01</span><span>'+f.legal+'</span></div></div></footer>';
document.addEventListener('DOMContentLoaded',function(){
 var h=document.getElementById('site-header'),ft=document.getElementById('site-footer');
 if(h)h.outerHTML=H;if(ft)ft.outerHTML=F;
 document.querySelectorAll('.nav ul a').forEach(function(a){if(a.getAttribute('href')===P){a.setAttribute('aria-current','page');a.style.color='var(--blue)'}});
 var b=document.getElementById('burger'),m=document.getElementById('mnav');
 if(b&&m){
  var set=function(open){m.hidden=!open;b.setAttribute('aria-expanded',open);b.classList.toggle('open',open);document.body.classList.toggle('menu-open',open)};
  b.addEventListener('click',function(e){e.stopPropagation();set(m.hidden)});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false);e.stopPropagation()});
  document.addEventListener('click',function(){set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  window.addEventListener('resize',function(){if(innerWidth>1180)set(false)});
  m.querySelectorAll('a[href]').forEach(function(a){if(a.getAttribute('href')===P&&!a.classList.contains('mcta')){a.setAttribute('aria-current','page')}});
 }
});
/* drop the #hash once used; on reload always start at the top */
function clean(){if(location.hash)history.replaceState(null,'',location.pathname+location.search)}
window.addEventListener('load',function(){setTimeout(clean,600)});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(a&&a.getAttribute('href')!=='#')setTimeout(clean,800)});
if('scrollRestoration' in history)history.scrollRestoration='manual';
var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];
if(n&&n.type==='reload'){clean();scrollTo(0,0);addEventListener('load',function(){scrollTo(0,0)})}
})();

/* back-to-top arrow */
(function(){var b=document.createElement("button");b.type="button";b.className="totop";
 b.setAttribute("aria-label",(document.documentElement.lang||"fr")=="en"?"Back to top":"Retour en haut");
 b.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
 document.body.appendChild(b);
 function t(){b.classList.toggle("show",window.scrollY>600)}
 window.addEventListener("scroll",t,{passive:true});t();
 b.addEventListener("click",function(){window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"})});
})();
