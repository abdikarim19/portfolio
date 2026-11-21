# Portfolio v3: content and design decisions

Reviewed 20 November 2026. Production is unchanged. All projects are unpublished, as confirmed by the owner.

## Sources and corrections

- Primary résumé: `Abdikarim_Mohamed_Resume28.pdf`, supplied November 20. The earlier AFR path was unavailable. Preserve the supplied PDF unchanged as the download.
- Education: Augsburg, BS Computer Science, Data Science minor, expected May 2028.
- Contact: use `abdikarimdm26@gmail.com` from the new résumé, replacing the old portfolio address.
- Best Buy: Software Engineer Intern, June–August 2026. Personalized Real-Time Offer generated $110K incremental revenue; eight behavioral rules; GCP offer-history guardrail; TTL expiration and read-before-qualify.
- Hennepin County: Software Engineering Intern, December 2025–May 2026. Java/Qmatic REST integration serving queue visibility for 1,000+ daily visitors across five centers.
- Alternative Information Systems: Technical Program Manager Intern, June 2022–August 2023. Coordination across 15 schools and five technicians; 20,000+ devices per summer.
- NSBE: President, April 2025–present; 15 events; 150+ members. Supersedes Senator/160+ on the original website.
- Hackathon placement conflicts: the brief says second; the résumé says first and “2x Winner.” Pending clarification, name the recognition without a numeric placement.

## Project evidence

### Dutchie

Local source: `/Users/abdik/Dutchie/DUTCHIE`, inspected at `71fb2ff`.
Repository: https://github.com/Mulla759/DUTCHIE

- `mockup/package.json`: Expo, React Native, TypeScript, Expo Router, Supabase client. Do not repeat the résumé's Next.js stack.
- `mockup/src/lib/splitEngine.ts`: integer cents, largest-remainder distribution, deterministic tie-breaking, reconciliation or exception. Platform-independent calculation module.
- `mockup/src/store/persist.ts`: AsyncStorage persistence; shared billing remains local, not database-backed multi-user functionality.
- `supabase/functions/extract-receipt/`: receipt extraction Edge Function, with Gemini integration. Camera/receipt reader implemented; no public launch.
- Auth migrations exist beyond the README's older status. Avoid declaring all auth absent; describe only the verified limitation: shared billing backend remains in progress.
- Role from résumé: collaborative development, with TypeScript split-engine contribution. No unsupported sole-founder/sole-engineer claims.

### HagSpot

Local source: `/Users/abdik/Hagspot_Personal/hagspot-v2-repo`, inspected at `f40cc44`.
Repository: https://github.com/abdikarim19/hagspot

- `apps/web/package.json`: Next.js, TypeScript, Supabase, PostgreSQL, Drizzle, Tailwind. Supersedes Spring Boot/React résumé description.
- `src/db/schema.ts`: bookable spaces and occupancy areas are separate entities; bookings and expiring presence check-ins stored separately.
- `src/app/actions/bookings.ts`: authenticated booking action and overlap check. Do not claim transactional concurrency safety.
- `src/app/actions/presence.ts`: authenticated area check-in with 20-minute expiry, refresh and end-presence operations.
- `src/lib/bookings.ts`: sample availability blocks. Do not describe the demonstration map/slots as verified live occupancy or availability.
- Modernization code is implemented; external services require configuration. Not deployed. Omit “500+ users” rather than imply actual adoption.

### Dugsi School

https://github.com/abdikarim19/dugsi at `3a36ef0190a9ce2c61dc80bdcbe1e2ddc6f62ae6` contains only a README: “manage your local mosque's Quran classes.” Only `main` is public.
The résumé describes a weekend-school project built and pitched at ColorStack UMN. Implementation, stack, enrollment features, and usage cannot be independently checked. Keep a short project note, not a detailed technical case study. No 100+ user claim. Requested actual source location from owner.

### Finance Friend

Public repository contains only README. Omit from featured work and archive until implementation evidence is available.

## Audit and architecture

Retain: name, actual portrait, Minneapolis context, direct contact, buildless implementation.
Rewrite: introduction, current status, all experience, project narratives, education and leadership.
Remove: technology pills, repeated bordered cards, decorative logos, unsupported capabilities and user counts, stale “currently at Hennepin” wording.

Order: compact navigation → introduction/current work → selected projects → experience → capabilities → education/community → contact.
Two full case studies and one concise project note reflect available evidence. Do not fill gaps with fabricated screenshots or product claims.

## Design research

- [Notion sidebar](https://www.notion.com/help/navigate-with-the-sidebar): quiet wayfinding, document hierarchy, consistent alignment.
- [Brittany Chiang](https://brittanychiang.com/): specific work descriptions, readable chronology, evidence next to claims. Do not copy split-screen layout, dark theme, or effects.
- [Josh Comeau](https://www.joshwcomeau.com/): approachable technical language and editorial reading rhythm. Do not copy animated decoration.
- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/): semantic structure, keyboard access, visible focus, contrast, reflow and target size.

Use an ink-on-white editorial layout with a serif introduction, system sans-serif body, restrained neutral section labels and rules. No gradients, glass, decorative animation, stock imagery, framework or build system.

## Review sequence

1. Content/source baseline and original résumé download.
2. Editorial layout and rewritten content.
3. Validation evidence and review screenshots.

Stack PRs against the preceding branch. Do not merge or change production deployment. A branch push may produce a non-production deploy preview if Netlify is configured for it.
