/* Subventions LogisVert par modèle. Source : Hydro-Québec, listes des appareils admissibles en vigueur le 2026-11-12
   (fichiers par situation), appariement par numéro AHRI.
   grants = propriétaire, habitation existante (TTG_AF_EffAlone) ; newhome = entrepreneur, nouvelle maison (TTG_AF_Maison1) ;
   plex = entrepreneur, multiplex ou immeuble [option efficacité, option optimisation] (TTG_AF_Multi1, TTG_AF_Multi4).
   Une capacité absente = non inscrite à la liste. combo = montant selon la combinaison d'appareils.
   Les offices d'habitation (TTG_Ext2) ont les mêmes montants que l'habitation existante. À mettre à jour à chaque nouvelle liste. */
window.AID={asOf:"2026-11-12",
 url:{fr:"https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/recherche-themopompes-efficaces.html",
      en:"https://www.hydroquebec.com/residential/energy-wise/financial-assistance/logisvert/efficient-heat-pump-search.html"},
 data:{
 "gree-vita-r32": {"grants":{"12000":1164,"18000":1836,"24000":2304},"newhome":{},"plex":{},"combo":false},
 "gree-sapphire": {"grants":{"12000":1236,"18000":1812},"newhome":{},"plex":{},"combo":false},
 "gree-fairy-ultra-heat": {
  "grants": {
   "18000": 1812,
   "24000": 2400,
   "12000": 1236
  },
  "newhome": {
   "18000": 2114,
   "24000": 2800,
   "12000": 1442
  },
  "plex": {
   "18000": [
    1812,
    2643
   ],
   "24000": [
    2400,
    3500
   ],
   "12000": [
    1236,
    1803
   ]
  },
  "combo": false
 },
 "kinghome-polaris-r32": {
  "grants": {
   "12000": 1800,
   "18000": 2448,
   "24000": 3120
  },
  "newhome": {
   "12000": 2100,
   "18000": 2856,
   "24000": 3640
  },
  "plex": {
   "12000": [
    1800,
    2625
   ],
   "18000": [
    2448,
    3570
   ],
   "24000": [
    3120,
    4550
   ]
  },
  "combo": false
 },
 "canair-4c28": {
  "grants": {
   "12000": 1440,
   "18000": 2160,
   "24000": 2664,
   "33000": 3840
  },
  "newhome": {
   "12000": 1680,
   "18000": 2520,
   "24000": 3108,
   "33000": 4480
  },
  "plex": {
   "12000": [
    1440,
    2100
   ],
   "18000": [
    2160,
    3150
   ],
   "24000": [
    2664,
    3885
   ],
   "33000": [
    3840,
    5600
   ]
  },
  "combo": false
 },
 "zephyr-hiultra": {
  "grants": {
   "12000": 1296,
   "18000": 2160,
   "24000": 2640
  },
  "newhome": {
   "12000": 1512,
   "18000": 2520,
   "24000": 3080
  },
  "plex": {
   "12000": [
    1296,
    1890
   ],
   "18000": [
    2160,
    3150
   ],
   "24000": [
    2640,
    3850
   ]
  },
  "combo": false
 },
 "lg-art-cool-prestige": {
  "grants": {
   "12000": 996,
   "18000": 1572,
   "24000": 1896
  },
  "newhome": {
   "12000": 1162,
   "18000": 1834,
   "24000": 2212
  },
  "plex": {
   "12000": [
    996,
    1453
   ],
   "18000": [
    1572,
    2293
   ],
   "24000": [
    1896,
    2765
   ]
  },
  "combo": false
 },
 "lennox-mwpd": {
  "grants": {
   "12000": 1272,
   "15000": 1680,
   "18000": 2100,
   "24000": 2640
  },
  "newhome": {
   "12000": 1484,
   "15000": 1960,
   "18000": 2450,
   "24000": 3080
  },
  "plex": {
   "12000": [
    1272,
    1855
   ],
   "15000": [
    1680,
    2450
   ],
   "18000": [
    2100,
    3063
   ],
   "24000": [
    2640,
    3850
   ]
  },
  "combo": false
 },
 "tosot-pular-25": {
  "grants": {
   "12000": 1200,
   "18000": 1752,
   "24000": 2328,
   "30000": 2880,
   "36000": 3336
  },
  "newhome": {
   "12000": 1400,
   "18000": 2044,
   "24000": 2716,
   "30000": 3360,
   "36000": 3892
  },
  "plex": {
   "12000": [
    1200,
    1750
   ],
   "18000": [
    1752,
    2555
   ],
   "24000": [
    2328,
    3395
   ],
   "30000": [
    2880,
    4200
   ],
   "36000": [
    3336,
    4865
   ]
  },
  "combo": false
 },
 "gree-clivia-r32": {
  "grants": {
   "12000": 1440,
   "18000": 2160,
   "24000": 2400
  },
  "newhome": {
   "12000": 1680,
   "18000": 2520,
   "24000": 2800
  },
  "plex": {
   "12000": [
    1440,
    2100
   ],
   "18000": [
    2160,
    3150
   ],
   "24000": [
    2400,
    3500
   ]
  },
  "combo": false
 },
 "gree-free-match-extreme": {
  "grants": {
   "18000": 2040
  },
  "newhome": {
   "18000": 2380
  },
  "plex": {
   "18000": [
    2040,
    2975
   ]
  },
  "combo": true
 },
 "zephyr-hi-pro-hd": {
  "grants": {
   "24000": 2448,
   "36000": 3840,
   "48000": 4392,
   "60000": 4440
  },
  "newhome": {
   "24000": 2856,
   "36000": 4480,
   "48000": 5124,
   "60000": 5180
  },
  "plex": {},
  "combo": false
 },
 "elios-central-r454b": {
  "grants": {
   "24000": 2496,
   "30000": 2856,
   "48000": 4740,
   "60000": 5400,
   "36000": 3816
  },
  "newhome": {
   "24000": 2912,
   "30000": 3332,
   "48000": 5530,
   "60000": 6300,
   "36000": 4452
  },
  "plex": {},
  "combo": false
 },
 "canair-4cdh": {
  "grants": {
   "18000": 1800,
   "24000": 2496,
   "30000": 2856,
   "36000": 3816,
   "48000": 4740,
   "60000": 5400
  },
  "newhome": {
   "18000": 2100,
   "24000": 2912,
   "30000": 3332,
   "36000": 4452,
   "48000": 5530,
   "60000": 6300
  },
  "plex": {},
  "combo": false
 },
 "zephyr-ub32": {"grants": {"12000": 1560, "15000": 1560}, "newhome": {}, "plex": {}, "combo": false},
 "zephyr-cb22": {"grants": {"18000": 740}, "newhome": {}, "plex": {}, "combo": false},
 "kinghome-ultranixx-r32": {"grants": {"24000": 2472, "36000": 3384, "48000": 4740, "60000": 5400}, "newhome": {}, "plex": {}, "combo": false},
 "canair-c28": {"grants": {"12000": 1200, "18000": 1800, "24000": 2544}, "newhome": {}, "plex": {}, "combo": false},
 "canair-4c22": {"grants": {"12000": 996, "18000": 1680}, "newhome": {}, "plex": {}, "combo": false}
},
 fmt:function(v){return window.LANG=="en"?"$"+String(v).replace(/\B(?=(\d{3})+(?!\d))/g,","):String(v).replace(/\B(?=(\d{3})+(?!\d))/g,"\u00a0")+"\u00a0$"},
 max:function(slug){var d=this.data[slug];if(!d)return 0;var v=Object.keys(d.grants).map(function(k){return d.grants[k]});return v.length?Math.max.apply(null,v):0}
};
