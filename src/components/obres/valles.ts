/* The Vallès, placed north of the A3 map in the same units (the A3's top edge
   is y = 0). Positions are schematic, like the A3 itself: roughly where each
   town sits relative to Barcelona, not surveyed. */

export const TOWNS = {
  sabadellPN: { x: 760, y: -800, name: 'Sabadell Parc del Nord', side: 'l' },
  sabadellPM: { x: 760, y: -600, name: 'Sabadell Plaça Major', side: 'l' },
  castellar: { x: 812, y: -1052, name: 'Castellar del Vallès', side: 'l' },
  sentmenat: { x: 922, y: -1162, name: 'Sentmenat', side: 'u' },
  caldes: { x: 1120, y: -1200, name: 'Caldes de Montbui', side: 'r' },
  palau: { x: 1120, y: -1000, name: 'Palau-solità i Plegamans', side: 'r' },
  canPerera: { x: 1120, y: -860, name: 'Can Perera Industrial', side: 'r' },
  mollet: { x: 1400, y: -560, name: 'Mollet - Sta. Rosa', side: 'r' },
  granollers: { x: 1700, y: -1000, name: 'Granollers Canovelles', side: 'r' },
} as const;

/* Existing service that stops short of Caldes. */
export const S2 = 'M905 250 V-300 L760 -445 V-800';
export const R3 = 'M1400 150 V-620 L1700 -920 V-1500';

/* The proposal (block 06): C1, C2 and the R9 all end at l'Estació. */
export const C1 = 'M760 -600 V-1000 L960 -1200 H1120';
export const C2 = 'M1120 -1200 V-760 L1320 -560 H1400';
export const R9 = 'M893 250 V-300 L748 -445 V-1005 L955 -1212 H1120';

export const COLORS = { S2: '#7cbf3a', R3: '#c8202f', C1: '#3e70c1', C2: '#d62fb0', R9: '#ffc20e' };

/* Camera frames: the opening starts on Caldes and ends on the whole A3. */
export const VB_CALDES = [300, -1480, 1720, 1200] as const;
export const VB_BCN = [0, 0, 1920, 1357] as const;
