// Type alias
type ID = string | number;
let userId: ID = 1234;
console.log("Type Alias:", userId);

// Interface
interface Mahasiswa {
  nama: string;
  nim: number;
}

const mhs: Mahasiswa = {
  nama: "Yogaone",
  nim: 22123456,
};
console.log("Interface:", mhs);
