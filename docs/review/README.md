# Portfolio v3 review

Local preview: http://127.0.0.1:8000/

## What changed

An editorial, text-first site with a compact introduction, two implementation-backed case studies, a shorter Dugsi project note, experience chronology, compact technical capabilities, education, leadership, direct contact, and résumé access. Plain HTML/CSS/JavaScript retained. Original images and original Git history preserved.

## Visual evidence

- [Desktop introduction](desktop-top.png)
- [Mobile introduction](mobile-top.png)
- [Selected work](selected-work.png)
- Full pages: [320 px](width-320.png), [390 px](width-390.png), [768 px](width-768.png), [1440 px](width-1440.png)

## Validation

Tested in headless Google Chrome on macOS, November 20, 2026. See [machine-readable results](results.json) and [repeatable checker](../../scripts/check-browser.cjs).

| Check                                                 | Result                                                                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 320 / 390 / 768 / 1440 px layouts                     | No horizontal overflow; images loaded; internal targets exist                                          |
| axe WCAG 2 A/AA, 2.1 AA, 2.2 AA tags                  | Zero reported violations at all four widths                                                            |
| Keyboard                                              | Skip link visible on Tab, focus outline present, Enter moves focus to main, next Tab reaches work link |
| Anchor navigation                                     | Contact and work destinations reachable                                                                |
| Reduced motion                                        | Preference honored; no running animations                                                              |
| Text at 200%                                          | No overflow in 640 px viewport                                                                         |
| JavaScript disabled                                   | Content and navigation available                                                                       |
| Console                                               | No errors                                                                                              |
| CSS / JS / portrait / favicon / résumé / social image | HTTP 200                                                                                               |
| JavaScript syntax / editor diagnostics                | Passed                                                                                                 |
| Git whitespace check                                  | Passed                                                                                                 |

Automated checks complement visual review; they are not a claim of full accessibility certification. VoiceOver, Safari, and physical-device testing were not performed.

## Links and content limits

- HagSpot and Dugsi repository links return HTTP 200.
- Dutchie's configured remote returns HTTP 404 to public visitors. The website therefore shows no source link for it; local implementation was inspected.
- LinkedIn returns HTTP 999 to automated requests. The displayed URL matches the supplied résumé; availability requires an ordinary browser/session check.
- Dugsi's public repository contains only README. Its technical stack, detailed functionality, and user counts are intentionally not represented as verified. A fuller case study needs the actual source.
- Hackathon rank conflicts: brief says second, résumé says first. The page names the event and project without a numeric placement pending confirmation.
- The supplied résumé PDF is unchanged. It contains older project stack descriptions and the conflicting rank; the website uses verified current implementation where available.
- All personal projects are unpublished. No production adoption numbers, testimonials, live occupancy claims, or fabricated screenshots are included.
- The social metadata uses the existing production domain. The new social image will only be available there after a separately approved production deployment.

## Performance and implementation

No framework, build system, external webfont, analytics, animation library, or third-party runtime requests. The only above-the-fold image is an optimized WebP portrait (5,950 bytes). It has explicit dimensions; PDF and social image are not loaded during ordinary page rendering. Page content is in HTML, not dependent on script execution.

## Requirements review

- Retained simple technology and real portrait; removed card grid, technology pills, decorative logos, and stale experience.
- Used a restrained reading grid, neutral palette, typographic hierarchy, thin rules, and useful hover/focus states.
- Included verified Best Buy/Hennepin/AIS outcomes, May 2028 graduation, and updated NSBE leadership.
- No false finished-project framing: status and remaining implementation work are visible.
- No deployment, merging, or production configuration changes. Review branches are stacked to isolate baseline, design, and evidence.
