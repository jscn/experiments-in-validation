export function validateOdd(n: number): boolean {
  return n % 2 !== 0;
}

export function validateEven(n: number): boolean {
  return n % 2 === 0;
}

export function validateLessThan(n: number) {
  return (other: number) => n < other;
}

export function validateBetween(n: number) {
  return (leftBoundary: number) => {
    return (rightBoundary: number) =>
      (leftBoundary < n && n < rightBoundary) ||
      (rightBoundary < n && n < leftBoundary);
  };
}
