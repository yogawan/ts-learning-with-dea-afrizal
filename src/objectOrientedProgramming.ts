class Mahasiswa {
  nama: string;
  umur: number;

  constructor(nama: string, umur: number) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa(): void {
    console.log(`Halo, nama saya ${this.nama}, umur ${this.umur}`);
  }
}

const mhs: any = new Mahasiswa("Yogaone", 20);
mhs.sapa();
