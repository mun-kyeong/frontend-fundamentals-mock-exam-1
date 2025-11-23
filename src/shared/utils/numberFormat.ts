export function stripNonNumeric(value: string) {
  return value.replace(/[^0-9]/g, '');
}

export function formatNumberWithComma(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
