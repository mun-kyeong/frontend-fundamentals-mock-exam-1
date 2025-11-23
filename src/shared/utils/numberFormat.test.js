import { stripNonNumeric, formatNumberWithComma } from './numberFormat';

describe('stripNonNumeric', () => {
  it('숫자만 남겨야 한다', () => {
    expect(stripNonNumeric('1,234원')).toBe('1234');
    expect(stripNonNumeric('abc123')).toBe('123');
    expect(stripNonNumeric('')).toBe('');
  });
});

describe('formatNumberWithComma', () => {
  it('천 단위 콤마가 붙어야 한다', () => {
    expect(formatNumberWithComma('1000')).toBe('1,000');
    expect(formatNumberWithComma('1234567')).toBe('1,234,567');
  });
});
