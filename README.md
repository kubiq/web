# Jakub Pištěk - Portfolio

Personal portfolio website built with Angular 21, deployed to Firebase Hosting as a PWA.

**Live**: [jakubpistek.cz](https://jakubpistek.cz)

## Tech Stack

- Angular 21 (zoneless, standalone components, signal inputs)
- TypeScript 5.9
- SCSS + Tachyons CSS
- Firebase Hosting
- GitHub Actions CI/CD

## Development

```bash
npm install        # Install dependencies
npm start          # Dev server at http://localhost:4200
npm run build      # Production build
npm run lint       # ESLint
npm test           # Unit tests (Vitest)
```

## Deployment

Push to `master` automatically deploys to Firebase via GitHub Actions.

Manual deploy: `npm run deploy`

## Project Structure

```
src/
├── app/
│   ├── app.component.ts       # Root component with projects data
│   ├── project/
│   │   ├── project.component.ts
│   │   └── project.model.ts   # IProject interface
├── assets/
│   ├── icons/                 # PWA icons
│   └── projects/              # Project screenshots
├── styles.scss                # Global styles
└── main.ts                    # Bootstrap with zoneless config
```
