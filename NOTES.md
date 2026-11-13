# Thermolux — project notes

Client: Thermolux (heat pumps, Montréal / Laval / Longueuil). Site in French (EN later).
Goal: premium, simple, blue-white site; final build on WordPress + Elementor; client edits it herself.

## Design decisions
- Palette: ink navy #0A1F3D, brand blue #1565A8, blue-white #EEF4FA, orange CTA #EA580C (dark text on orange).
- Fonts: Inter (all), Manrope (nav + header button). No serif, no cream tones.
- Hero: full-bleed photo, only H1 + 2 buttons. Header edges align with content (24px).
- Real assets from thermolux.ca live in `img/` (logo, Gree photos, van, LogisVert, RBQ, Google avis).
- Shared files: `css/site.css`, `js/layout.js` (header + footer injected into `#site-header` / `#site-footer`).

## Pages (from thermolux.ca)
index, catalogue (+ product page), services (installation, réparation, entretien, diagnostic, dépannage),
comment-ca-marche, realisations, subvention (LogisVert), blogue (+ article), faq, a-propos, contact (devis).

## WordPress plan
- Child theme of Hello Elementor + our CSS. Pages editable in Elementor (JSON templates, import via Templates).
- Custom post types: Produits (taxonomies type + marque; fields SEER2, HSPF2, BTU, temp min, photo, featured),
  Réalisations (city, photo), Articles/Guides (standard posts + categories).
- Catalogue/finder generated from the Produits fields. No cart, no checkout (site-vitrine). Price = optional field.
- Contact form: Contact Form 7 / Fluent Forms (free) or Elementor Pro Forms.
- Client how-to (FR, with screenshots): add product, add article, edit page in Elementor.
- Open questions: hosting (WordPress.com vs own host), Elementor Pro or free, test site URL.

## SEO checklist
- Rank Math or Yoast: title + description per page/product/article (set sensible defaults).
- Schema: HVACBusiness/LocalBusiness (address, phone, hours, service area), Product, Review.
- Sitemap + robots (plugin), fast theme, WebP images, cache plugin on host, alt text on all images.
- One H1 per page, clear H2s. FR/EN via Polylang or WPML (hreflang).
- Off-site (client): Google Business Profile (biggest local factor), collect reviews, directories (Yelp, Pages Jaunes).
- Content: guides + news (BTU sizing, LogisVert, Quebec climate), city pages (Laval, Longueuil) with real content.
- Honest: no guaranteed rankings. Connect Google Search Console (free) to track.
