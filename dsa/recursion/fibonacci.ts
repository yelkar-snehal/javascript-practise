export default function fibonacci(num: number): number {
  // base case
  if (num <= 1) return 1;

  // recursive case
  return num * fibonacci(num - 1);
}
