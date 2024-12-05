export const isValidCPF = (value: string): boolean => {
  const cleaned = value.replace(/[^\d]/g, '');
  if (cleaned.length !== 11 || /(\d)\1{10}/.test(cleaned)) {
    return false;
  }

  const calcDigit = (cpf: string, factor: number[]): number => {
    const sum = factor.reduce((acc, factorValue, idx) => acc + parseInt(cpf[idx]) * factorValue, 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const factor1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const factor2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  const firstDigit = calcDigit(cleaned, factor1);
  const secondDigit = calcDigit(cleaned + firstDigit, factor2);

  return cleaned[9] === firstDigit.toString() && cleaned[10] === secondDigit.toString();
};

export const isValidCNPJ = (value: string): boolean => {
  const cleaned = value.replace(/[^\d]/g, '');
  if (cleaned.length !== 14 || /(\d)\1{13}/.test(cleaned)) {
    return false;
  }

  const calcDigit = (cnpj: string, factor: number[]): number => {
    const sum = factor.reduce((acc, factorValue, idx) => acc + parseInt(cnpj[idx]) * factorValue, 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const factor1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const factor2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const firstDigit = calcDigit(cleaned, factor1);
  const secondDigit = calcDigit(cleaned + firstDigit, factor2);

  return cleaned[12] === firstDigit.toString() && cleaned[13] === secondDigit.toString();
};
