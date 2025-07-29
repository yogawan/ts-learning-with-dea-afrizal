// Fungsi tanpa return (void)
function greet(): void {
  console.log("Hello, TypeScript!");
}
greet();

// Fungsi dengan return number
function sum(a: number, b: number): number {
  return a + b;
}
console.log("Function return:", sum(10, 5));
