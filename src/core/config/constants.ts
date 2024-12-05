export const MONTHS:{ label: string, alias: string }[] = [
  { label: "JAN", alias: "january" },
  { label: "FEV", alias: "february" },
  { label: "MAR", alias: "march" },
  { label: "ABR", alias: "april" },
  { label: "MAI", alias: "may" },
  { label: "JUN", alias: "june" },
  { label: "JUL", alias: "july" },
  { label: "AGO", alias: "august" },
  { label: "SET", alias: "september" },
  { label: "OUT", alias: "october" },
  { label: "NOV", alias: "november" },
  { label: "DEZ", alias: "december" },
];

export const YEAR: number[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
].map(y => (new Date().getFullYear()) - y).reverse();


export const PAYMENT_TYPES: string[] = [
  "PIX", "TED"
]
