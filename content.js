/**
 * CONTENUTO SITO MATRIMONIO
 * =========================
 * Modifica questo file per aggiornare tutti i contenuti del sito.
 * Solo in italiano.
 */

const CONTENT = {

  /* ── Coppia ──────────────────────────────────────────────── */
  couple: {
    name1:     "Tsina",
    name2:     "Simone",
    ampersand: "&",
    tagline:   "Due cuori, una storia",
    subtitle:  "si sposano",
  },

  /* ── Data del matrimonio ────────────────────────────────── */
  date: {
    iso:     "2026-10-17T17:00:00",
    display: "17 Ottobre 2026",
    day:     "Sabato",
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    backgroundImage:       "images/background.jpeg",
    backgroundImageMobile: "images/background-mobile.jpeg",
    overlayOpacity:        0.38,
    venueLabel:            "Castello di Rosciano · Umbria, Italia",
  },

  /* ── Nav ─────────────────────────────────────────────────── */
  nav: {
    story:    "Storia",
    details:  "Dettagli",
    schedule: "Programma",
    venue:    "Location",
    faq:      "FAQ",
    gifts:    "Regalo",
    rsvp:     "RSVP",
  },

  /* ── La Nostra Storia ───────────────────────────────────── */
  story: {
    sectionTitle: "La Nostra Storia",
    intro: "Il sogno di Tsina era diventare medico. Nella sua immaginazione, il mondo era come un piccolo globo che poteva far girare tra le mani: lo lasciò girare e posò il dito su Perugia, Italia. Non sapeva che in una strada silenziosa nel cuore della città avrebbe trovato un ingegnere dai capelli rossi, pronto a cambiare silenziosamente il corso della sua storia per sempre.\n\nE così, quasi per caso e quasi per destino, i loro cammini si incrociarono. Un incontro divenne una conversazione, una conversazione divenne amore, e l'amore crebbe attraverso innumerevoli piccoli addii e infiniti traslochi tra case. Finché non capirono che casa non era un luogo, ma qualcosa che erano l'uno per l'altra.\n\nAll'inizio della loro relazione, Tsina chiese a Simone: \"Se mi trasferissi in Israele, verresti con me?\" E Simone, con la certezza di chi non sa ancora cosa riserva il futuro, rispose: \"Certo.\"\n\nPassarono gli anni, e ciò che sembrava impossibile divenne reale: Tsina fu ammessa ai suoi studi in Israele. Simone scelse di seguirla senza esitazione. Ma il mondo si fermò un momento, e gli eventi del 7 ottobre 2023 ritardarono il suo arrivo in Terra Santa di quasi un anno.\n\nE così, dopo tutto il viaggio, si ritrovarono e costruirono la loro vita insieme a Ramat Gan — due cuori che viaggiarono lontano solo per scoprire di essere sempre appartenuti allo stesso posto. Ora si trovano all'inizio della loro più grande avventura: una famiglia.",
    images: [
      { src: "images/story/story1.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story2.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story3.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story4.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story5.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story6.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story7.jpg", alt: "Tsina e Simone" },
      { src: "images/story/story8.png", alt: "Tsina e Simone" },
    ],
  },

  /* ── Dettagli dell'evento ───────────────────────────────── */
  details: {
    sectionTitle: "Il Giorno",
    cards: [
      {
        icon:  "💍",
        title: "Sabato 17 – Cerimonia, Cena & Festa",
        lines: ["Gli eventi inizieranno dalle 16:30", "Castello di Rosciano, Umbria", "Dress code: formal attire or festive attire"],
      },
    ],
  },

  /* ── Programma (Sabato) ─────────────────────────────────── */
  schedule: {
    sectionTitle: "Il Programma di Sabato",
    subtitle:     "Il giorno del matrimonio",
    items: [
      {
        time:  "16:30",
        label: "Accoglienza degli ospiti con finger food",
        note:  "",
      },
      {
        time:  "17:30",
        label: "Cerimonia",
        note:  "",
      },
      {
        time:  "18:00",
        label: "Aperitivo",
        note:  "",
      },
      {
        time:  "20:00",
        label: "Inizio cena",
        note:  "",
      },
      {
        time:  "22:00",
        label: "Festa!",
        note:  "",
      },
    ],
  },

  /* ── Location ───────────────────────────────────────────── */
  venue: {
    sectionTitle:    "La Location",
    name:            "Castello di Rosciano",
    website:         "https://www.castellodirosciano.com/en/",
    description:     "Immerso nei boschi di lecci tra Assisi e Perugia, il Castello di Rosciano è una dimora medievale del XII secolo con vista mozzafiato sull'intera Valle Umbra. Un luogo magico dove la storia e la natura si fondono in un'atmosfera indimenticabile.",
    address:         "Castello di Rosciano, Torgiano (PG), Umbria, Italia",
    mapsEmbedUrl:    "https://maps.google.com/maps?q=Castello+di+Rosciano,+Torgiano,+PG,+Italy&output=embed&z=15",
    directionsUrl:   "https://maps.google.com/?q=Castello+di+Rosciano+Torgiano+Perugia",
    directionsLabel: "Indicazioni stradali",
    websiteLabel:    "Sito del castello",
    plan: {
      src:      "images/castle-map.jpg",
      title:    "Mappa del Castello",
      caption:  "Per orientarvi durante il weekend: la planimetria del castello con le camere, la cappella, la piscina e gli spazi della festa. Cliccate sulla mappa per ingrandirla.",
      alt:      "Planimetria del Castello di Rosciano",
      zoomHint: "Ingrandisci",
      // Tour virtuali 3D Matterport degli interni del castello
      toursLabel: "Esplorate il castello in 3D",
      tours: [
        { label: "Sala Lingarda e Suite", url: "https://my.matterport.com/show/?m=AfStDxfKhZj&play=1&utm_source=3" },
        { label: "Salone Tancredi",       url: "https://my.matterport.com/show/?m=sSXZVHaE4aP&play=1&utm_source=3" },
      ],
    },
  },

  /* ── FAQ ────────────────────────────────────────────────── */
  faq: {
    sectionTitle: "Domande Frequenti",
    items: [
      {
        q: "C'è un dress code?",
        a: "Sì: abbigliamento elegante. Abiti lunghi per le signore, abito scuro per gli uomini. Evitate il bianco, grazie!",
      },
      {
        q: "Posso portare i bambini?",
        a: "Il ricevimento è pensato per adulti. Contattaci se hai necessità particolari.",
      },
      {
        q: "Ci sono opzioni per intolleranze alimentari?",
        a: "Assolutamente sì. Indicalo nel modulo RSVP.",
      },
      {
        q: "Posso usare l'hashtag sui social?",
        a: "Certo! Usa l'hashtag #TsinaSimone2026. Durante la cerimonia vi chiediamo però di tenere i telefoni in tasca.",
      },
      {
        q: "Entro quando devo confermare la presenza?",
        a: "Entro il 15 luglio 2026.",
      },
    ],
  },

  /* ── Regalo ─────────────────────────────────────────────── */
  gifts: {
    sectionTitle:  "Un Piccolo Pensiero",
    detailsToggle: "Per maggiori dettagli",
    intro:        "La vostra presenza è il regalo più bello. Se desiderate farci un dono, saremmo felici di un contributo per l'inizio della nostra vita insieme ❤️",
    options: [
      {
        icon:  "🏦",
        title: "Bonifico bancario",
        details: [
          { label: "Intestatario",    value: "Simone Giacomucci" },
          { label: "Indirizzo",       value: "via Treviso 20a, Foligno (PG), Italy" },
          { label: "IBAN",            value: "IT94T0306921705100000014703" },
          { label: "SWIFT/BIC",       value: "BCITITMM" },
          { label: "Banca",           value: "Intesa Sanpaolo SpA" },
          { label: "Indirizzo banca", value: "Piazza San Carlo 156, Torino 10121, Italy" },
        ],
        text:  "",
      },
      {
        icon:  "📱",
        title: "Bit o Paybox",
        text:  "Numero di telefono di Tsina: 0542021155",
      },
    ],
  },

  /* ── RSVP ───────────────────────────────────────────────── */
  rsvp: {
    sectionTitle: "Conferma la Presenza",
    intro:        "Non vediamo l'ora di festeggiare con voi! Compila il modulo e facci sapere se puoi venire.",
    formUrl:      "https://docs.google.com/forms/d/e/1FAIpQLSePOf0fOFnoASetgSa4TIOklyDqLKdyfeaE9SjtdfYHHBEfwA/viewform?embedded=true",
    formHeight:   1433,
    calendar: {
      label: "Aggiungi a Google Calendar",
      icon:  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5zm2 4h10v2H7zm0 4h7v2H7z"/></svg>`,
      url:   "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Matrimonio+Tsina+%26+Simone&dates=20261017T150000Z%2F20261018T000000Z&details=Cerimonia+e+festeggiamenti+al+Castello+di+Rosciano%2C+Torgiano+(PG)%2C+Umbria%2C+Italia.&location=Castello+di+Rosciano%2C+Torgiano%2C+PG%2C+Italia",
    },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    text: "Con amore, Tsina & Simone · 17 Ottobre 2026",
  },

};
