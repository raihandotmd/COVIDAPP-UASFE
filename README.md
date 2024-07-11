---
title: Covid APP FEUTS DOCS
date-created: "202405090548"
date-updated: "202405090857"
tags:
  - college
  - uts
  - react
  - software-engineer
---

# Project Overview

- [Link Docs](https://github.com/raihandotmd/COVIDAPP-UTSFE/blob/master/docs/20240425%20-%20UTS%20React%20Covid%20APP.md)

# Summarize

- Jira Backlog: [Link](https://notraihan.atlassian.net/jira/software/projects/POS/boards/3?atlOrigin=eyJpIjoiZjZlYjM3NzI5MDM5NDZjYmE5MzJjMmU5MjgxMjg4NmMiLCJwIjoiaiJ9)
- Feature:
  - Data Sync with **forms** and **table**.
  - Responsive Website.

### Project Showcase

![[Covid APP]](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZleXRkZmJoaW0ycXZtMnZkam55dGdzMGpjYTQ2a3dpdW04aW5uYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4SQnlX2G2It4flfsRN/giphy.gif)

### Folder Structure

```bash
src
├── App.tsx
├── assets
│   └── images
│       ├── form.png
│       └── hero.png
├── components
│   ├── Footer
│   │   ├── Footer.module.css
│   │   └── Footer.tsx
│   ├── Form
│   │   ├── Form.module.css
│   │   └── Form.tsx
│   ├── Hero
│   │   ├── Hero.module.css
│   │   └── Hero.tsx
│   ├── Navbar
│   │   ├── Navbar.module.css
│   │   └── Navbar.tsx
│   ├── Stats
│   │   ├── Province
│   │   │   ├── StatsProvinces.module.css
│   │   │   ├── StatsProvinces.tsx
│   │   │   └── TableData
│   │   │       └── ProvinceTableData.tsx
│   │   ├── Regions
│   │   │   ├── StatsRegions.module.css
│   │   │   └── StatsRegions.tsx
│   │   └── Total
│   │       ├── StatsSituation.module.css
│   │       └── StatsSituation.tsx
│   └── ui
│       ├── Card
│       │   ├── Card.module.css
│       │   ├── Card.tsx
│       │   ├── RegionsCard
│       │   │   ├── Regions.module.css
│       │   │   └── RegionsCard.tsx
│       │   └── StatsCard
│       │       ├── StatsCard.module.css
│       │       └── StatsCard.tsx
│       └── Section
│           ├── Section.module.css
│           └── Section.tsx
├── contexts
│   └── DataCovidProvider.tsx
├── index.css
├── layouts
│   └── index.tsx
├── main.tsx
├── pages
│   ├── About.tsx
│   ├── Home.tsx
│   ├── Indonesia.tsx
│   └── Province.tsx
├── utils
│   ├── constants
│   │   ├── endpoints.ts
│   │   ├── indonesia.ts
│   │   └── provinces.ts
│   ├── helpers.ts
│   └── types.ts
└── vite-env.d.ts

23 directories, 40 files
```

### Component Structure

![image](https://github.com/raihandotmd/COVIDAPP-UTSFE/assets/114415754/33021e77-97da-43dd-817d-698da677a944)

### Global State

In order to sync the form to the table, we can use **useContext()**, with it we can use state but **globally**, and also we have to wrap the component with the Provider in order for it to re-render.
![image](https://github.com/raihandotmd/COVIDAPP-UTSFE/assets/114415754/eed6aa47-aa70-4534-9af0-be89809e0d20)

