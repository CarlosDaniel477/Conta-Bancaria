class ContaBancariaSimplificada {
  private nomeDoCorrentista: string;
  private saldo: number;
  private contaEspecial: boolean;

  constructor() {
    this.nomeDoCorrentista = "";
    this.saldo = 0;
    this.contaEspecial = false;
  }

  public abreConta(nome: string, deposito: number, contaEspecial: boolean): void {
    this.nomeDoCorrentista = nome;
    this.saldo = deposito >= 0 ? deposito : 0;
    this.contaEspecial = contaEspecial;
  }

  public abreContaSimples(nome: string): void {
    this.nomeDoCorrentista = nome;
    this.saldo = 0;
    this.contaEspecial = false;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log("\nDeposito de R$" + valor.toFixed(2) + " realizado com sucesso.");
    } else {
      console.log("\nErro: O valor do deposito deve ser positivo.");
    }
  }

  public retirar(valor: number): void {
    if (valor > this.saldo) {
      console.log("\nErro: Saldo insuficiente para realizar a retirada.");
    } else if (valor <= 0) {
      console.log("\nErro: O valor da retirada deve ser positivo.");
    } else {
      this.saldo -= valor;
      console.log("\nRetirada de R$" + valor.toFixed(2) + " realizada com sucesso.");
    }
  }

  public mostrarDados(): void {
    console.log("\n-------------------------");
    console.log("    Dados da Conta");
    console.log("-------------------------");
    console.log("Correntista: " + this.nomeDoCorrentista);
    console.log("Saldo: R$" + this.saldo.toFixed(2));
    console.log("Conta Especial: " + (this.contaEspecial ? "Sim" : "Nao"));
    console.log("-------------------------\n");
  }
}

// --- Exemplos de Execucao ---

const contaEspecial = new ContaBancariaSimplificada();
contaEspecial.abreConta("Joao", 1000, true);
contaEspecial.mostrarDados();

console.log("--- Operacoes na Conta Especial ---");
contaEspecial.depositar(500);
contaEspecial.retirar(200);
contaEspecial.mostrarDados();
contaEspecial.retirar(2000);

const contaSimples = new ContaBancariaSimplificada();
contaSimples.abreContaSimples("Maria");
contaSimples.mostrarDados();

console.log("--- Operacoes na Conta Simples ---");
contaSimples.depositar(300);
contaSimples.retirar(50);
contaSimples.mostrarDados();