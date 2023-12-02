export const roundToFiveOrTen = (number: number): number => {
  const remainder = number % 10;
  if (remainder < 5) {
    return number - remainder;
  } else {
    return number + (10 - remainder);
  }
};

export const capitalizeWords = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
