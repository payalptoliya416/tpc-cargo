# TPC Cargo – Astro website

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # static site in /dist

- Pages: `src/pages` (home, about, contacts, services/index, services/[slug])
- 9 service pages come from ONE template + `src/data/services.ts` (edit text there)
- Common sections: `src/components`
- Images: `public/images` (cropped from the design screenshots) + paths in `src/data/images.ts`
- Forms use `action="#"` – connect to your backend / Formspree later
