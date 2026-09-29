/* Estat de les obres: every number here is read off Martí's eight L9/L10
   status maps (see docs/metro-maps-data.md). Edition 1 is undated. */

export interface Edition {
  id: number;
  label: string;        // train-line stop label
  date: string | null;  // as printed on the map (Catalan)
  t: number | null;     // decimal year, for the finish-line chart
  image: string;
  scope: string;        // the map's title line
  bored: number;        // how far the pale-yellow bored tunnel reaches, 0–1 along Zona Universitària → La Sagrera
  l2: boolean;          // L2 extension drawn in grey
  box: { title: string; items: { ca: string; en: string }[] };
  note?: string;        // margin note, from the caption bank
}

export const STATIONS = [
  'Campus Nord', 'Manuel Girona', 'Prat de la Riba', 'Sarrià', 'Mandri', 'El Putxet', 'Lesseps',
  'Muntanya', 'Sanllehy', 'Guinardó', 'Pl. Maragall', 'La Sagrera', 'Sagrera | TAV',
] as const;

/* Promised opening year per edition (ed1 … Jun 2025). '' = not on that edition. */
export const YEARS: Record<string, string[]> = {
  'Camp Nou':        ['2026', '2026', '2026', '2026', '2026', '2026', '2028', '2030'],
  'Campus Nord':     ['2028', '2028', '2028', '2028', '2028', '2028', '2028', '2030'],
  'Manuel Girona':   ['2028', '2028', '2028', '2028', '2028', '2028', '2028', '2030'],
  'Prat de la Riba': ['n/d', 'n/d', 'n/d', 'n/d', 'n/d', 'n/d', 'n/d', 'n/d'],
  'Sarrià':          ['2026', '2026', '2026', '2026', '2026', '2026', '2028', '2030'],
  'Mandri':          ['2026', '2026', '2026', '2026', '2026', '2026', '2028', '2030'],
  'El Putxet':       ['2028', '2028', '2028', '2028', '2028', '2028', '2028', '2030'],
  'Muntanya':        ['n/d', 'n/d', 'n/d', 'n/d', 'n/d', 'n/d', '', ''],
  'Sanllehy':        ['2026', '2026', '2026', '2026', '2026', '2026', '2028', '2027'],
  'Lesseps':         ['2025', '2025', '2025', '2025', '2025', '2025', '2028', '2030'],
  'Guinardó':        ['2025', '2025', '2025', '2025', '2025', '2025', '2028', '2027'],
  'Pl. Maragall':    ['2026', '2026', '2026', '2026', '2026', '2026', '2028', '2027'],
  'Sagrera | TAV':   ['2025', '2025', '2025', '2025', '2025', '2025', '2028', '2028'],
  'La Sagrera':      ['2025', '2025', '2025', '2025', '2025', '2025', '2028', '2027'],
  'Santander':       ['2024', '2024', '2024', '2024', '2024', '2024', '2028', '2030'],
  'Motors':          ['2028', '2028', '2028', '2028', '2028', '2028', '2028', '2028'],
};

/* [civil, architecture] per edition. null civil = "No iniciada". */
const hold = (c: number | null, a: number | null) => Array(8).fill([c, a]) as [number | null, number | null][];
export const PROGRESS: Record<string, [number | null, number | null][]> = {
  'Campus Nord':     [23, 6, 6, 6, 6, 6, 6, 6].map((c) => [c, 0]),
  'Manuel Girona':   hold(null, null),
  'Prat de la Riba': [23, 1, 1, 1, 1, 1, 1, 1].map((c) => [c, 0]),
  'Sarrià':          [[14, null], [15, 2], [15, 2], [30, 2], [40, 2], [50, 2], [55, 2], [55, 2]],
  'Mandri':          [23, 30, 30, 40, 40, 65, 75, 75].map((c) => [c, 0]),
  'El Putxet':       [14, 18, 18, 18, 18, 18, 18, 18].map((c) => [c, 0]),
  'Lesseps':         hold(92, 0),
  'Muntanya':        hold(null, null),
  'Sanllehy':        hold(42, 0),
  'Guinardó':        hold(95, 0),
  'Pl. Maragall':    hold(97, 0),
  'La Sagrera':      [100, 100, 100, 100, 100, 100, 95, 95].map((a) => [100, a]),
  'Sagrera | TAV':   [100, 100, 100, 100, 100, 100, 95, 95].map((a) => [100, a]),
};

export const NAMES: Record<string, string[]> = {
  'Mandri':   ['La Bonanova', 'La Bonanova', 'La Bonanova', 'Mandri', 'Mandri', 'Mandri', 'Mandri', 'Mandri'],
  'Muntanya': ['Parc Güell', 'Parc Güell', 'Parc Güell', 'Muntanya', 'Muntanya', 'Muntanya', '', ''],
  'Guinardó': ['Guinardó/Hospital de Sant Pau', 'Guinardó/Hospital de Sant Pau', 'Guinardó/Hospital de Sant Pau', 'Guinardó | Hospital de Sant Pau', 'Guinardó | Hospital de Sant Pau', 'Guinardó | Hospital de Sant Pau', 'Guinardó | Hospital de Sant Pau', 'Guinardó | Hospital de Sant Pau'],
};

const L910 = 'de les línies 9 i 10';
const L91042 = 'a les línies 9, 10, 4 i 2';

export const EDITIONS: Edition[] = [
  {
    id: 1, label: 'Ed. 1', date: null, t: null, image: 'works-draft-2', scope: L910, bored: 0.02, l2: false,
    box: { title: 'Al mapa', items: [
      { ca: 'Estacions del viaducte: 100% 98%, 2021', en: 'Viaduct stations: 100% 98%, 2021' },
      { ca: 'El tram Collblanc–Zona Universitària utilitza 1 dels dos nivells del túnel per a l’extracció de terra de la tuneladora', en: 'The Collblanc–Zona Universitària section lends one of its two tunnel levels to the boring machine, to take the earth out' },
    ] },
  },
  {
    id: 2, label: 'Jun 2022', date: '21 de juny 2022', t: 2022.47, image: 'works-edition-1', scope: L910, bored: 0.109, l2: false,
    box: { title: 'Al mapa', items: [
      { ca: 'Tuneladora 2, Zona Universitària. En funcionament des de juny 2022. Velocitat: 200 m/mes', en: 'Boring machine 2, Zona Universitària. Working since June 2022, 200 m a month' },
      { ca: 'Túnel i viaducte construïts: 44.343 m (88,5%)', en: 'Tunnel and viaduct built: 44,343 m (88.5%)' },
      { ca: 'Previsió: estiu 2023, la tuneladora arriba a La Bonanova', en: 'Forecast: the machine reaches La Bonanova in summer 2023' },
    ] },
    note: 'Some numbers went backwards: Campus Nord 23% → 6%, Prat de la Riba 23% → 1%.',
  },
  {
    id: 3, label: 'Mar 2023', date: 'març de 2023', t: 2023.17, image: 'works-edition-2', scope: L910, bored: 0.232, l2: false,
    box: { title: 'Al mapa', items: [
      { ca: 'Túnel i viaducte construïts: 44.343 m (88,5%)', en: 'Tunnel and viaduct built: 44,343 m (88.5%), still the June 2022 figure' },
      { ca: 'Previsió: estiu 2023, la tuneladora arriba a La Bonanova', en: 'Forecast: the machine reaches La Bonanova in summer 2023' },
    ] },
  },
  {
    id: 4, label: 'Apr 2023', date: 'abril de 2023', t: 2023.25, image: 'works-edition-3', scope: L910, bored: 0.233, l2: false,
    box: { title: 'Al mapa', items: [
      { ca: 'Previsió: estiu 2023, la tuneladora arriba a Mandri', en: 'Forecast: the machine reaches Mandri in summer 2023' },
      { ca: 'Previsió: desembre 2024, la tuneladora finalitza l’excavació', en: 'Forecast: digging finishes in December 2024' },
    ] },
    note: 'Two stations changed their names before either had opened.',
  },
  {
    id: 5, label: 'Dec 2023', date: 'desembre de 2023', t: 2023.92, image: 'works-edition-4', scope: L910, bored: 0.333, l2: false,
    box: { title: 'Novetats juliol–desembre 2023', items: [
      { ca: 'Sarrià passa del 30 al 40% d’obra civil executada', en: 'Sarrià goes from 30% to 40% civil works' },
      { ca: 'Mandri passa del 40% al 60%', en: 'Mandri goes from 40% to 60%' },
      { ca: 'Tuneladora a 700 m de Mandri (fa un any la previsió era arribar-hi a l’estiu de 2023)', en: 'Machine 700 m from Mandri (a year ago, it was due there by summer 2023)' },
      { ca: 'Tuneladora de Lesseps extreta', en: 'The Lesseps boring machine has been taken out' },
      { ca: 'En licitació les estructures metàl·liques interiors de les estacions de Maragall i Guinardó', en: 'Out to tender: the interior steel structures at Maragall and Guinardó' },
      { ca: 'En licitació la connexió definitiva de l’L9/L10 Nord amb el tram central', en: 'Out to tender: the final link between L9/L10 Nord and the central section' },
      { ca: 'Represa en els propers mesos de les obres a Campus Nord i El Putxet', en: 'Work at Campus Nord and El Putxet restarts in the coming months' },
    ] },
    note: 'The Diari de Barcelona used this edition in March 2024.',
  },
  {
    id: 6, label: 'Jul 2024', date: 'juliol de 2024', t: 2024.54, image: 'works-edition-5', scope: L910, bored: 0.4254, l2: false,
    box: { title: 'Novetats', items: [
      { ca: 'Sarrià passa del 40 al 50% d’obra civil executada, finalitzat l’anell 18/29', en: 'Sarrià goes from 40% to 50%; ring 18 of 29 finished' },
      { ca: 'Mandri passa del 60% al 65%', en: 'Mandri goes from 60% to 65%' },
      { ca: 'Tuneladora arriba a Mandri (29/07/2024)', en: 'The machine reaches Mandri (29 July 2024)' },
      { ca: 'En marxa: llosa intermèdia, via i catenària al tram Guinardó–Lesseps', en: 'Under way: intermediate slab, track and overhead line, Guinardó–Lesseps' },
      { ca: 'Obres iniciades per a la connexió definitiva de l’L9/L10 Nord', en: 'Work started on the final L9/L10 Nord connection' },
    ] },
    note: 'Santander: not started, and due in 2024.',
  },
  {
    id: 7, label: 'Dec 2024', date: 'desembre de 2024', t: 2024.92, image: 'works-edition-6', scope: L91042, bored: 0.4254, l2: true,
    box: { title: 'Novetats', items: [
      { ca: 'Tuneladora en manteniment a Mandri, aturada fins a la tardor del 2025', en: 'Machine under maintenance at Mandri, stopped until autumn 2025' },
      { ca: 'En fase de redacció: L4 entre La Pau i Sagrera | TAV', en: 'Being drafted: L4 between La Pau and Sagrera | TAV' },
      { ca: 'En fase de redacció: L2 entre St. Antoni i Parc Logístic', en: 'Being drafted: L2 between Sant Antoni and Parc Logístic' },
      { ca: 'En fase de licitació: Manuel Girona, Campus Nord', en: 'Out to tender: Manuel Girona, Campus Nord' },
    ] },
    note: 'Every date on the map became 2028.',
  },
  {
    id: 8, label: 'Jun 2025', date: 'juny de 2025', t: 2025.42, image: 'works-edition-7', scope: L91042, bored: 0.4254, l2: true,
    box: { title: 'Novetats', items: [
      { ca: 'Adjudicada: excavació del pou i galeries a Manuel Girona', en: 'Awarded: shaft and gallery excavation at Manuel Girona' },
      { ca: 'Finalitzat: instal·lació llosa intermèdia fins a Guinardó', en: 'Finished: intermediate slab as far as Guinardó' },
      { ca: 'En execució: llosa intermèdia Guinardó–Sanllehy', en: 'In progress: intermediate slab, Guinardó–Sanllehy' },
      { ca: 'En execució: excavació d’anells a Sanllehy i Sarrià', en: 'In progress: ring excavation at Sanllehy and Sarrià' },
      { ca: 'Instal·lació de la nova roda de la tuneladora. Reinici a la tardor', en: 'New cutting wheel being fitted. Restart in the autumn' },
    ] },
    note: 'Six months later, four stations got closer and eight got further away.',
  },
];
