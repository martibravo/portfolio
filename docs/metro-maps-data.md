# Redrawing the metro: where the data comes from

The case study at `/graphic-design/redrawing-the-metro/` redraws Martí's maps as SVG instead of showing screenshots. The files in `src/data/metro/` were generated once from the original artwork; they are not edited by hand except where noted.

| File | Source | How |
|---|---|---|
| `network.json` | Network diagram PDF, page 1 (`public/downloads/metro-network-maps.pdf`) | Each line colour's filled outline was rasterised, skeletonised into a centreline and simplified. Pieces marked `new` are absent from the *Metro 2020* artboard (compared pixel by pixel), with two manual corrections where terminus tags hid the difference (L10 to Pratenc, L3 to Trinitat Vella). Also holds the L2/L5 split at Sagrada Família and the Metro 2032 route (L5 between Collblanc and La Sagrera, offset ±4.2 px for L9/L10). |
| `a3.json`, `a3-loop.json` | A3 PDF, pages 2 and 3 (`public/downloads/metro-barcelona-a3-maps.pdf`) | Geography and station symbols are the PDF's own paths; lines are centrelines as above; labels are the PDF's text with their positions. Two labels were repaired (Eulàlia d’Anzizu, Camp de l’Arpa). |
| `editions-geo.json` | `network.json` | The L9 central section, moved into the works-map frame (+20.5, −131), with each station's position along it. |
| `editions.ts` | The seven dated works-map editions | Transcribed by hand from the maps. Items without a Catalan string are observations about what changed between editions, not text printed on the map. In December 2023 Mandri uses the 60% from that edition's news box; the station label on the map still read 40%. |

Opening years follow the map legend: “Any de finalització estimat segons PDI 2021-2030”.
