// Generic function
function identity<T>(value: T): T {
  return value;
}

console.log("Generic:", identity<string>("Generic Value"));
console.log("Generic:", identity<number>(100));
