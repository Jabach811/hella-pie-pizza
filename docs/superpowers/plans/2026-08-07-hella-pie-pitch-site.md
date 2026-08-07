# Hella Pie Pitch Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the two-page "neon parlor" pitch prototype for Hella Pie Pizza Company per the approved spec at `docs/superpowers/specs/2026-08-07-hella-pie-pitch-site-design.md`.

**Architecture:** Static site — two HTML pages sharing one stylesheet and one small script. No framework, no build step. Open the files in a browser and it works.

**Tech Stack:** HTML, CSS, vanilla JS. Google Fonts (Bungee, Archivo, VT323). Photos from `assets/official/` plus one credited photo from `assets/listings/`.

**Verification style:** This project has no test framework and is a visual prototype — verification is running it in the browser preview (desktop 1280px and mobile 375px) per Joel's global CLAUDE.md, which overrides the TDD default. Every task ends with a preview check and a commit.

---

## File structure

```
index.html      homepage
menu.html       menu page
styles.css      all styles, shared
script.js       open-sign + mobile nav + sticky bar
images/         web-named copies of the chosen asset photos
docs/superpowers/data/menu-data.md   scraped real menu (created in Task 4)
```

Reference data used throughout (from the audit, verified 2026-08-07):
- Address: 50 W 10th St, Tracy, CA 95376 · Phone: (209) 237-2034
- Hours: Sun 12–6, Mon 12–7, Tue closed, Wed 12–7, Thu 12–7, Fri 12–8, Sat 12–8 (America/Los_Angeles)
- Rating: 4.6 stars, 351 Yelp reviews · Founded 2017, storefront since Oct 2020
- Order link (all Order buttons): https://hellapiepizza.com/order

---

### Task 1: Images and page skeletons

**Files:**
- Create: `images/` (copies from `assets/`)
- Create: `index.html`
- Create: `menu.html`

- [ ] **Step 1: Copy and rename photos**

```bash
cd "/c/Dev/Joel's Workspaces/Personal/Work/Websites/Hella Pie"
mkdir -p images
cp assets/official/large-pepperoni.webp      images/hero-pepperoni.webp
cp assets/official/large-margherita.jpg      images/margherita.jpg
cp assets/official/vegan-margherita.jpg      images/vegan-margherita.jpg
cp assets/official/personal-pan-pizza.jpg    images/personal-pan.jpg
cp assets/official/small-round-pizza.jpg     images/small-round.jpg
cp assets/official/caesar-salad.jpg          images/caesar-salad.jpg
cp assets/official/storefront.webp           images/storefront.webp
cp assets/official/slice-car.webp            images/slice-case.webp
cp assets/listings/breadstone-mobile-oven-trailer.jpeg images/story-trailer.jpeg
```

Note: `slice-case.webp` is 536KB — if it ends up used at card size, downscale it during Task 3 (any tool; target under 200KB). All others are already under 160KB and web-sized.

- [ ] **Step 2: Write `index.html` skeleton with full head**

Complete head block (this is the SEO fix the pitch brags about — do not trim it):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hella Pie Pizza Company — Wood-Fired Pizza in Downtown Tracy, CA</title>
  <meta name="description" content="Wood-fired pies, hand-twisted garlic knots, and browned-butter cookies on 10th Street in downtown Tracy. 4.6 stars across 351 reviews. Order online for pickup.">
  <link rel="canonical" href="https://hellapiepizza.com/">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Archivo:wght@400;700&family=VT323&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Hella Pie Pizza Company",
    "servesCuisine": "Pizza",
    "telephone": "+12092372034",
    "url": "https://hellapiepizza.com/",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 W 10th St",
      "addressLocality": "Tracy",
      "addressRegion": "CA",
      "postalCode": "95376",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {"@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday",    "opens": "12:00", "closes": "18:00"},
      {"@type": "OpeningHoursSpecification", "dayOfWeek": "Monday",    "opens": "12:00", "closes": "19:00"},
      {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday","Thursday"], "opens": "12:00", "closes": "19:00"},
      {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday","Saturday"],    "opens": "12:00", "closes": "20:00"}
    ],
    "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "351"}
  }
  </script>
</head>
<body>
  <header class="site-header">
    <a class="wordmark" href="index.html">HELLA PIE</a>
    <button class="nav-toggle" aria-expanded="false" aria-label="Open menu">☰</button>
    <nav class="site-nav">
      <a href="menu.html">Menu</a>
      <a href="index.html#find-us">Hours</a>
      <a class="btn-order" href="https://hellapiepizza.com/order">Order Now</a>
    </nav>
  </header>
  <main>
    <!-- sections filled in Task 3 -->
  </main>
  <footer class="site-footer">
    <p>Hella Pie Pizza Company · 50 W 10th St, Tracy, CA 95376 · <a href="tel:+12092372034">(209) 237-2034</a></p>
    <p><a href="https://www.instagram.com/hellapiepizzaco/">Instagram</a> · <a href="https://www.facebook.com/HellaPiePizza/">Facebook</a> · <a href="https://hellapiepizza.com/order">Order online</a></p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Write `menu.html` skeleton**

Same structure with these head differences (rest of head identical, including the JSON-LD):

```html
<title>Menu — Hella Pie Pizza Company | Pizza in Tracy, CA</title>
<meta name="description" content="The full Hella Pie lineup: specialty wood-fired pies, classics, hand-twisted garlic knots, house dips, and browned-butter chocolate chip cookies. Small and large, priced honestly.">
<link rel="canonical" href="https://hellapiepizza.com/menu">
```

Body: same header/footer; `<main>` empty until Task 4. Before `</body>`, add the mobile sticky bar:

```html
<div class="sticky-order"><a class="btn-order" href="https://hellapiepizza.com/order">Order Now</a></div>
```

- [ ] **Step 4: Verify in preview**

Open preview at `index.html`. Expected: unstyled header/footer text renders, no console errors, both pages load.

- [ ] **Step 5: Commit**

```bash
git add images/ index.html menu.html
git commit -m "Scaffold pages with SEO head, schema, and web-named images"
```

---

### Task 2: Stylesheet — tokens, header, footer, arcade kit

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Write the base + tokens + header/footer + arcade pieces**

```css
:root {
  --cream: #f6f1e7;
  --brick: #c9362b;
  --charcoal: #211f33;
  --teal: #2bbfae;
  --yellow: #ffd319;
  --font-display: "Bungee", sans-serif;
  --font-body: "Archivo", sans-serif;
  --font-digits: "VT323", monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--cream);
  color: var(--charcoal);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.55;
}
h1, h2, h3 { font-family: var(--font-display); font-weight: 400; line-height: 1.15; }
h2 { font-size: clamp(26px, 4vw, 40px); color: var(--brick); }
img { max-width: 100%; display: block; }
a { color: var(--teal); }

/* Header */
.site-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 24px; background: var(--cream);
  border-bottom: 3px solid var(--charcoal);
  position: sticky; top: 0; z-index: 10;
}
.wordmark { font-family: var(--font-display); font-size: 22px; color: var(--brick); text-decoration: none; }
.site-nav { display: flex; gap: 22px; align-items: center; }
.site-nav a { color: var(--charcoal); text-decoration: none; font-weight: 700; }
.nav-toggle { display: none; background: none; border: 0; font-size: 26px; color: var(--charcoal); }

/* Arcade kit — the complete costume */
.btn-order {
  font-family: var(--font-display); font-size: 15px;
  color: #fff !important; background: var(--brick);
  padding: 12px 22px; border-radius: 8px; text-decoration: none;
  box-shadow: 0 0 18px rgba(201,54,43,.8), 0 0 40px rgba(201,54,43,.35);
}
.open-sign {
  font-family: var(--font-digits); font-size: 26px;
  color: var(--teal); text-shadow: 0 0 10px rgba(43,191,174,.9);
}
.open-sign.closed { color: var(--brick); text-shadow: 0 0 10px rgba(201,54,43,.9); }
.digits { font-family: var(--font-digits); color: var(--brick); }
.checker {
  height: 14px; border: 0; margin: 0;
  background: repeating-linear-gradient(90deg, var(--brick) 0 14px, var(--cream) 14px 28px);
}

/* Sections */
section { padding: 56px 24px; max-width: 1080px; margin: 0 auto; }
.dark { background: var(--charcoal); color: #fff; max-width: none; }
.dark > .inner { max-width: 1080px; margin: 0 auto; }
.dark h2 { color: var(--yellow); }

/* Footer */
.site-footer { background: var(--charcoal); color: #b9b6d0; text-align: center; padding: 28px 24px; font-size: 14px; }
.site-footer a { color: var(--teal); }

/* Sticky mobile order bar (shown via script on menu page) */
.sticky-order { display: none; }

/* Mobile */
@media (max-width: 720px) {
  .nav-toggle { display: block; }
  .site-nav {
    display: none; position: absolute; top: 100%; left: 0; right: 0;
    background: var(--cream); border-bottom: 3px solid var(--charcoal);
    flex-direction: column; padding: 18px; text-align: center;
  }
  .site-nav.open { display: flex; }
  .sticky-order.on {
    display: block; position: fixed; bottom: 0; left: 0; right: 0;
    background: var(--charcoal); padding: 12px; text-align: center; z-index: 20;
  }
}
```

- [ ] **Step 2: Verify in preview**

Reload preview. Expected: cream page, sticky charcoal-bordered header, glowing red Order Now, footer dark. At 375px the nav collapses to the ☰ button.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "Add design tokens, header/footer, and arcade component styles"
```

---

### Task 3: Homepage sections

**Files:**
- Modify: `index.html` (fill `<main>`)
- Modify: `styles.css` (append section styles)

- [ ] **Step 1: Write the five sections into `<main>`**

```html
<section class="hero dark"><div class="inner hero-grid">
  <div>
    <p class="kicker">DOWNTOWN TRACY · EST 2017</p>
    <h1>HELLA GOOD PIZZA.<br>NO, SERIOUSLY.</h1>
    <p>Wood-fired pies, hand-twisted garlic knots, and browned-butter chocolate chip cookies from a little shop on 10th Street.</p>
    <p><a class="btn-order" href="https://hellapiepizza.com/order">Order Now</a></p>
    <p class="open-sign" id="open-sign">● CHECKING HOURS…</p>
  </div>
  <img src="images/hero-pepperoni.webp" alt="Large wood-fired pepperoni pizza with cup-and-char pepperoni">
</div></section>

<hr class="checker">

<section id="greatest-hits">
  <h2>GREATEST HITS</h2>
  <div class="hits-grid">
    <!-- one figure per star pizza; photo set from images/, exact lineup finalized
         against menu-data.md in Task 4 (Spice Spice Baby, CBR, Margherita, White Pie) -->
    <figure><img src="images/margherita.jpg" alt="Margherita pizza with fresh mozzarella and basil"><figcaption>Margherita</figcaption></figure>
    <figure><img src="images/vegan-margherita.jpg" alt="Vegan margherita pizza"><figcaption>Vegan Margherita</figcaption></figure>
    <figure><img src="images/personal-pan.jpg" alt="Personal pan pizza"><figcaption>Personal Pan</figcaption></figure>
    <figure><img src="images/small-round.jpg" alt="Small round pizza"><figcaption>Small Round</figcaption></figure>
  </div>
</section>

<section class="dark"><div class="inner story-grid">
  <img src="images/story-trailer.jpeg" alt="Hella Pie's original mobile wood-fired oven trailer">
  <div>
    <h2>FROM A TRAILER TO 10TH STREET</h2>
    <p>Hella Pie started in 2017 as a mobile wood-fired pizzeria towed around Tracy. In October 2020 they took over a downtown bakery and never looked back. Same oven obsession, permanent address.</p>
    <p class="credit">Trailer photo courtesy of Breadstone Ovens.</p>
  </div>
</div></section>

<hr class="checker">

<section id="scoreboard">
  <h2>HIGH SCORES</h2>
  <p class="digits big">★ 4.6 / 5 — 351 REVIEWS</p>
  <div class="quotes">
    <blockquote>"Some of the best pizza I've ever had. Crispy crust, a little char, no flop."<cite>— Isaac G., Yelp</cite></blockquote>
    <blockquote>"My go-to shop in Tracy."<cite>— Paul G., Yelp</cite></blockquote>
  </div>
</section>

<section class="dark" id="find-us"><div class="inner find-grid">
  <div>
    <h2>FIND US</h2>
    <p>50 W 10th St, Tracy, CA 95376<br><a href="tel:+12092372034">(209) 237-2034</a></p>
    <table class="hours digits" id="hours-table">
      <tr><td>Sun</td><td>12–6</td></tr>
      <tr><td>Mon</td><td>12–7</td></tr>
      <tr><td>Tue</td><td>Closed</td></tr>
      <tr><td>Wed–Thu</td><td>12–7</td></tr>
      <tr><td>Fri–Sat</td><td>12–8</td></tr>
    </table>
    <p><a href="https://google.com/maps/place?q=Hella+Pie+Pizza+Company%2C+50+West+10th+Street%2C+Tracy%2C+CA+95376">Get directions</a></p>
  </div>
  <img src="images/storefront.webp" alt="Hella Pie Pizza Company storefront in downtown Tracy">
</div></section>
```

- [ ] **Step 2: Append the section styles to `styles.css`**

```css
/* Homepage */
.kicker { font-family: var(--font-digits); font-size: 18px; letter-spacing: 3px; color: var(--teal); }
.hero h1 { font-size: clamp(30px, 5vw, 52px); color: #fff; margin: 8px 0 14px; }
.hero-grid, .story-grid, .find-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.hero-grid img, .story-grid img, .find-grid img { border-radius: 12px; }
.hits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.hits-grid img { border-radius: 10px; aspect-ratio: 1; object-fit: cover; }
.hits-grid figcaption { font-family: var(--font-display); font-size: 13px; margin-top: 8px; text-align: center; }
.digits.big { font-size: 34px; }
.quotes { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
blockquote { margin: 0; border-left: 4px solid var(--yellow); padding-left: 16px; font-size: 18px; }
cite { display: block; margin-top: 8px; font-size: 14px; color: #777; }
.credit { font-size: 13px; color: #b9b6d0; }
.hours td { padding: 2px 18px 2px 0; font-size: 22px; }
.hours td:first-child { color: inherit; }

@media (max-width: 720px) {
  .hero-grid, .story-grid, .find-grid, .hits-grid, .quotes { grid-template-columns: 1fr; }
  .hits-grid { grid-template-columns: 1fr 1fr; }
  .story-grid img { order: 2; }
}
```

- [ ] **Step 3: Verify in preview**

Desktop and 375px. Expected: five sections render with photos, checkerboard dividers between light sections, no horizontal scroll at 375px, hero image and text stack on mobile. Open sign still reads "CHECKING HOURS…" (script comes in Task 5).

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "Build homepage: hero, greatest hits, story, scoreboard, find us"
```

---

### Task 4: Real menu data, then the menu page

**Files:**
- Create: `docs/superpowers/data/menu-data.md`
- Modify: `menu.html` (fill `<main>`)
- Modify: `styles.css` (append card styles)

- [ ] **Step 1: Scrape the real menu from Toast**

Open `https://hellapiepizza.com/menu` in the browser tool. For every category, record item name, description/ingredients, and small/large prices into `docs/superpowers/data/menu-data.md` as a table per category (Pizzas Small, Pizzas Large, Starters, Sauces & Sweets, Drinks). The site is client-rendered — read prices via `get_page_text` or `javascript_tool`, not fetch. Categories known from the audit sitemap: Starters (caesar salad, garlic knots), Build-your-own (small/large round, sicilian, personal pan), Classics (cheese, pepperoni, margherita, vegan margherita), Specialty small+large (CBR, Noni & Nono, Hella Sanctioned, White Pie, Spice Spice Baby, Combination, Zito, Hawaiian), Sicilian, Pan, Sauces & Sweets (ranch cup, hot honey cup/jars, Delta dip, brown butter choc chip cookie), Drinks (soda, water, tea, Monster, Izzy's Italian soda).

- [ ] **Step 2: Commit the data**

```bash
git add docs/superpowers/data/menu-data.md
git commit -m "Record real Toast menu items and prices"
```

- [ ] **Step 3: Build `menu.html` main**

Structure — "The Lineup" hero then one section per category. Specialty pies and classics use diner-ticket cards; drinks and sauces use compact rows. Card and row markup (repeat per item, with real data from menu-data.md):

```html
<section class="dark lineup"><div class="inner">
  <h1>THE LINEUP</h1>
  <nav class="jump digits">
    <a href="#pies">PIZZAS</a> · <a href="#starters">STARTERS</a> ·
    <a href="#sweets">SAUCES &amp; SWEETS</a> · <a href="#drinks">DRINKS</a>
  </nav>
</div></section>

<section id="pies">
  <h2>SPECIALTY PIES</h2>
  <div class="ticket-grid">
    <article class="ticket">
      <img src="images/hero-pepperoni.webp" alt="Large pepperoni pizza">
      <div class="ticket-body">
        <div class="ticket-top"><h3>PEPPERONI</h3><span class="digits price">SM 00 · LG 00</span></div>
        <p>Cup-and-char pepperoni, house red sauce, mozzarella</p>
        <span class="badge">FAN FAVE</span>
      </div>
    </article>
    <!-- one <article class="ticket"> per specialty pie and classic, prices from menu-data.md.
         Items without a photo in assets: omit the <img>, keep the card. Badge only on the
         2-3 pies Yelp reviewers name most (Spice Spice Baby, Pepperoni, CBR). -->
  </div>
</section>

<section id="starters"><h2>STARTERS &amp; KNOTS</h2>
  <!-- garlic knots get a ticket card with the biggest photo slot; caesar salad a ticket
       card with images/caesar-salad.jpg -->
</section>

<section id="sweets"><h2>SAUCES &amp; SWEETS</h2>
  <ul class="rows">
    <li><span>Ranch cup</span><span class="digits">0.00</span></li>
    <!-- one li per sauce/sweet from menu-data.md -->
  </ul>
</section>

<section id="drinks"><h2>DRINKS</h2>
  <ul class="rows">
    <li><span>Soda</span><span class="digits">0.00</span></li>
    <!-- one li per drink from menu-data.md -->
  </ul>
</section>
```

(The `00`/`0.00` values above are stand-ins only within this plan; the build step fills every one from `menu-data.md` — no placeholder prices may survive into the committed page.)

- [ ] **Step 4: Append card styles**

```css
/* Menu page */
.lineup h1 { color: #fff; font-size: clamp(28px, 4vw, 44px); }
.jump a { color: var(--teal); text-decoration: none; font-size: 20px; }
.ticket-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ticket {
  background: #fff; border: 2px solid var(--charcoal); border-radius: 12px;
  overflow: hidden; box-shadow: 5px 5px 0 var(--charcoal);
}
.ticket img { height: 170px; width: 100%; object-fit: cover; }
.ticket-body { padding: 14px; }
.ticket-top { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.ticket h3 { font-size: 15px; margin: 0; }
.ticket .price { font-size: 21px; white-space: nowrap; }
.ticket p { font-size: 14px; color: #555; margin: 6px 0 10px; border-top: 2px dashed #ccc; padding-top: 10px; }
.badge { font-family: var(--font-display); font-size: 10px; background: var(--yellow); padding: 4px 8px; border-radius: 4px; }
.rows { list-style: none; padding: 0; max-width: 560px; }
.rows li { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #ddd; }
.rows .digits { font-size: 20px; }

@media (max-width: 900px) { .ticket-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .ticket-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 5: Verify in preview**

Desktop and 375px. Expected: jump links scroll to sections, tickets 3-across desktop / 1-across phone, every price is a real number, no horizontal scroll.

- [ ] **Step 6: Commit**

```bash
git add menu.html styles.css
git commit -m "Build menu page with diner-ticket cards and real prices"
```

---

### Task 5: Script — open sign, mobile nav, sticky bar

**Files:**
- Create: `script.js`

- [ ] **Step 1: Write the complete script**

```js
// Hours in America/Los_Angeles; 24h floats. null = closed.
const HOURS = [
  { open: 12, close: 18 }, // Sun
  { open: 12, close: 19 }, // Mon
  null,                    // Tue
  { open: 12, close: 19 }, // Wed
  { open: 12, close: 19 }, // Thu
  { open: 12, close: 20 }, // Fri
  { open: 12, close: 20 }, // Sat
];

const sign = document.getElementById("open-sign");
if (sign) {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const today = HOURS[now.getDay()];
  const hr = now.getHours() + now.getMinutes() / 60;
  const fmt = h => (h > 12 ? h - 12 : h) + (h >= 12 ? "PM" : "AM");
  if (today && hr >= today.open && hr < today.close) {
    sign.textContent = "● OPEN TIL " + fmt(today.close);
  } else {
    sign.textContent = "● CLOSED — SEE HOURS";
    sign.classList.add("closed");
  }
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle) toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

const bar = document.querySelector(".sticky-order");
if (bar) bar.classList.add("on");
```

- [ ] **Step 2: Verify in preview**

Homepage: sign shows the correct live status (cross-check against the HOURS table for today). Temporarily change today's entry to `null`, reload, confirm the closed state renders red, then restore it. Mobile 375px: ☰ opens and closes the nav; menu page shows the sticky Order bar at the bottom.

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "Add open-sign logic, mobile nav, sticky order bar"
```

---

### Task 6: Final quality pass

**Files:**
- Modify: any of the above as needed

- [ ] **Step 1: Run through the checklist in preview**

- 375px and 1280px: no horizontal scroll on either page
- Every `<img>` has accurate alt text (describe what is actually in the photo — this was an audit finding on their live site)
- Exactly one `<h1>` per page; heading levels don't skip
- All Order buttons/links point to `https://hellapiepizza.com/order`
- Phone link is `tel:+12092372034`; address text reads 95376 everywhere
- Contrast spot-check: teal-on-charcoal and yellow-on-charcoal for small text — if any fails a squint test, bump size or swap to cream
- Console: zero errors on both pages

- [ ] **Step 2: Fix anything the checklist caught, re-verify**

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Final quality pass: a11y, contrast, consistency"
```
