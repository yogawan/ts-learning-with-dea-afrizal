// Union type
let kode: string | number = "ABC123";
kode = 123;
console.log("Union:", kode);

// Intersection type
type A = { nama: string };
type B = { umur: number };
type C = A & B;

const orang: C = { nama: "Yoga", umur: 20 };
console.log("Intersection:", orang);
