# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **React 19** application built with Vite that displays musical notes with colored circles and lyrics. It's designed to help users learn songs by visualizing notes and syllables in a grid layout.

## Common Commands

```bash
# Development
npm run dev                    # Start dev server with hot reload

# Building
npm run build                  # Type-check and build for production
npm run preview                # Preview production build on port 4173

# Testing
npm run test:unit              # Run Vitest unit tests with jsdom
npm run test:e2e               # Open Cypress for interactive e2e testing
npm run test:e2e:ci            # Run Cypress tests headlessly (CI)

# Code Quality
npm run lint                   # Lint and auto-fix with ESLint
```

## Architecture

### Data Flow: Songs and Color Mapping

The app uses **Zustand** for state management with one main store:

1. **`useSongsStore`** (src/stores/songs.ts) - Contains hardcoded song data and current song selection
   - Songs are stored as arrays of notes with syllables
   - Each song has: `id`, `title`, `notesInRow` (grid columns), and `notes` array
   - Notes can be `null` (empty grid cells) or objects with `note` and `syllable`
   - Current song tracked via `currentSongId`

2. **`getNoteColors`** (src/utils/colorMapping.ts) - Maps note names to colors
   - Base notes (c, d, e, f, g, a, b) map to specific hex colors
   - Returns `[color]` for plain notes or `[color1, color2]` for sharps/flats
   - Sharp notes: gradient from base note to next note
   - Flat notes: gradient from previous note to base note

### Note Notation System

Notes use a special notation system:
- Base notes: `c`, `d`, `e`, `f`, `g`, `a`, `b`
- Sharps: append `#` (e.g., `c#`)
- Flats: append `b` as second character (e.g., `bb`, `eb`)
- Octave modifiers: `+` suffix (higher octave) or `-` suffix (lower octave) show up/down arrows
- Syllables ending in `-` are rendered as partial (with hyphen) to indicate continuation

### Component Hierarchy

```
main.tsx
└── ErrorBoundary.tsx (catches render errors)
    └── App.tsx
        ├── SongTitle.tsx (song selector dropdown)
        └── NotesPage.tsx (receives song prop)
            └── SingleNote.tsx (for each note)
                └── BaseNote.tsx (colored circle + syllable)
                    └── Optional arrow SVG for octave modifiers
```

- **NotesPage**: Renders song as CSS grid, dynamically sets columns based on `song.notesInRow`
- **SingleNote**: Handles note notation (strips octave modifiers) and displays arrow SVGs
- **BaseNote**: Renders colored circles using `getNoteColors`, applies linear gradients for sharps/flats
- **SongTitle**: Song selector dropdown

### Styling

Each component has a co-located CSS Module file (e.g., `BaseNote.module.css`).

### Key Implementation Details

- **React 19** with TypeScript and TSX files
- **Vite 6** is the build tool with `@vitejs/plugin-react`
- **Zustand 5** for state management
- **CSS Modules** for component styling
- **ESLint 9** with flat config (`eslint.config.js`) — plugins: react-hooks, react-refresh, jsx-a11y, typescript-eslint
- **Vitest** with jsdom — unit tests in `src/**/__tests__/`, setup via `src/test-setup.ts`
- **Cypress** for e2e tests in `cypress/e2e/`
- **ErrorBoundary** (`src/components/ErrorBoundary.tsx`) wraps the app in `main.tsx`
- **Production base path** is `/notes-page/` (configured in vite.config.ts)
- **Alias**: `@` points to `src/` directory
- No routing — single-page app with no router

### Adding New Songs

To add a new song, edit `src/stores/songs.ts` and add to the `songs` array in the store initializer. Each song object needs:
- `id`: unique identifier
- `title`: display name
- `notesInRow`: number of columns in the grid layout
- `notes`: array of note objects `{note, syllable}` or `null` for empty cells
