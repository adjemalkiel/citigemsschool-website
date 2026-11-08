/* FR default + EN; ?lang= + localStorage */
(function () {
  var STORAGE_KEY = "citigems-lang";
  var dict = {
    "nav.home": { fr: "Accueil", en: "Home" },
    "nav.programmes": { fr: "Programmes", en: "Programmes" },
    "nav.admissions": { fr: "Admissions & frais", en: "Admissions & fees" },
    "nav.contact": { fr: "Contact", en: "Contact" },
    "nav.portal": { fr: "Espace école", en: "School portal" },
    "nav.portal.cta": { fr: "Portail parents / élèves", en: "Parent / student portal" },
    "nav.staff": { fr: "Connexion personnel", en: "Staff login" },

    "brand.name": {
      fr: "Citigems Bilingual School",
      en: "Citigems Bilingual School",
    },

    "hero.tagline": {
      fr: "École bilingue français–anglais · Cotonou",
      en: "French–English bilingual school · Cotonou",
    },
    "hero.discover": { fr: "Découvrir les programmes", en: "Explore programmes" },

    "home.why.title": { fr: "Pourquoi Citigems", en: "Why Citigems" },
    "home.why.lede": {
      fr: "Une fondation bilingue solide : enseignement en français et en anglais, du pré-maternelle au Basic 6, à Agla Agongbomey.",
      en: "A solid bilingual foundation: teaching in French and English, from Pre-Nursery through Basic 6, in Agla Agongbomey.",
    },

    "home.prog.title": { fr: "Programmes", en: "Programmes" },
    "home.prog.lede": {
      fr: "Du Pre-Nursery au Basic 6 — maternelle et primaire sous un même toit.",
      en: "From Pre-Nursery to Basic 6 — nursery and primary under one roof.",
    },
    "home.prog.link": { fr: "Voir le détail des niveaux →", en: "See levels in detail →" },

    "home.trust.title": { fr: "Vie scolaire & confiance", en: "School life & trust" },
    "home.trust.lede": {
      fr: "Tarifs publiés en XOF (FCFA), paiement Mobile Money (MTN / Moov) via le portail, facturation conforme MECeF.",
      en: "Published fees in XOF (FCFA), Mobile Money (MTN / Moov) via the portal, MECeF-compliant invoicing.",
    },
    "home.trust.note": {
      fr: "Les montants affichés sont indicatifs pour 2026–2027 ; le détail exact figure sur votre facture dans le portail.",
      en: "Amounts shown are indicative for 2026–2027; exact figures appear on your invoice in the portal.",
    },

    "home.contact.title": { fr: "Nous trouver", en: "Find us" },
    "home.contact.cta": { fr: "Écrire ou appeler", en: "Email or call" },

    "prog.title": { fr: "Programmes", en: "Programmes" },
    "prog.lede": {
      fr: "Parcours bilingue du Pre-Nursery (PN) au Basic 6 (B6).",
      en: "Bilingual path from Pre-Nursery (PN) to Basic 6 (B6).",
    },
    "prog.nursery.title": { fr: "Nursery / Maternelle", en: "Nursery / Maternelle" },
    "prog.nursery.lede": {
      fr: "Éveil, pré-lecture, pré-mathématiques, anglais et français.",
      en: "Early learning, pre-reading, pre-maths, English and French.",
    },
    "prog.primary.title": { fr: "Primary / Primaire", en: "Primary / Primaire" },
    "prog.primary.lede": {
      fr: "Socle bilingue : mathématiques, français, English Language, sciences et valeurs.",
      en: "Bilingual core: mathematics, French, English Language, sciences and values.",
    },

    "adm.title": { fr: "Admissions & frais", en: "Admissions & fees" },
    "adm.lede": {
      fr: "Grille indicative 2026–2027 (scolarité annuelle, XOF). Inscription et frais annexes ci-dessous.",
      en: "Indicative 2026–2027 schedule (annual tuition, XOF). Registration and extras below.",
    },
    "adm.col.level": { fr: "Niveau", en: "Level" },
    "adm.col.fee": { fr: "Scolarité (XOF)", en: "Tuition (XOF)" },
    "adm.extras.title": { fr: "Frais communs", en: "Common fees" },
    "adm.extra.reg": { fr: "Inscription", en: "Registration" },
    "adm.extra.uniform": { fr: "Uniforme", en: "Uniform" },
    "adm.extra.supplies.n": { fr: "Fournitures (Nursery)", en: "Supplies (Nursery)" },
    "adm.extra.supplies.p": { fr: "Fournitures (Primary)", en: "Supplies (Primary)" },
    "adm.extra.canteen": { fr: "Cantine", en: "Canteen" },
    "adm.pay.title": { fr: "Paiement", en: "Payment" },
    "adm.pay.lede": {
      fr: "Payez les frais scolaires depuis le portail parents / élèves :",
      en: "Pay school fees from the parent / student portal:",
    },
    "adm.pay.mtn": { fr: "MTN Mobile Money", en: "MTN Mobile Money" },
    "adm.pay.moov": { fr: "Moov Money", en: "Moov Money" },
    "adm.pay.mecef": {
      fr: "Factures conformes e-MECeF (Bénin).",
      en: "Invoices compliant with e-MECeF (Benin).",
    },
    "adm.portal": { fr: "Ouvrir le portail", en: "Open the portal" },
    "adm.disclaimer": {
      fr: "Les sorties / activités extra-scolaires sont facturées séparément selon le calendrier. Montants susceptibles d’ajustement ; référence : grille interne 2026–2027.",
      en: "Trips / extracurriculars are billed separately per calendar. Amounts may be adjusted; reference: internal 2026–2027 schedule.",
    },

    "contact.title": { fr: "Contact", en: "Contact" },
    "contact.lede": {
      fr: "Citigems Bilingual School — Cotonou, Bénin.",
      en: "Citigems Bilingual School — Cotonou, Benin.",
    },
    "contact.address.label": { fr: "Adresse", en: "Address" },
    "contact.phone.label": { fr: "Téléphone", en: "Phone" },
    "contact.email.label": { fr: "E-mail", en: "Email" },
    "contact.web.label": { fr: "Site", en: "Website" },
    "contact.map": {
      fr: "Emplacement prêt pour une carte — C/3227 Agla Agongbomey, Cotonou",
      en: "Map-ready location — C/3227 Agla Agongbomey, Cotonou",
    },
    "contact.hours": {
      fr: "Pour les inscriptions, contactez-nous par téléphone ou e-mail. Le suivi des frais se fait via le portail.",
      en: "For admissions, contact us by phone or email. Fee follow-up is via the portal.",
    },

    "footer.rights": {
      fr: "Citigems Bilingual School · Cotonou",
      en: "Citigems Bilingual School · Cotonou",
    },
    "footer.ifu": {
      fr: "Facturation e-MECeF · Powered by DevOps",
      en: "e-MECeF invoicing · Powered by DevOps",
    },
  };

  function resolveLang() {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = (params.get("lang") || "").toLowerCase();
    if (fromQuery === "en" || fromQuery === "fr") return fromQuery;
    try {
      var stored = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
      if (stored === "en" || stored === "fr") return stored;
    } catch (_) {}
    return "fr";
  }

  function setLang(lang) {
    lang = lang === "en" ? "en" : "fr";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = dict[key];
      if (!entry) return;
      var text = entry[lang] || entry.fr || "";
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var entry = dict[key];
      if (entry) el.setAttribute("aria-label", entry[lang] || entry.fr);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    var url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }

  function bind() {
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
    setLang(resolveLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }

  window.CitigemsI18n = { setLang: setLang, resolveLang: resolveLang, dict: dict };
})();
