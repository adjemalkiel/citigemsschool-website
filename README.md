# Citigems Bilingual School — marketing site (Kinez Next.js template)

Next.js school/kindergarten template (**Kinez**) lightly branded for **Citigems Bilingual School**. Live: https://citigemsschool.com

## Homepage templates

| Route | Component |
|-------|-----------|
| `/` | Home One (`src/components/homes/home-1`) — **default live** |
| `/home-2` | Home Two |
| `/home-3` | Home Three |

Do not replace this with a greenfield static site. Brand changes = text + color (+ logo) only.

## Canonical school copy

- Name: Citigems Bilingual School  
- Address: C/3227 Agla Agongbomey, Cotonou  
- Phones: 01 49 67 88 53 / 01 94 83 59 22  
- Email: citigems2014@gmail.com  
- Colors: red `#ED1C24`, gold `#FCDA1E`

## Deploy (devops-docker)

App path: `/home/devopserp/citigemsschool-web`  
Compose: `compose.prod.yml` (Next.js `build` → port `127.0.0.1:3030`)  
Caddy: `citigemsschool.com` / `www.citigemsschool.com` → `:3030`

```bash
ssh devops-docker 'cd /home/devopserp/citigemsschool-web && docker compose -f compose.prod.yml up -d --build'
```

ERP portal links (use only if adding CTAs that already fit the template IA):

- Parents: `https://erp.citigemsschool.com/login?redirect-to=/edu-portal`
- Staff: `https://erp.citigemsschool.com/login`

`_archive_static_greenfield/` holds the discarded plain-HTML rebuild (not live).
