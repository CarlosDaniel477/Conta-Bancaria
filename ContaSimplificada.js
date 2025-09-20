var ContaBancariaSimplificada = /** @class */ (function () {
    function ContaBancariaSimplificada() {
        this.nomeDoCorrentista = "";
        this.saldo = 0;
        this.contaEspecial = false;
    }
    ContaBancariaSimplificada.prototype.abreConta = function (nome, deposito, contaEspecial) {
        this.nomeDoCorrentista = nome;
        this.saldo = deposito >= 0 ? deposito : 0;
        this.contaEspecial = contaEspecial;
    };
    ContaBancariaSimplificada.prototype.abreContaSimples = function (nome) {
        this.nomeDoCorrentista = nome;
        this.saldo = 0;
        this.contaEspecial = false;
    };
    ContaBancariaSimplificada.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("\nDeposito de R$" + valor.toFixed(2) + " realizado com sucesso.");
        }
        else {
            console.log("\nErro: O valor do deposito deve ser positivo.");
        }
    };
    ContaBancariaSimplificada.prototype.retirar = function (valor) {
        if (valor > this.saldo) {
            console.log("\nErro: Saldo insuficiente para realizar a retirada.");
        }
        else if (valor <= 0) {
            console.log("\nErro: O valor da retirada deve ser positivo.");
        }
        else {
            this.saldo -= valor;
            console.log("\nRetirada de R$" + valor.toFixed(2) + " realizada com sucesso.");
        }
    };
    ContaBancariaSimplificada.prototype.mostrarDados = function () {
        console.log("\n-------------------------");
        console.log("    Dados da Conta");
        console.log("-------------------------");
        console.log("Correntista: " + this.nomeDoCorrentista);
        console.log("Saldo: R$" + this.saldo.toFixed(2));
        console.log("Conta Especial: " + (this.contaEspecial ? "Sim" : "Nao"));
        console.log("-------------------------\n");
    };
    return ContaBancariaSimplificada;
}());
// --- Exemplos de Execucao ---
var contaEspecial = new ContaBancariaSimplificada();
contaEspecial.abreConta("Joao", 1000, true);
contaEspecial.mostrarDados();
console.log("--- Operacoes na Conta Especial ---");
contaEspecial.depositar(500);
contaEspecial.retirar(200);
contaEspecial.mostrarDados();
contaEspecial.retirar(2000);
var contaSimples = new ContaBancariaSimplificada();
contaSimples.abreContaSimples("Maria");
contaSimples.mostrarDados();
console.log("--- Operacoes na Conta Simples ---");
contaSimples.depositar(300);
contaSimples.retirar(50);
contaSimples.mostrarDados();
