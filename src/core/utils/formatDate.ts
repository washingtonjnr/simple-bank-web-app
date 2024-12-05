export function formatDate(date: Date | string): string {
  try {
    const dt = new Date(date);

    return Intl.DateTimeFormat("pt-br").format(dt);
  } catch {
    return "No data"
  }
}
