/* Camera frames and station stops, in the projected OpenStreetMap units of
   geo.json (60 units a kilometre; y grows southwards). */
import geo from '../../data/metro/geo.json';

export const STOPS = geo.stops as Record<string, [number, number]>;
export const COLORS = { S2: '#7cbf3a', R3: '#c8202f', C1: '#3e70c1', C2: '#d62fb0', R9: '#ffc20e' };

/* The opening starts on the Vallès and ends on Barcelona's network. */
export const VB_CALDES = [-560, -1130, 1440, 950] as const;
export const VB_BCN = [-700, 170, 1260, 1290] as const;
