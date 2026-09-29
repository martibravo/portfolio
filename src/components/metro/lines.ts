/* Line colours and termini as printed on the maps' own line strip. */
export interface MetroLine { id: string; color: string; ink: string; ends: [string, string] }

export const LINES: MetroLine[] = [
  { id: 'L1', color: '#e32739', ink: '#fff', ends: ['Estació de Sant Adrià', 'El Prat de Llobregat'] },
  { id: 'L2', color: '#992f9c', ink: '#fff', ends: ['Badalona Pompeu Fabra', 'Aeroport T1'] },
  { id: 'L3', color: '#55c14f', ink: '#fff', ends: ['Trinitat Vella', 'Sant Feliu de Llobregat'] },
  { id: 'L4', color: '#fbb911', ink: '#111', ends: ['La Sagrera', 'Trinitat Nova'] },
  { id: 'L5', color: '#317bc8', ink: '#fff', ends: ['Vall d’Hebron', 'Cornellà Centre'] },
  { id: 'L6', color: '#847dc6', ink: '#fff', ends: ['Catalunya', 'Sarrià'] },
  { id: 'L7', color: '#ad5414', ink: '#fff', ends: ['Catalunya', 'Avinguda Tibidabo'] },
  { id: 'L8', color: '#e866b9', ink: '#fff', ends: ['Parc del Besòs', 'Molí Nou Ciutat Cooperativa'] },
  { id: 'L9', color: '#ff6600', ink: '#fff', ends: ['Can Zam', 'Aeroport T1'] },
  { id: 'L10', color: '#1793f3', ink: '#fff', ends: ['Gorg', 'Polígon Pratenc'] },
  { id: 'L11', color: '#a8d164', ink: '#111', ends: ['Trinitat Nova', 'Can Cuiàs'] },
  { id: 'L12', color: '#b6b3da', ink: '#111', ends: ['Sarrià', 'Finestrelles · Sant Joan de Déu'] },
];

export const COLOR: Record<string, string> = Object.fromEntries(LINES.map((l) => [l.id, l.color]));
export const INK: Record<string, string> = Object.fromEntries(LINES.map((l) => [l.id, l.ink]));
