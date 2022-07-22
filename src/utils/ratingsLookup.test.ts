import { ratingsLookup } from './ratingsLookup';

describe('ratingsLookup', () => {
  it('should return the correct value', () => {
    expect(ratingsLookup(undefined)).toBe('Good');
    expect(ratingsLookup(9.8)).toBe('Exceptional');
    expect(ratingsLookup(9.2)).toBe('Wonderful');
    expect(ratingsLookup(8)).toBe('Excellent');
    expect(ratingsLookup(7)).toBe('Good');
    expect(ratingsLookup(1)).toBe('Good');
  });
});
