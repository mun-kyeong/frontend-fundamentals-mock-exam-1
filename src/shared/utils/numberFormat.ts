export const stripNonNumeric = (value: string) => value.replace(/[^0-9]/g, '');

export const formatNumberWithComma = (value: string) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
