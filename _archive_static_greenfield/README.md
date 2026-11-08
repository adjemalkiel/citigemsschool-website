# Citigems Bilingual School — marketing site

Static bilingual (FR default / EN) public site for **Citigems Bilingual School** (Cotonou). No build step; plain HTML, CSS, and JS.

## Open locally

From this directory:

```bash
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) (or any static file server). Language: header **FR | EN**, `?lang=en` / `?lang=fr`, or `localStorage` key `citigems-lang`.

## Pages

| Path | Role |
|------|------|
| `index.html` | Accueil — brand hero, mission, programmes strip, trust, contact |
| `programmes.html` | PN → B6 (Nursery + Primary) |
| `admissions.html` | Frais XOF 2026–2027, MTN/Moov, MECeF |
| `contact.html` | Canonical address / phones / email |

Assets: `public/citigems-logo.png` (copied from ERP `citigems_custom` public images).

## ERP / marketing URL contract

| Role | URL |
|------|-----|
| **Parents / élèves (Portail)** | `https://cs.devopsflows.com/login?redirect-to=/edu-portal` |
| **Personnel (Desk)** | `https://cs.devopsflows.com/login` |
| **ERP base** | `https://cs.devopsflows.com` |
| **Marketing (live)** | `https://citigemsschool.devopsflows.com` |
| **Marketing (canonical brand)** | `https://www.citigemsschool.com` (when DNS points here) |

After login, ERP role routing (Guardian / Student → `/edu-portal`, staff → `/app`) is owned by the `citigems_custom` app. Marketing CTAs always use `redirect-to=/edu-portal` for the family portal; staff use plain `/login`.

ERP may set `CITIGEMS_MARKETING_URL` (site_config) so the portal / login can link back here. Do not hardcode alternate phone/address variants from report covers; checklist `01_Etablissement` contacts are canonical:

- C/3227 Agla Agongbomey, Cotonou  
- 0149678853 / 0194835922  
- citigems2014@gmail.com  

## Design tokens (shared idea with ERP portal)

`--cg-red` `#ED1C24` · `--cg-gold` `#C9A227` · `--cg-ink` `#1a2b3c` · `--cg-accent` `#0d6e6e` · cool wash background · Source Sans 3 + Sora.
