# Hella Pie pitch site — design

Date: 2026-08-07
Status: approved by Joel

## What this is

A two-page prototype website for Hella Pie Pizza Company (Tracy, CA), built as a **pitch piece** to win the redesign work from the owner. It is not going live as-is. The current live site is a generic Toast template; this prototype shows what the business could have instead.

## Theme

**"Quiet retro"** (revised 2026-08-13 — the first pass, a themed "pizza arcade," was rejected as too hokey). The 80s is atmosphere, not references: warm tones, one characterful display typeface, big confident photography, generous spacing. No arcade props of any kind — no neon glows, checkerboards, scoreboard framing, badges, or winking copy. The site should read "this place has been here since your childhood," not "this website is doing a bit."

The retro that survives: the Fraunces display face, the cream-and-brick palette, "The greatest hits" as a section title, and the trailer-to-storefront story.

## Pages

### Homepage (`index.html`)
Top to bottom:
1. Header — logo wordmark, links: Menu, Hours, Order now
2. Hero (cream, not dark) — big pepperoni glamour shot, headline "Wood-fired pizza, made the long way.", Order now button, plain-text live open/closed line
3. The greatest hits — 4 star pizzas with photos
4. The Story (dark section) — food-truck-to-storefront strip: 2017 mobile wood-fired start → 2020 takeover of the downtown bakery. One paragraph plus trailer photo.
5. What people say — "4.6 stars across 351 Yelp reviews." plus 2 short real quotes as plain pull quotes
6. Find Us — hours grid, address (50 W 10th St, Tracy, CA 95376), phone, Google Maps link, storefront photo
7. Footer — socials, Toast order link

### Menu page (`menu.html`)
1. Short "The menu" hero with category jump links (Specialty · Classics · Build your own · Starters · Sauces & sweets · Drinks)
2. Specialty pies — **quiet cards**: cream-white card, hairline border, soft shadow, photo on top where one exists, name in Fraunces, brick prices with dollar signs (SM/LG). No badges.
3. Classics (cheese, pepperoni, margherita) — same cards, plus a plain-sentence Wednesday deal line
4. Knots, dips, cookies — garlic knots described as the signature item
5. Drinks and simple sides — **compact rows** (photo left or no photo), so the ~50-item menu doesn't become an endless scroll
6. Mobile only: sticky bottom Order Now bar
7. All order actions link out to their existing Toast ordering page

## Visual system

Palette (three colors, nothing else):
| Role | Color |
| --- | --- |
| Page background | Cream `#f6f1e7` |
| Brand, links, prices, buttons | Brick red `#b5372e` |
| Text, dark sections, footer | Charcoal navy `#211f33` |
| Hairlines | `#e4dccb` |

Type (Google Fonts):
- **Fraunces** (700/900) — headlines and wordmark, sentence case, never all-caps
- **Archivo** — everything else, including prices

## Voice

Warm, plain, confident — no winking, no jokes, no shouting. Hero: "Wood-fired pizza, made the long way." Body copy states facts warmly: wood-fired oven, 2017 food-truck origin, hometown Tracy. Real numbers do the bragging (4.6 stars, 351 reviews, est. 2017), stated as plain sentences.

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
