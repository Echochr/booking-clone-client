export const ratingsLookup = (rating: number | undefined) => {
  if (rating === undefined) return 'Good';
  if (rating >= 9.5) return 'Exceptional';
  else if (rating >= 9.0) return 'Wonderful';
  else if (rating >= 8.0) return 'Excellent';
  else return 'Good';
};
