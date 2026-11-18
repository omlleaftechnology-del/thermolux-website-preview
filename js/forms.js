/* Quote form (home + contact, FR/EN): client-side validation, optional photo, thank-you panel.
   shortcut: front-end only, nothing is sent yet; connect to Contact Form 7 / Fluent Forms in WordPress. */
(function(){
 var en=document.documentElement.lang=="en",MAX=5*1024*1024;
 var M=en?{name:"Enter your full name.",phone:"Enter a 10-digit phone number.",email:"Enter a valid email address.",type:"Choose a project type.",big:"This photo is too large (5 MB max).",kind:"Please choose an image file (JPG, PNG, WebP…).",add:"Attach a photo",rm:"Remove the photo"}
  :{name:"Entrez votre nom complet.",phone:"Entrez un numéro à 10 chiffres.",email:"Entrez un courriel valide.",type:"Choisissez un type de projet.",big:"Cette photo est trop lourde (5 Mo max.).",kind:"Choisissez un fichier image (JPG, PNG, WebP…).",add:"Joindre une photo",rm:"Retirer la photo"};
 var rules={name:function(v){return v.trim()?"":M.name},
  phone:function(v){return v.replace(/\D/g,"").length>=10?"":M.phone},
  email:function(v){return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)?"":M.email},
  type:function(v){return v?"":M.type}};
 function init(f){
  var err=function(k,m){var e=f.querySelector('[data-err="'+k+'"]'),el=f.elements[k];if(e)e.textContent=m;if(el){el.setAttribute("aria-invalid",!!m);if(e)el.setAttribute("aria-describedby",e.id)}return !m};
  var check=function(k){return err(k,rules[k](f.elements[k].value))};
  Object.keys(rules).forEach(function(k){f.elements[k].addEventListener("blur",function(){check(k)})});
  var ph=f.elements.photo,dt=f.querySelector(".drop .dt"),rm=f.querySelector(".drop-rm");
  function photo(){var x=ph&&ph.files&&ph.files[0];if(!x){err("photo","");return true}
   if(!/^image\//.test(x.type))return err("photo",M.kind);
   if(x.size>MAX)return err("photo",M.big);return err("photo","")}
  function sync(){var x=ph.files&&ph.files[0];dt.textContent=x?x.name:M.add;f.querySelector(".drop").classList.toggle("has",!!x);rm.hidden=!x;photo()}
  if(ph){ph.addEventListener("change",sync);rm.addEventListener("click",function(e){e.preventDefault();ph.value="";sync()})}
  f.addEventListener("submit",function(e){e.preventDefault();
   var bad=Object.keys(rules).filter(function(k){return !check(k)});
   var okp=ph?photo():true;
   if(bad.length||!okp){(bad.length?f.elements[bad[0]]:ph).focus();return}
   var t=document.getElementById(f.dataset.thanks);f.hidden=true;if(t){t.hidden=false;t.focus()}
  });
 }
 [].forEach.call(document.querySelectorAll("form.qform"),init);
})();
