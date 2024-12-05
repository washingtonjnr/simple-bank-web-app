export const isValidCPF = (value: string) => {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
};

export const isValidCNPJ = (value: string) => {
  return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value);
};
