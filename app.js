// Joe Miz — portfolio index.
(function () {
  'use strict';

  var SITES = [
    // Wave 2 — Jamesburg / 08831 area (added 2026-07-09)
    { name: "Gene's Hot Diggity Dog",     slug: "genes-hot-diggity-dog",  type: "Hot dog cart",           cat: "Food",     loc: "Jamesburg, NJ" },
    { name: "John's Barber & Styling",    slug: "johns-barber-styling",   type: "Barbershop",             cat: "Grooming", loc: "Jamesburg, NJ" },
    { name: "Seniors Barber Shop",        slug: "seniors-barber-shop",    type: "Barbershop",             cat: "Grooming", loc: "Jamesburg, NJ" },
    { name: "The Fade Room",              slug: "the-fade-room",          type: "Barbershop",             cat: "Grooming", loc: "Jamesburg, NJ" },
    { name: "Ralph's Barber Shop",        slug: "rafaels-barber",         type: "Barbershop",             cat: "Grooming", loc: "Spotswood, NJ" },
    { name: "Mi Sazón Dominicano",        slug: "mi-sazon-dominicano",    type: "Dominican restaurant",   cat: "Food",     loc: "Jamesburg, NJ" },
    { name: "El Rincón De Mi Tierra",     slug: "el-rincon-mi-tierra",    type: "Mexican restaurant",     cat: "Food",     loc: "Hillsborough, NJ" },
    { name: "Four Boys Ice Cream",        slug: "four-boys-ice-cream",    type: "Ice cream shop",         cat: "Food",     loc: "Jamesburg, NJ" },
    { name: "Golden Garden",              slug: "golden-garden",          type: "Chinese restaurant",     cat: "Food",     loc: "Jamesburg, NJ" },
    { name: "Don Pepe Peruvian",          slug: "don-pepe-peruvian",      type: "Peruvian restaurant",    cat: "Food",     loc: "Jamesburg, NJ" },
    { name: "G's Famous Pizza (Guallpa's)", slug: "gs-famous-pizza",      type: "Pizzeria",               cat: "Food",     loc: "Iselin, NJ", badge: "Online ordering" },
    { name: "Metro Pizzeria",             slug: "metro-pizzeria-iselin",  type: "Pizzeria & desi specials", cat: "Food",   loc: "Iselin, NJ", badge: "Online ordering" },
    { name: "NJ Buy Here Pay Here",       slug: "nj-buy-here",            type: "Used-car dealer",        cat: "Auto",     loc: "Perth Amboy, NJ" },
    { name: "Melissa's Bakery",           slug: "melissas-bakery",        type: "Mexican bakery & comedor",cat: "Food",    loc: "Bound Brook, NJ", badge: "Online ordering" },
    { name: "Legend Barber Shop",         slug: "legend-barber",          type: "Barbershop",             cat: "Grooming", loc: "Somerset, NJ" },
    { name: "Parlin Discount Tire",       slug: "parlin-tire",            type: "Tire shop",              cat: "Auto",     loc: "Parlin, NJ" },
    { name: "Taquería La Morenita",       slug: "la-morenita",            type: "Taquería",               cat: "Food",     loc: "New Brunswick, NJ" },
    { name: "Fajitas Mexican Restaurant", slug: "fajitas-mexican",       type: "Mexican restaurant",     cat: "Food",     loc: "North Brunswick, NJ", badge: "Online ordering" },
    { name: "Two Costas Bakery & Deli",   slug: "two-costas-bakery",      type: "Portuguese bakery & deli", cat: "Food",   loc: "Linden, NJ" },
    { name: "Irv's Auto Detailing",       slug: "irvs-auto-detailing",    type: "Auto detailing",         cat: "Auto",     loc: "Linden, NJ" },
    { name: "Staś Deli & Meat Products",  slug: "stas-deli",              type: "Polish deli & butcher",  cat: "Food",     loc: "Rahway, NJ" },
    { name: "$1.99 Organic Dry Cleaners", slug: "199-organic-cleaners",   type: "Dry cleaner",            cat: "Services", loc: "Colonia, NJ" },
    { name: "Old Time Bagels",            slug: "old-time-bagels",        type: "Bagel shop",             cat: "Food",     loc: "Hazlet, NJ" },
    { name: "Famiglia Pizzeria & Ristorante", slug: "famiglia-bistro",    type: "Pizzeria & ristorante",  cat: "Food",     loc: "Matawan, NJ", badge: "Online ordering" },
    { name: "Kingsman Grooming & Shave Parlor", slug: "kingsman-grooming", type: "Barbershop & shave parlor", cat: "Grooming", loc: "Milltown, NJ" },
    { name: "Lebron Auto Repair",         slug: "lebron-auto-repair",     type: "Auto repair",            cat: "Auto",     loc: "Rahway, NJ" },
    { name: "Bianca's Deli",              slug: "biancas-deli",           type: "Mexican deli",           cat: "Food",     loc: "Rahway, NJ", badge: "Online ordering" },
    { name: "Galaxy Nail Salon",          slug: "galaxy-nail-salon",      type: "Nail salon",             cat: "Grooming", loc: "Woodbridge, NJ" },
    { name: "Szucs' Service Station",     slug: "szucs-service-station",  type: "Auto repair",            cat: "Auto",     loc: "Perth Amboy, NJ" },
    { name: "Landview Landscape",         slug: "landview-landscape",     type: "Landscaping",            cat: "Services", loc: "Manville, NJ" },
    { name: "Alquimia Bakery & Café",     slug: "alquimia-bakery",        type: "Bakery & café",          cat: "Food",     loc: "Perth Amboy, NJ" },
    { name: "La Guelaguetza",             slug: "la-guelaguetza",         type: "Oaxacan store",          cat: "Retail",   loc: "New Brunswick, NJ" },
    { name: "Botánica Santa Barbara",     slug: "botanica-santa-barbara", type: "Botánica",               cat: "Retail",   loc: "New Brunswick, NJ" },
    { name: "Mike's Sub Shop",            slug: "mikes-sub-shop",         type: "Sub shop",               cat: "Food",     loc: "Keyport, NJ" },
    { name: "Liberty Barbershop & Salon", slug: "liberty-barbershop",     type: "Barbershop & salon",     cat: "Grooming", loc: "Fords, NJ" },
    { name: "Rahway Barber Shop",         slug: "rahway-barbershop",      type: "Barbershop",             cat: "Grooming", loc: "Rahway, NJ" }
  ];

  var grid = document.querySelector('[data-grid]');
  var esc = function (s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; };

  SITES.forEach(function (s) {
    var url = 'https://joe-miz.com/' + s.slug + '/';
    var a = document.createElement('a');
    a.className = 'tile';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('data-cat', s.cat);
    a.innerHTML =
      '<div class="tile-shot">' +
        (s.badge ? '<span class="tile-badge">' + esc(s.badge) + '</span>' : '') +
        '<img loading="lazy" src="assets/thumbs/' + s.slug + '.jpg" alt="' + esc(s.name) + ' website">' +
        '<div class="tile-view"><span>View live &nbsp;↗</span></div>' +
      '</div>' +
      '<div class="tile-body">' +
        '<span class="tile-cat">' + esc(s.type) + '</span>' +
        '<span class="tile-name">' + esc(s.name) + '</span>' +
        '<span class="tile-loc">' + esc(s.loc) + '</span>' +
        '<span class="tile-url">joe-miz.com/' + esc(s.slug) + '</span>' +
      '</div>';
    grid.appendChild(a);
  });

  // reveal
  var tiles = Array.prototype.slice.call(document.querySelectorAll('.tile'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.06, rootMargin: '0px 0px -4% 0px' });
    tiles.forEach(function (t) { io.observe(t); });
  } else {
    tiles.forEach(function (t) { t.classList.add('in'); });
  }

  // filters
  var filters = document.querySelector('[data-filters]');
  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('.chip'); if (!btn) return;
    filters.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
    btn.classList.add('active');
    var f = btn.getAttribute('data-filter');
    tiles.forEach(function (t) {
      var show = f === 'all' || t.getAttribute('data-cat') === f;
      t.classList.toggle('hide', !show);
    });
  });
})();
