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

- [Link Docs](docs/20240425 - UTS React Covid APP.md)

# Summarize

- Jira Backlog: [Link](https://notraihan.atlassian.net/jira/software/projects/POS/boards/3?atlOrigin=eyJpIjoiZjZlYjM3NzI5MDM5NDZjYmE5MzJjMmU5MjgxMjg4NmMiLCJwIjoiaiJ9)
- Feature:
  - Data Sync with **forms** and **table**.
  - Responsive Website.

### Project Showcase

<img src="https://d9yrlck6nls9j.cloudfront.net/b4t86f%2Fpreview%2F57814877%2Fmain_large.gif?response-content-disposition=inline%3Bfilename%3D%22main_large.gif%22%3B&response-content-type=image%2Fgif&Expires=1715262714&Signature=VsVHBBJUzgN8Ijy6pCcAgEpvHmm16pwEdDGQDd3L~higxCxwfCyazxyWfIHtFQGaconFHxI4bZ3pAMJBWsK8BUphtT1ka2cJlIZRNHsryhpRuVFX8prqyKR4hJZJ0rs5F8EcoBiPkgEMLqUMPlD6bOe55Baoc44YwhnmFrSYXqsXtb0EjLn2~0n99CexXZsZyaFRGMeHHQjIWqicUu8IGx4BxfkpF5tGdZNFjTZuiXuMbd-FOiN1SPnf1pnB5C-ySlfNYNuwy3O6N3ZDAjzR0giXQV3FpW8j2qIEa0z6knZ2frGAD8xDqqrGSNiSiROmysgxstC4GVWdU7vrFYW89A__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"  />
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
│   └── Stats
│       ├── Card
│       │   ├── StatsCard.module.css
│       │   └── StatsCard.tsx
│       ├── Province
│       │   ├── StatsProvinces.module.css
│       │   ├── StatsProvinces.tsx
│       │   └── TableData
│       │       └── ProvinceTableData.tsx
│       └── Total
│           ├── StatsTotal.module.css
│           └── StatsTotal.tsx
├── contexts
│   └── DataCovidProvider.tsx
├── index.css
├── main.tsx
├── types
│   ├── data.ts
│   └── pages
│       └── Home.tsx
├── utils
│   └── constants
│       ├── indonesia.ts
│       └── provinces.ts
└── vite-env.d.ts
```

### Component Structure

![[diagramComponent.png]]

### Global State

In order to sync the form to the table, we can use useContext it's like a state and we can use it anywhere in the **global**, and also we have to wrap the component with the Provider in order for it to re-render.
![[useContext.png]]

