function quadratic(a: number, b: number, c: number): void {
  let x1: number = 0,
    x2: number = 0;
  x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  console.log(`X1 equal to ${x1}\nX2 equal to ${x2}`);
}

quadratic(2, -7, 3);
