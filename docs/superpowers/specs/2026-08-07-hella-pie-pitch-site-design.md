# Hella Pie pitch site — design

Date: 2026-08-07
Status: approved by Joel

## What this is

A two-page prototype website for Hella Pie Pizza Company (Tracy, CA), built as a **pitch piece** to win the redesign work from the owner. It is not going live as-is. The current live site is a generic Toast template; this prototype shows what the business could have instead.

## Theme

**"Neon parlor"** — restrained 80s pizza-arcade. The site reads as a warm pizzeria first; the arcade is seasoning, not costume. Explicitly *not* campy: no "insert coin" jokes, no glitch effects, no wall-to-wall neon.

The complete arcade inventory (nothing else gets themed):
- Neon-glow **Order Now** button
- Neon **open/closed sign** driven by real hours
- Review section styled as a **high-score board** (VT323 digits, yellow stars)
- **Checkerboard stripe** as the section divider

## Pages

### Homepage (`index.html`)
Top to bottom:
1. Header — logo wordmark, links: Menu, Hours, Order Now (glowing)
2. Hero — big pepperoni glamour shot, tagline, Order Now button, neon open/closed sign showing live status
3. Greatest Hits — 4–6 star pizzas with photos
4. The Story — food-truck-to-storefront strip: 2017 mobile wood-fired start → 2020 takeover of the downtown bakery. One paragraph plus trailer photo.
5. Scoreboard — 4.6 stars, 351 reviews, 2–3 short real review quotes styled as high scores
6. Find Us — hours grid, address (50 W 10th St, Tracy, CA 95376), phone, Google Maps link, storefront photo
7. Footer — socials, Toast order link

### Menu page (`menu.html`)
1. Short "The Lineup" hero with category jump links (Pizzas · Sides · Sauces · Sweets · Drinks)
2. Specialty pies — **diner-ticket cards**: white card, hard offset charcoal shadow, photo on top, dashed tear-line above the price, VT323 prices (SM/LG), occasional "FAN FAVE" badge
3. Classics (cheese, pepperoni, margherita) — same cards
4. Knots, dips, cookies — garlic knots get the big photo (their signature item)
5. Drinks and simple sides — **compact rows** (photo left or no photo), so the ~50-item menu doesn't become an endless scroll
6. Mobile only: sticky bottom Order Now bar
7. All order actions link out to their existing Toast ordering page

## Visual system

Palette:
| Role | Color |
| --- | --- |
| Page background | Cream `#f6f1e7` |
| Brand / headings | Brick red `#c9362b` |
| Dark sections, footer | Charcoal navy `#211f33` |
| Accents, links | Teal `#2bbfae` |
| Stars, highlights | Arcade yellow `#ffd319` |

Type (Google Fonts):
- **Bungee** — headlines only
- **Archivo** — all reading text
- **VT323** — digits and labels only: prices, hours, scoreboard

## Voice

Short, confident, a little cocky; leans on the NorCal name without trying too hard. Example headlines: "Hella good pizza. No, seriously." / "The knots have a fan club." Body copy is plain and warm: wood-fired oven, 2017 food-truck origin, hometown Tracy. Arcade language appears only where arcade visuals already are. Real numbers do the bragging (4.6 stars, 351 reviews, est. 2017).

## Build

- Static: `index.html`, `menu.html`, one shared `styles.css`, one small `script.js`
- No framework, no build step
- JavaScript does exactly three jobs:
  1. Open/closed sign — computes status from a built-in hours table (Sun 12–6, Mon 12–7, Tue closed, Wed–Thu 12–7, Fri–Sat 12–8, America/Los_Angeles)
  2. Mobile nav toggle
  3. Sticky mobile Order Now bar
- Mobile-first responsive; no horizontal scroll at 375px

## Assets

- Site photos come from `assets/official/` only (pulled from Hella Pie's own site/Toast pages — safe to show in a pitch; confirm with the owner before any public use)
- Story-section trailer photo is from `assets/listings/` (Breadstone blog): used with a visible "photo courtesy" credit, flagged for permission before anything goes live
- Images resized/compressed to display size; every image gets a real, accurate alt description
- Menu items and prices pulled from their live Toast menu during the build

## Quality bar (pitch talking points — fixes the audit's findings)

- Descriptive page titles with "pizza" and "Tracy" (their current titles are just the name and "Menu")
- Real meta descriptions per page
- Restaurant structured data (JSON-LD: name, address, phone, hours, cuisine)
- Correct alt text everywhere (current site has 50+ images with none)
- Consistent NAP: Hella Pie Pizza Company, 50 W 10th St, Tracy, CA 95376, (209) 237-2034

## Out of scope

- Online ordering (links out to Toast)
- Additional pages (about, contact, catering)
- Deployment/hosting — this is a local pitch prototype
- Fixing their live listings (separate audit deliverable already done)
