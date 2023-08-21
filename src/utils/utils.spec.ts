import { getDecimalSeparator, required } from './utils';

describe('required', () => {
  it('returns null for a non-empty / valid value', () => {
    const value = 'any value';
    const result = required(value);
    expect(result).toBeNull();
  });

  it('returns an object with for an empty value', () => {
    const value = '';
    const result = required(value);
    expect(result).toEqual({ required: 'Required field' });
  });

  it('returns an object with for null', () => {
    const value = null;
    const result = required(value);
    expect(result).toEqual({ required: 'Required field' });
  });

  it('returns an object with for undefined', () => {
    const value = undefined;
    const result = required(value);
    expect(result).toEqual({ required: 'Required field' });
  });
});

describe('getDecimalSeparator', () => {
  it('returns the correct decimal separator for the default locale', () => {
    const separator = getDecimalSeparator();
    expect(separator).toEqual('.');
  });

  it('returns the correct decimal separator for a custom locale (,)', () => {
    // set a custom locale for testing
    Intl.NumberFormat = jest.fn(() => ({
      resolvedOptions: () => ({ locale: 'nl-NL' }),
    })) as any;
    
    const separatorDot = getDecimalSeparator();
    expect(separatorDot).toEqual('.');

  });
});