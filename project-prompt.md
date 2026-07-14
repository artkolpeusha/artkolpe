# MASTER PROMPT FOR CODEX

## Project

Build a premium portfolio website for **Usha Kolpe**, an internationally acclaimed artist, physician, and environmental advocate.

The project already contains a basic Phase 1 Next.js scaffold. Continue developing directly in the existing repository.

---

# Tech Stack

Use:

- Next.js 15 (App Router)

- TypeScript

- Tailwind CSS

- Framer Motion

- ESLint

Do NOT use:

- Material UI

- Chakra UI

- Bootstrap

- jQuery

The project must remain hosting agnostic.

It should run on:

- Custom Node hosting

- VPS

- cPanel Node hosting

- Cloudways

- Vercel

- Netlify

- Railway

- Render

Do not add vendor-specific deployment dependencies.

---

# Design Direction

Design style:

### 70% Modern Museum

Inspired by:

- Tate Modern

- Saatchi Gallery

- Apple editorial storytelling

Characteristics:

- Elegant

- Minimal

- Premium

- Generous whitespace

- Artwork-first

---

### 30% Immersive Artistic

Characteristics:

- Large visual moments

- Edge-to-edge imagery

- Subtle transitions

- Exhibition-like storytelling

Avoid flashy animations.

Animations should feel calm and sophisticated.

---

# Sitemap

Create these pages:

```
```
/
About
Gallery
Gallery/[slug]
Exhibitions
Awards
Advocacy
Contact
```
```

---

# Global Layout

Header:

Desktop navigation:

- Home

- About

- Gallery

- Exhibitions

- Awards

- Advocacy

- Contact

Mobile:

- Hamburger menu

- Slide-over navigation

Footer:

Quick Links

Social placeholders:

- Instagram

- Facebook

- Email

Copyright.

---

# Homepage

Sections:

---

## Hero

Full viewport height.

Background:

Use placeholder artwork image.

Content:

Usha Kolpe

Internationally Acclaimed Artist • Physician • Environmental Advocate

Tagline:

"Where Healing Meets Creativity, and Art Inspires Change."

Buttons:

- Explore Gallery

- About the Artist

Subtle motion.

---

## Featured Works

Show 3 artworks.

Card contains:

- Image

- Title

- Collection

Hover:

- Slight zoom

- Fade

CTA:

View All Works

---

## About Preview

Short bio:

Usha Kolpe is an internationally acclaimed self-taught artist and medical professional whose expressive works explore healing, nature, diversity, and human interconnectedness.

CTA:

Learn More

---

## Environmental Advocacy Preview

Highlight:

United Nations Ocean Cleanup participation.

CTA.

---

## Global Exhibitions Preview

Display:

- Venice

- London

- Rome

- Tokyo

- Dubai

- New York

Editorial layout.

CTA.

---

## Contact CTA

Invitation for:

- Collectors

- Galleries

- Collaborations

- Media

---

# Gallery

This is the most important feature.

Build a premium gallery experience.

---

## Gallery Route

```
```
/gallery
```
```

---

## Filters

Use pills.

Collections:

- All

- Expressions in Focus

- Healing & Humanity

- Nature's Voice

- Peace & Diversity

- Environmental Series

Animated active state.

---

## Search

Search by:

- Title

Realtime filtering.

---

## Artwork Grid

Responsive.

Desktop:

3 columns.

Tablet:

2 columns.

Mobile:

1 column.

Card:

Image

Title

Year

Hover:

- Scale image

- Show "View Details"

---

# Artwork Dataset

Create local JSON data.

20 placeholder artworks.

Each artwork must contain:

```
```
id
title
slug
year
medium
dimensions
collection
description
availability
image
```
```

Availability:

- Available

- Sold

- Private Collection

Use realistic placeholder values.

---

# Artwork Detail Experience

When user clicks artwork:

Use modal popup.

DO NOT navigate away from gallery experience.

However:

Each artwork MUST have its own URL.

Example:

```
```
/gallery/blue-universe
```
```

Use intercepted routes/modal pattern.

Support:

Direct URL access.

---

## Modal Content

Large image.

Title

Year

Medium

Dimensions

Collection

Availability badge

Artist Reflection

Buttons:

Inquire About This Piece

Previous Artwork

Next Artwork

Close

ESC support.

Click outside closes modal.

Preserve scroll position.

---

# Inquiry CTA

Do NOT implement backend.

Button opens:

```
```
mailto:
```
```

Subject:

Inquiry about [Artwork Title]

---

# About Page

Sections:

---

## Meet Usha Kolpe

Use content:

Usha Kolpe is an internationally acclaimed artist whose work invites viewers into a vivid exploration of emotion and perception, where color and form intertwine to evoke both intimate reflection and expansive natural worlds.

A self-taught artist and medical professional, she explores the powerful connection between healing and creativity. While medicine heals the body, art heals the soul.

---

## Artist Statement

Use:

My art is inspired by the beauty of nature, the diversity of people, and the complexity of the world. I seek to speak to the world through my art, sharing messages that inspire change and make a positive difference in society.

As a social artist, I aim to increase awareness, embrace diversity, and spread peace through my creations.

---

## Timeline

Physician

↓

Discovered Painting

↓

International Exhibitions

↓

Awards

↓

Environmental Advocacy

---

# Exhibitions Page

Use placeholder data.

Timeline/cards.

Include:

- Venice Biennale

- Times Square, New York

- London

- Rome

- Athens

- Tokyo

- Dubai

- Madrid

- Switzerland

---

# Awards Page

Cards.

Use:

- International PEGASUS Award

- Leaders Protagonist Award

- Ambassador of Art for Artistic Value

- Youth Human Rights International War and Peace Contest Recipient

Elegant layout.

---

# Advocacy Page

Focus:

Environmental sustainability.

UN Ocean Cleanup participation.

Large editorial quote:

"Protecting our planet is not separate from creating beauty; it is part of preserving it."

Feature related placeholder artworks.

---

# Contact Page

Contact form UI only.

Fields:

- Name

- Email

- Subject

- Message

No backend.

Display:

For collectors, galleries, media inquiries, and collaborations.

Social placeholders.

---

# Animations

Use Framer Motion sparingly.

Examples:

Hero fade.

Section reveal.

Card hover.

Modal transitions.

Page transitions.

Avoid over-animation.

Premium museum feel.

---

# Images

Store in:

```
```
public/images
```
```

Structure:

```
```
artworks/
artist/
exhibitions/
awards/
```
```

Use placeholder images.

Make replacement easy.

---

# SEO

Add metadata.

Title:

Usha Kolpe | International Artist Portfolio

Description:

Explore the internationally acclaimed works of artist and physician Usha Kolpe, where healing, humanity, and environmental consciousness converge through art.

Open Graph metadata.

Twitter metadata.

---

# Accessibility

Ensure:

Keyboard navigation.

Modal accessibility.

ESC close.

Visible focus states.

Semantic HTML.

Alt text.

ARIA labels.

Color contrast compliance.

---

# README

Document:

Installation

```
```
npm install
npm run dev
```
```

Build

```
```
npm run build
npm run start
```
```

How to replace images.

How to update artwork data.

Hosting notes.

---

# Development Order

Implement in this exact order:

1. Refactor Phase 1 structure

2. Global layout/header/footer

3. Homepage

4. Gallery dataset

5. Gallery page

6. Search and filters

7. Artwork modal routes

8. About page

9. Exhibitions page

10. Awards page

11. Advocacy page

12. Contact page

13. SEO

14. Accessibility review

15. Animation polish

16. Final cleanup and README update

---

# Definition of Done

The website should feel like a premium museum-quality artist portfolio suitable for:

- International exhibitions

- Gallery submissiosns

- Collectors

- Media

- Collaborations

The final result should not look like a generic template. It should feel elegant, calm, editorial, and memorable, with the artwork as the hero.