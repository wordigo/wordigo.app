export const roundToFiveOrTen = (number: number): number => {
  const remainder = number % 10;
  if (remainder < 5) {
    return number - remainder;
  } else {
    return number + (10 - remainder);
  }
};
