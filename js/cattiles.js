/* Catalogue: icons on the "Type" filter + category tiles above the grid (same filter, two entry points) */
(function(){
 var form=document.getElementById("filters"),grid=document.getElementById("grid");if(!form||!grid)return;
 var en=document.documentElement.lang=="en";
 var S='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
 var IC={
  all:S+'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>',
  mural:S+'<rect x="3" y="5" width="18" height="9" rx="2.5"/><path d="M6 10.5h12"/><path d="M8 17.5l-1 2M12 17.5v2M16 17.5l1 2"/></svg>',
  multizone:S+'<rect x="2.5" y="3" width="5.5" height="3.5" rx="1"/><rect x="9.25" y="3" width="5.5" height="3.5" rx="1"/><rect x="16" y="3" width="5.5" height="3.5" rx="1"/><path d="M5.25 6.5v3.5h13.5V6.5M12 6.5V14"/><rect x="8" y="14" width="8" height="7" rx="1.5"/><circle cx="12" cy="17.5" r="1.6"/></svg>',
  central:S+'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><circle cx="12" cy="15" r="3"/><path d="M12 12v6M9 15h6"/></svg>',
  exchanger:S+'<path d="M4 8.5h14l-3.5-3.5"/><path d="M20 15.5H6l3.5 3.5"/></svg>',
  humidifier:S+'<path d="M12 3.5s6 6.4 6 10.8a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/></svg>',
  thermostat:S+'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/><path d="M12 3.5v1.5M20.5 12H19M12 20.5V19M3.5 12H5"/></svg>'
 };
 var W=en?["model","models"]:["modèle","modèles"],HEAD=en?"Product categories":"Catégories de produits";
 // icons in the Type filter
 [].forEach.call(form.querySelectorAll('input[name="type"]'),function(i){var s=i.nextElementSibling;if(s&&IC[i.value]&&!s.querySelector("svg")){s.insertAdjacentHTML("afterbegin",'<i class="ti">'+IC[i.value]+'</i>')}});
 // tiles
 var cards=[].slice.call(grid.querySelectorAll(".card"));
 var cnt=function(t){return t=="all"?cards.length:cards.filter(function(c){return c.dataset.type==t}).length};
 var box=document.createElement("div");box.className="ctiles-w";
 box.innerHTML='<p class="ctiles-h">'+HEAD+'</p><div class="ctiles" role="group" aria-label="'+HEAD+'">'+[].map.call(form.querySelectorAll('input[name="type"]'),function(i){
   var n=cnt(i.value),lab=i.nextElementSibling.textContent.trim();if(!n)return"";
   return '<button type="button" class="ctile" data-t="'+i.value+'" aria-pressed="false"><span class="ct-ic">'+(IC[i.value]||"")+'</span><span class="ct-t">'+lab+'</span><span class="ct-n">'+n+' '+W[n>1?1:0]+'</span></button>'}).join("")+'</div>';
 var res=grid.closest(".wrap");res.insertBefore(box,res.firstChild);
 // sub-type (HRV / ERV) for air exchangers: a row of chips under the tiles + the "Core" drop-down, shown only for exchangers
 var subIn=[].slice.call(form.querySelectorAll('input[name="sub"]')),subFs=form.querySelector(".fs-sub"),subDd=subFs&&subFs.closest(".dd"),srow=null;
 if(subIn.length){if(subFs)subFs.hidden=false;
  var cnS=function(v){return cards.filter(function(c){return c.dataset.type=="exchanger"&&(v=="all"||(" "+c.dataset.sub+" ").indexOf(" "+v+" ")>-1)}).length};
  srow=document.createElement("div");srow.className="csub";srow.hidden=true;
  srow.innerHTML='<span class="csub-l">'+(en?"Core type":"Type de noyau")+'</span>'+subIn.map(function(i){return '<button type="button" class="csub-b" data-s="'+i.value+'" aria-pressed="false">'+i.nextElementSibling.textContent+' <small>'+cnS(i.value)+'</small></button>'}).join("");
  box.appendChild(srow);
  srow.addEventListener("click",function(e){var b=e.target.closest(".csub-b");if(!b)return;var r=form.querySelector('input[name="sub"][value="'+b.dataset.s+'"]');r.checked=true;r.dispatchEvent(new Event("change",{bubbles:true}))});
 }
 function sync(){var v=(form.querySelector('input[name="type"]:checked')||{}).value||"all";[].forEach.call(box.querySelectorAll(".ctile"),function(b){b.setAttribute("aria-pressed",b.dataset.t==v)});
  if(srow){var ex=v=="exchanger";srow.hidden=!ex;if(subDd)subDd.hidden=!ex;
   if(!ex){var a=form.querySelector('input[name="sub"][value="all"]');if(a&&!a.checked){a.checked=true}}
   var sv=(form.querySelector('input[name="sub"]:checked')||{}).value||"all";[].forEach.call(srow.querySelectorAll(".csub-b"),function(b){b.setAttribute("aria-pressed",b.dataset.s==sv)})}}
 box.addEventListener("click",function(e){var b=e.target.closest(".ctile");if(!b)return;var r=form.querySelector('input[name="type"][value="'+b.dataset.t+'"]');if(!r)return;r.checked=true;r.dispatchEvent(new Event("change",{bubbles:true}));sync()});
 form.addEventListener("change",sync);
 ["reset","reset2"].forEach(function(id){var r=document.getElementById(id);if(r)r.addEventListener("click",function(){setTimeout(sync,0)})});
 sync();
})();
