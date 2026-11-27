/* Subventions LogisVert par modèle. Source : Hydro-Québec, listes des appareils admissibles en vigueur le 2026-11-12
   (fichiers par situation), appariement par numéro AHRI.
   grants = propriétaire, habitation existante (TTG_AF_EffAlone) ; newhome = entrepreneur, nouvelle maison (TTG_AF_Maison1) ;
   plex = entrepreneur, multiplex ou immeuble [option efficacité, option optimisation] (TTG_AF_Multi1, TTG_AF_Multi4).
   Une capacité absente = non inscrite à la liste. combo = montant selon la combinaison d'appareils.
   Les offices d'habitation (TTG_Ext2) ont les mêmes montants que l'habitation existante. À mettre à jour à chaque nouvelle liste. */
window.AID={asOf:"2026-11-26",
 url:{fr:"https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/recherche-themopompes-efficaces.html",
      en:"https://www.hydroquebec.com/residential/energy-wise/financial-assistance/logisvert/efficient-heat-pump-search.html"},
 data:{
 "tti-concerto-23": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "tosot-lomo-16": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "haxxair-b2d": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "arcoaire-performance": {"grants": {"18000": 570}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-lomo-16": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "zephyr-serie-23-r32-ac": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lennox-ml16xp1": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lennox-ml14xp1": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "comfortmaker-r4h4": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "comfortmaker-csh6": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "goodman-gsz14": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "goodman-gsz16": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "comfortmaker-dlcera": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "elios-ebc": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-flexx": {"grants": {"36000": 3480, "24000": 2400, "48000": 5280}, "lo": {"24000": 2352, "48000": 4740}, "newhome": {}, "plex": {}, "combo": false},
 "comfortmaker-dlcsra": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "goodman-serie-21-multizone": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "tosot-lomo-plus-23-multizone": {"grants": {"42000": 3600, "18000": 2040, "24000": 2148, "36000": 3480}, "lo": {}, "newhome": {}, "plex": {}, "combo": true, "mz": {"42000": {"s": 3600}, "18000": {"s": 2040}, "24000": {"s": 2148}, "36000": {"s": 3480}}},
 "tosot-lomo-23-multizone": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "gree-free-match-lomo-16": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "gree-multi-ultra-23": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "gree-multi-gen2": {"grants": {"36000": 1780, "18000": 1800, "24000": 1180, "30000": 1360}, "lo": {"36000": 1540}, "newhome": {}, "plex": {}, "combo": true, "mz": {"36000": {"s": 1780}, "18000": {"s": 1800}, "24000": {"s": 1180}, "30000": {"s": 1360}}},
 "gree-free-match-lomo-23": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "tosot-apex": {"grants": {"48000": 5280, "24000": 2400, "36000": 3480}, "lo": {"48000": 4740, "24000": 2352, "36000": 2784}, "newhome": {}, "plex": {}, "combo": false},
 "gree-unix": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lg-art-cool-mirror": {"grants": {"12000": 984}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lg-gloss-white": {"grants": {"12000": 984}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-crossover-25": {"grants": {"24000": 2304}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-lomo-17": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "goodman-serie-21": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "goodman-serie-19": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "zephyr-serie-22": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "zephyr-serie-17": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "tosot-lomo-eco": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "tosot-lomo-plus-38": {"grants": {"12000": 1236, "18000": 1812, "24000": 2400}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "tosot-lomo-23": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-livo-gen3": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-vireo-plus": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-extreme-38": {"grants": {"12000": 1236, "18000": 1812, "24000": 2400}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lennox-mha": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lennox-mla": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-vireo-gen3": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "zephyr-multi-zone-22": {"grants": {"18000": 1524, "24000": 1800, "36000": 2688, "42000": 3240}, "lo": {}, "newhome": {}, "plex": {}, "combo": true, "mz": {"18000": {"s": 1524}, "24000": {"s": 1800}, "36000": {"s": 2688}, "42000": {"s": 3240}}},
 "sharp-thu": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "sharp-tu": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-vita": {"grants": {"12000": 1164}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-lomo-23": {"grants": {"12000": 1248}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-livo-r32": {"grants": {"12000": 1164, "18000": 1836, "24000": 2304, "30000": 2880, "36000": 3288}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "elios-central-r410a": {"grants": {"30000": 2520, "18000": 1620, "24000": 2304, "36000": 3648, "48000": 4320, "60000": 5040}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "zephyr-serie-23-r32": {"grants": {"18000": 740}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "elios-central-addon-r410a": {"grants": {"18000": 1764, "36000": 3960, "24000": 2520, "30000": 2712, "60000": 5040, "48000": 4320}, "lo": {"36000": 3288, "30000": 2352}, "newhome": {}, "plex": {}, "combo": false},
 "turcotte-turbofin": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-lomo-19-115v": {"grants": {"12000": 1164}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-livo-gen4": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-lomo-20": {"grants": {"30000": 2880, "36000": 3336}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-envo-r32": {"grants": {"18000": 1764, "12000": 1200, "24000": 2400}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-charmo-19": {"grants": {"12000": 1164}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-airy-r32": {"grants": {"24000": 2760, "12000": 1560, "18000": 2340}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-charmo-r32": {"grants": {"30000": 2880, "12000": 1164, "18000": 1836, "24000": 2304, "36000": 3288}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "acd-eclypse": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "acd-commodore-23": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "acd-revolution": {"grants": {"12000": 1236, "24000": 2400, "18000": 1812}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lennox-mwhd": {"grants": {"15000": 650, "12000": 545, "18000": 750, "24000": 1020}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "lennox-mwld": {"grants": {"12000": 1272, "15000": 1680, "18000": 2100, "24000": 2640}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "arcoaire-duracomfort": {"grants": {"12000": 1236, "18000": 1332, "24000": 2268, "30000": 855}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "arcoaire-deluxe": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "haxxair-t2d": {"grants": {"12000": 375, "18000": 1200}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "tosot-charmo-19": {"grants": {"12000": 1164}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-crossover-r32": {"grants": {"18000": 2160, "12000": 1440, "24000": 2400}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-extreme-r32": {"grants": {"12000": 1560, "18000": 2340, "24000": 2760}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-free-match": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "gree-multi21-plus": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "gree-multi-plus-ultra": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": true},
 "gree-free-match-r32": {"grants": {"36000": 4320, "42000": 5340, "18000": 1920, "24000": 2832, "30000": 4320}, "lo": {"42000": 4800, "18000": 1800, "24000": 2640, "30000": 3264}, "newhome": {}, "plex": {}, "combo": true, "mz": {"36000": {"s": 4320, "c": 4320}, "42000": {"c": 4800, "s": 5340, "d": 4800}, "18000": {"d": 1800, "c": 1848, "s": 1920}, "24000": {"d": 2640, "c": 2760, "s": 2832}, "30000": {"d": 4320, "c": 3312, "s": 3360}}},
 "gree-canada-free-match-r32": {"grants": {"24000": 2832, "30000": 4320, "18000": 2112, "36000": 4320, "42000": 5340}, "lo": {"24000": 2640, "30000": 3264, "18000": 1800, "42000": 4800}, "newhome": {}, "plex": {}, "combo": true, "mz": {"24000": {"d": 2640, "c": 2760, "s": 2832}, "30000": {"d": 4320, "c": 3312, "s": 3360}, "18000": {"s": 2112, "d": 1800, "c": 2112}, "36000": {"c": 4320, "s": 4320}, "42000": {"d": 4800, "c": 4800, "s": 5340}}},
 "haxxair-t2d-multizone": {"grants": {"24000": 1800, "18000": 1524, "42000": 3240, "36000": 2688}, "lo": {}, "newhome": {}, "plex": {}, "combo": true, "mz": {"24000": {"s": 1800}, "18000": {"s": 1524}, "42000": {"s": 3240}, "36000": {"s": 2688}}},
 "gree-unix-r32": {"grants": {"24000": 2472, "36000": 3912, "48000": 5400}, "lo": {"48000": 4740}, "newhome": {}, "plex": {}, "combo": false},
 "gree-unix-r32-addon": {"grants": {"24000": 1800, "36000": 3120, "48000": 4920}, "lo": {"48000": 4224}, "newhome": {}, "plex": {}, "combo": false},
 "canair-4cdh-addon": {"grants": {"18000": 1824, "24000": 2364, "30000": 3000, "36000": 3504, "48000": 4536}, "lo": {"30000": 2880, "48000": 4128}, "newhome": {}, "plex": {}, "combo": false},
 "canair-c22": {"grants": {}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-free-match-extreme": {"grants": {"18000": 2040}, "lo": {}, "newhome": {}, "plex": {}, "combo": true, "mz": {"18000": {"s": 2040}}},
 "kinghome-charmo": {"grants": {"12000": 1164, "18000": 1836, "24000": 2304}, "lo": {}, "newhome": {}, "plex": {}, "combo": false},
 "kinghome-airy": {"grants": {"12000": 1560, "18000": 2340, "24000": 2760}, "lo": {"12000": 1236, "18000": 1860, "24000": 2400}, "newhome": {}, "plex": {}, "combo": false},
 "elios-central-addon": {"grants": {"18000": 1824, "24000": 2496, "30000": 3000, "36000": 3816}, "lo": {"24000": 2364, "30000": 2856, "36000": 3504}, "newhome": {}, "plex": {}, "combo": true},
 "elios-emulti": {"grants": {"27000": 3480, "36000": 4620, "48000": 5520, "18000": 2400}, "lo": {"27000": 2376, "36000": 3408, "48000": 4416, "18000": 1920}, "newhome": {}, "plex": {}, "combo": true, "mz": {"27000": {"s": 2832, "d": 2376, "c": 2592}, "36000": {"s": 3720, "d": 3408, "c": 3552}, "48000": {"s": 4416, "d": 4680, "c": 4536}, "18000": {"s": 1920, "d": 1920, "c": 1920}}},
 "mainline-ultraheat-multi-zones": {"grants": {"18000": 2400, "27000": 3480, "36000": 4620, "48000": 5760, "55000": 6000}, "lo": {"27000": 2880, "36000": 4560, "48000": 5520, "55000": 5880}, "newhome": {}, "plex": {}, "combo": true, "mz": {"18000": {"s": 2400, "d": 2400, "c": 2400}, "27000": {"s": 3480, "d": 2880, "c": 3168}, "36000": {"s": 4620, "d": 4560, "c": 4560}, "48000": {"s": 5760, "d": 5520, "c": 5520}, "55000": {"d": 6000, "c": 5880}}},
 "zephyr-multi-zone-r454b": {"grants": {"18000": 1428, "27000": 2184, "42000": 3384, "36000": 2712}, "lo": {"18000": 1380, "27000": 2112, "42000": 3288, "36000": 2520}, "newhome": {}, "plex": {}, "combo": true, "mz": {"18000": {"s": 1380, "d": 1428, "c": 1404}, "27000": {"s": 2112, "d": 2184, "c": 2160}, "42000": {"d": 3288, "s": 3384, "c": 3336}, "36000": {"d": 2520, "s": 2712, "c": 2616}}},
 "kinghome-multizone-r32": {"grants": {"18000": 2112, "24000": 2832, "30000": 4320, "36000": 4320, "42000": 5340, "48000": 5340, "60000": 2050}, "lo": {"18000": 1800, "24000": 2640, "30000": 3264, "42000": 4800, "48000": 4800, "60000": 2000}, "newhome": {}, "plex": {}, "combo": true, "mz": {"18000": {"s": 2112, "d": 1800, "c": 1848}, "24000": {"s": 2832, "d": 2640, "c": 2760}, "30000": {"s": 3360, "d": 4320, "c": 3312}, "36000": {"s": 4320, "c": 4320}, "42000": {"s": 5340, "d": 4800, "c": 4800}, "48000": {"s": 5340, "d": 4800, "c": 4800}}},
 "mainline-ultraheat-central": {"grants": {"24000": 2496, "30000": 2856, "36000": 3816, "42000": 4740, "48000": 4740, "60000": 5400}, "newhome": {}, "plex": {}, "combo": false},
 "forestair-e20": {"grants": {}, "newhome": {}, "plex": {}, "combo": false},
 "forestair-e23": {"grants": {}, "newhome": {}, "plex": {}, "combo": false},
 "forestair-e38": {"grants": {}, "newhome": {}, "plex": {}, "combo": false},
 "gree-vita-r32": {"grants": {"12000": 1164, "18000": 1836, "24000": 2304}, "newhome": {}, "plex": {}, "combo": false},
 "gree-sapphire": {"grants": {"12000": 1236, "18000": 1812}, "newhome": {}, "plex": {}, "combo": false},
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
 "canair-4c22": {"grants": {"12000": 996, "18000": 1680}, "newhome": {}, "plex": {}, "combo": false},
 "mainline-nexus-ultra-heat": {"grants": {"12000": 1440, "18000": 1992, "24000": 2760, "33000": 3720}, "newhome": {}, "plex": {}, "combo": false},
 "elios-emc": {"grants": {"12000": 1440, "18000": 1992, "24000": 2760, "33000": 3720}, "newhome": {}, "plex": {}, "combo": false},
 "elios-ebc": {"grants": {"12000": 996, "18000": 1680, "24000": 2496, "30000": 2400, "36000": 3072}, "newhome": {}, "plex": {}, "combo": false}
},
 val:function(d,c){var v=d.grants[c]||(d.newhome&&d.newhome[c]);if(!v)return"";var l=d.lo&&d.lo[c];return l&&l<v?this.fmt(l).replace(/\u00a0\$$/,"")+"\u2009–\u2009"+this.fmt(v):this.fmt(v)},
 fmt:function(v){return window.LANG=="en"?"$"+String(v).replace(/\B(?=(\d{3})+(?!\d))/g,","):String(v).replace(/\B(?=(\d{3})+(?!\d))/g,"\u00a0")+"\u00a0$"},
 max:function(slug){var d=this.data[slug];if(!d)return 0;var v=Object.keys(d.grants).map(function(k){return d.grants[k]});return v.length?Math.max.apply(null,v):0}
};
