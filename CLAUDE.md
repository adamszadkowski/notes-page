# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 2.7 application built with Vite that displays musical notes with colored circles and lyrics. It's designed to help users learn songs by visualizing notes and syllables in a grid layout. The app uses legacy browser support (IE11+) via Vite's legacy plugin.

## Common Commands

```bash
# Development
npm run dev                    # Start dev server with hot reload

# Building
npm run build                  # Type-check and build for production
npm run build-only             # Build without type-checking
npm run preview                # Preview production build on port 4173

# Testing
npm run test:unit              # Run Vitest unit tests with jsdom
npm run test:e2e               # Open Cypress E2E tests (requires preview server running)
npm run test:e2e:ci            # Run Cypress E2E tests headless for CI

# Code Quality
npm run type-check             # Run TypeScript type checking
npm run lint                   # Lint and auto-fix with ESLint
```

## Architecture

### Data Flow: Songs and Color Mapping

The app uses **Pinia stores** for state management with two main stores:

1. **`useSongsStore`** (src/stores/songs.ts) - Contains hardcoded song data and current song selection
   - Songs are stored as arrays of notes with syllables
   - Each song has: `id`, `title`, `notesInRow` (grid columns), and `notes` array
   - Notes can be `null` (empty grid cells) or objects with `note` and `syllable`
   - Current song tracked via `currentSongId`

2. **`useColorMappingStore`** (src/stores/color-mapping.ts) - Maps note names to colors
   - Base notes (c, d, e, f, g, a, b) map to specific hex colors
   - Supports sharps (e.g., "c#") and flats (e.g., "bb") via gradient blending
   - Sharp notes show gradient from base note to next note
   - Flat notes show gradient from previous note to base note

### Note Notation System

Notes use a special notation system:
- Base notes: `c`, `d`, `e`, `f`, `g`, `a`, `b`
- Sharps: append `#` (e.g., `c#`)
- Flats: append `b` as second character (e.g., `bb`, `eb`)
- Octave modifiers: `+` suffix (higher octave) or `-` suffix (lower octave) show up/down arrows
- Syllables ending in `-` are rendered as partial (with hyphen) to indicate continuation

### Component Hierarchy

```
App.vue
└── HomeView.vue
    └── NotesPage.vue (receives song prop)
        └── SingleNote.vue (for each note)
            └── BaseNote.vue (colored circle + syllable)
                └── Optional arrow SVG for octave modifiers
```

- **NotesPage**: Renders song as CSS grid, dynamically sets columns based on `song.notesInRow`
- **SingleNote**: Handles note notation (strips octave modifiers) and displays arrow SVGs
- **BaseNote**: Renders colored circles using color mapping store, applies linear gradients for sharps/flats

### Key Implementation Details

- **Vue 2.7** is used (not Vue 3) - composition API available but options API still primary pattern
- **Vite** is the build tool with `@vitejs/plugin-vue2` for Vue 2 support
- **Legacy browser support** via `@vitejs/plugin-legacy` targets IE11+
- **Production base path** is `/notes-page/` (configured in vite.config.ts)
- **Route mode**: History mode (requires server configuration for SPA routing)
- **Alias**: `@` points to `src/` directory

### Adding New Songs

To add a new song, edit `src/stores/songs.ts` and add to the `songs` array in the initial state. Each song object needs:
- `id`: unique identifier
- `title`: display name
- `notesInRow`: number of columns in the grid layout
- `notes`: array of note objects `{note, syllable}` or `null` for empty cells

