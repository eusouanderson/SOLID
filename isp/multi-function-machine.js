class MultiFunctionMachine {
  print() {
    console.log("Imprimindo documento...");
  }

  scan() {
    console.log("Escaneando documento...");
  }

  fax() {
    console.log("Enviando fax...");
  }
}

class SimplePrinter extends MultiFunctionMachine {
  print() {
    console.log("Imprimindo documento...");
  }

  scan() {
    throw new Error("Não suporta escanear");
  }

  fax() {
    throw new Error("Não suporta fax");
  }
}
