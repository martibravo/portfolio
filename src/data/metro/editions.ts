/* The seven dated editions of "Estat de les obres de les línies 9 i 10",
   transcribed from the maps. Per station: [civil works %, architecture %, opening year].
   A null civil figure means "No iniciada" (not started). Years follow the map legend:
   "Any de finalització estimat segons PDI 2021-2030". */

export type Station = [number | null, number | null, string];

export interface Edition {
  id: string;
  date: string;       // as printed on the map
  short: string;      // slider label
  iso: string;
  image: string;
  tbm: number;        // how far the bored (pale yellow) tunnel reaches, 0–1 along Zona Universitària → La Sagrera
  speed?: string;
  forecast: { ca: string; en: string }[];
  newsTitle: string;  // the box heading: the map's own "Novetats", or our note when the edition had none
  news: { ca?: string; en: string }[];  // items without `ca` are observations, not text from the map
  names: { mandri: string; muntanya: string | null };
  stations: Record<string, Station>;
}

const base: Record<string, Station> = {
  'Campus Nord': [6, 0, '2028'],
  'Manuel Girona': [null, null, '2028'],
  'Prat de la Riba': [1, 0, 'n/d'],
  'Sarrià': [15, 2, '2026'],
  'Mandri': [30, 0, '2026'],
  'El Putxet': [18, 0, '2028'],
  'Lesseps': [92, 0, '2025'],
  'Muntanya': [null, null, 'n/d'],
  'Sanllehy': [42, 0, '2026'],
  'Guinardó': [95, 0, '2025'],
  'Pl. Maragall': [97, 0, '2026'],
  'La Sagrera': [100, 100, '2025'],
  'Sagrera | TAV': [100, 100, '2025'],
};

const all2028 = (s: Record<string, Station>) =>
  Object.fromEntries(Object.entries(s).map(([k, v]) => [k, [v[0], v[1], v[2] === 'n/d' ? 'n/d' : '2028'] as Station]));

const e1 = { ...base };
const e3 = { ...base, 'Sarrià': [30, 2, '2026'] as Station, 'Mandri': [40, 0, '2026'] as Station };
const e4 = { ...e3, 'Sarrià': [40, 2, '2026'] as Station, 'Mandri': [60, 0, '2026'] as Station };
const e5 = { ...e4, 'Sarrià': [50, 2, '2026'] as Station, 'Mandri': [65, 0, '2026'] as Station };
const { Muntanya: _gone, ...e5NoMuntanya } = e5;
const e6 = {
  ...all2028(e5NoMuntanya),
  'Sarrià': [55, 2, '2028'] as Station,
  'Mandri': [75, 0, '2028'] as Station,
  'La Sagrera': [100, 95, '2028'] as Station,
  'Sagrera | TAV': [100, 95, '2028'] as Station,
};
const e7 = {
  ...e6,
  'Campus Nord': [6, 0, '2030'] as Station,
  'Manuel Girona': [null, null, '2030'] as Station,
  'Sarrià': [55, 2, '2030'] as Station,
  'Mandri': [75, 0, '2030'] as Station,
  'El Putxet': [18, 0, '2030'] as Station,
  'Lesseps': [92, 0, '2030'] as Station,
  'Sanllehy': [42, 0, '2027'] as Station,
  'Guinardó': [95, 0, '2027'] as Station,
  'Pl. Maragall': [97, 0, '2027'] as Station,
  'La Sagrera': [100, 95, '2027'] as Station,
};

const mandriForecast = { ca: 'Previsió: estiu 2023, la tuneladora arriba a La Bonanova', en: 'Forecast: the boring machine reaches La Bonanova in summer 2023' };
const endForecast = { ca: 'Previsió: desembre 2024, la tuneladora finalitza l’excavació', en: 'Forecast: the machine finishes digging in December 2024' };

export const EDITIONS: Edition[] = [
  {
    id: 'e1', newsTitle: 'Notes on the map', date: '21 de juny 2022', short: 'Jun 2022', iso: '2022-06-21', image: 'works-edition-1', tbm: 0.109, speed: '200 m/month',
    forecast: [mandriForecast, endForecast],
    news: [
      { ca: 'Tuneladora 2 en funcionament a Zona Universitària des de juny 2022', en: 'Boring machine 2 working from Zona Universitària since June 2022' },
      { ca: 'Túnel i viaducte construïts: 44.343 m (88,5%)', en: 'Tunnel and viaduct built: 44,343 m (88.5%)' },
      { ca: 'Túnel construït (1/06–21/06/22): aprox. 146,67 m', en: 'Tunnel dug between 1 and 21 June 2022: about 146.67 m' },
    ],
    names: { mandri: 'La Bonanova', muntanya: 'Parc Güell' },
    stations: e1,
  },
  {
    id: 'e2', newsTitle: 'Since the last edition', date: 'març de 2023', short: 'Mar 2023', iso: '2023-03-01', image: 'works-edition-2', tbm: 0.232, speed: '200 m/month',
    forecast: [mandriForecast, endForecast],
    news: [
      { en: 'The bored tunnel now reaches just short of Sarrià' },
      { en: 'Station figures and forecasts unchanged since June 2022' },
      { ca: 'Túnel i viaducte construïts: 44.343 m (88,5%)', en: 'Tunnel and viaduct built: 44,343 m (88.5%)' },
    ],
    names: { mandri: 'La Bonanova', muntanya: 'Parc Güell' },
    stations: e1,
  },
  {
    id: 'e3', newsTitle: 'Since the last edition', date: 'abril de 2023', short: 'Apr 2023', iso: '2023-04-01', image: 'works-edition-3', tbm: 0.233, speed: '200 m/month',
    forecast: [{ ca: 'Previsió: estiu 2023, la tuneladora arriba a Mandri', en: 'Forecast: the machine reaches Mandri in summer 2023' }, endForecast],
    news: [
      { en: 'La Bonanova is now Mandri; Parc Güell is now Muntanya' },
      { en: 'Sarrià goes from 15% to 30% civil works; Mandri from 30% to 40%' },
      { en: 'Motors shows 10% civil works' },
      { en: 'The tunnel statistics panel is gone' },
    ],
    names: { mandri: 'Mandri', muntanya: 'Muntanya' },
    stations: e3,
  },
  {
    id: 'e4', newsTitle: 'Novetats juliol–desembre 2023', date: 'desembre de 2023', short: 'Dec 2023', iso: '2023-12-01', image: 'works-edition-4', tbm: 0.333, speed: '180 m/month',
    forecast: [{ ca: 'Previsió: 23/04/2024, la tuneladora arriba a Mandri', en: 'Forecast: the machine reaches Mandri on 23 April 2024' }, endForecast],
    news: [
      { ca: 'Sarrià passa del 30 al 40% d’obra civil executada', en: 'Sarrià goes from 30% to 40% civil works' },
      { ca: 'Mandri passa del 40% al 60%', en: 'Mandri goes from 40% to 60%' },
      { ca: 'Tuneladora a 700 m de Mandri (fa un any la previsió era arribar-hi a l’estiu de 2023)', en: 'Machine 700 m from Mandri (a year ago, it was due there by summer 2023)' },
      { ca: 'Tuneladora de Lesseps extreta', en: 'The Lesseps boring machine has been removed' },
      { ca: 'En licitació les estructures metàl·liques interiors de Maragall i Guinardó', en: 'Out to tender: interior steel structures at Maragall and Guinardó' },
      { ca: 'En licitació la connexió definitiva de l’L9/L10 Nord amb el tram central', en: 'Out to tender: the final link between L9/L10 Nord and the central section' },
      { ca: 'Represa en els propers mesos de les obres a Campus Nord i El Putxet', en: 'Work at Campus Nord and El Putxet to restart in the coming months' },
    ],
    names: { mandri: 'Mandri', muntanya: 'Muntanya' },
    stations: e4,
  },
  {
    id: 'e5', newsTitle: 'Novetats', date: 'juliol de 2024', short: 'Jul 2024', iso: '2024-07-01', image: 'works-edition-5', tbm: 0.4254, speed: '180 m/month',
    forecast: [endForecast],
    news: [
      { ca: 'Sarrià passa del 40 al 50% d’obra civil, finalitzat l’anell 18/29', en: 'Sarrià goes from 40% to 50%; ring 18 of 29 finished' },
      { ca: 'Mandri passa del 60% al 65%', en: 'Mandri goes from 60% to 65%' },
      { ca: 'Tuneladora arriba a Mandri (29/07/2024)', en: 'The machine reaches Mandri (29 July 2024)' },
      { ca: 'En marxa: llosa intermèdia, via i catenària al tram Guinardó–Lesseps', en: 'Under way: intermediate slab, track and overhead line between Guinardó and Lesseps' },
      { ca: 'En marxa: rampes i cimentació al tram Macropou–Guinardó', en: 'Under way: ramps and foundations between the Macropou and Guinardó' },
      { ca: 'Obres iniciades per a la connexió definitiva de l’L9/L10 Nord', en: 'Work started on the final L9/L10 Nord connection' },
    ],
    names: { mandri: 'Mandri', muntanya: 'Muntanya' },
    stations: e5,
  },
  {
    id: 'e6', newsTitle: 'Novetats', date: 'desembre de 2024', short: 'Dec 2024', iso: '2024-12-01', image: 'works-edition-6', tbm: 0.4254, speed: '180 m/month',
    forecast: [{ ca: 'Tuneladora en manteniment a Mandri durant 14 mesos', en: 'Boring machine under maintenance at Mandri for 14 months' }],
    news: [
      { ca: 'Tuneladora en manteniment a Mandri, aturada fins a la tardor del 2025', en: 'Machine under maintenance at Mandri, stopped until autumn 2025' },
      { ca: 'En marxa: llosa intermèdia, via i catenària al tram Guinardó–Lesseps', en: 'Under way: intermediate slab, track and overhead line between Guinardó and Lesseps' },
      { ca: 'En fase de redacció: L4 entre La Pau i Sagrera | TAV', en: 'Being drafted: L4 between La Pau and Sagrera | TAV' },
      { ca: 'En fase de redacció: L2 entre St. Antoni i Parc Logístic', en: 'Being drafted: L2 between Sant Antoni and Parc Logístic' },
      { ca: 'En fase de licitació: Manuel Girona, Campus Nord', en: 'Out to tender: Manuel Girona, Campus Nord' },
    ],
    names: { mandri: 'Mandri', muntanya: null },
    stations: e6,
  },
  {
    id: 'e7', newsTitle: 'Novetats', date: 'juny de 2025', short: 'Jun 2025', iso: '2025-06-01', image: 'works-edition-7', tbm: 0.4254, speed: '180 m/month',
    forecast: [{ ca: 'Instal·lació de la nova roda de la tuneladora. Reinici de l’activitat a la tardor', en: 'New cutting wheel being fitted. Digging restarts in the autumn' }],
    news: [
      { ca: 'Adjudicada: excavació del pou i galeries a Manuel Girona', en: 'Awarded: shaft and gallery excavation at Manuel Girona' },
      { ca: 'Finalitzat: instal·lació de la llosa intermèdia fins a Guinardó', en: 'Finished: intermediate slab as far as Guinardó' },
      { ca: 'En execució: llosa intermèdia Guinardó–Sanllehy', en: 'In progress: intermediate slab Guinardó–Sanllehy' },
      { ca: 'En execució: ascensors i accés a les andanes a Pl. Maragall i Guinardó', en: 'In progress: lifts and platform access at Pl. Maragall and Guinardó' },
      { ca: 'En execució: excavació d’anells a Sanllehy i Sarrià', en: 'In progress: ring excavation at Sanllehy and Sarrià' },
      { ca: 'En execució: obres d’inici a Campus Nord', en: 'In progress: initial works at Campus Nord' },
    ],
    names: { mandri: 'Mandri', muntanya: null },
    stations: e7,
  },
];
