import ceil from '../src/ceil.js';

describe('ceil', () => {
  it('Should round up an integer', () => {
    expect(ceil(5)).toBe(5);
  });

  it('Should round up a positive decimal', () => {
    expect(ceil(4.006)).toBe(5);
  });

  it('Should round up a negative decimal', () => {
    expect(ceil(-4.006)).toBe(-4);
  });

  it('Should round up with a precision 2', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  it('Should round up with a negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  it('Should return NaN for non-numeric input', () => {
    expect(ceil('text')).toBeNaN();
  });

  it('Should return Nan for no parameters', () => {
    expect(ceil()).toBeNaN();
  });
});
