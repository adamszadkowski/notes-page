# Notes Page

A React 19 application that displays musical notes with colored circles and lyrics. Designed to help users learn songs by visualizing notes and syllables in a grid layout.

## Tech Stack

- **React 19** with TypeScript
- **Vite 6** — build tool and dev server
- **Zustand 5** — state management
- **CSS Modules** — component-scoped styles
- **Vitest** — unit tests
- **Cypress** — end-to-end tests

## IDE Setup

[VS Code](https://code.visualstudio.com/) with the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Commands

```bash
# Start dev server with hot reload
npm run dev

# Type-check and build for production
npm run build

# Preview production build (port 4173)
npm run preview

# Run unit tests
npm run test:unit

# Open Cypress for interactive e2e testing
npm run test:e2e

# Run e2e tests headlessly (CI)
npm run test:e2e:ci

# Lint and auto-fix
npm run lint
```

## Note Notation

Notes use a custom notation:

| Notation | Meaning |
|----------|---------|
| `c`, `d`, `e`, `f`, `g`, `a`, `b` | Base notes |
| `c#`, `d#`, `f#`, `g#`, `a#` | Sharps (two-color gradient) |
| `db`, `eb`, `gb`, `ab`, `bb` | Flats (two-color gradient) |
| `c+`, `d+`, ... | Higher octave (up arrow) |
| `c-`, `d-`, ... | Lower octave (down arrow) |

Syllables ending in `-` are rendered with a hyphen to indicate continuation.

## Adding Songs

Edit `src/stores/songs.ts` and add an entry to the `songs` array:

```ts
{
  id: "unique-id",
  title: "Song Title",
  notesInRow: 8,          // number of columns in the grid
  notes: [
    { note: "c", syllable: "do" },
    { note: "d+", syllable: "re-" },
    null,                  // empty grid cell
  ],
}
```

## Production Deploy

The production base path is `/notes-page/` (configured in `vite.config.ts`). Deployed to GitHub Pages.
