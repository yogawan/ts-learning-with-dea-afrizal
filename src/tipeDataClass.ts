// Class: struktur OOP
class User {
  constructor(public username: string, public level: number) {}
  
  tampil(): void {
    console.log(`User: ${this.username}, Level: ${this.level}`);
  }
}

const player = new User("Yogaone", 99);
player.tampil();
