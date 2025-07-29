// Fungsi never (tidak pernah kembali)
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Kesalahan terjadi!"); // Uncomment untuk uji coba
