export function currencyToNumber(value: string | number): number {
  const valueReplaced = `${value}`.replace(/\./g, "").replace(",", ".");

  return Number(valueReplaced);
}
