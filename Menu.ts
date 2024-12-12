import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    /* Instancias (objetos) da Classe Conta
    const c1 = new Conta(1, 123, 1, "Jonas", 100000);
    c1.visualizar();
    console.log(c1.sacar(100.00));
    c1.visualizar();

    const c2 = new Conta(2, 123, 2, "Aline", 200000);
    c2.visualizar();
    c2.depositar(100.00);
    c2.visualizar();*/

    /*const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
    cc1.visualizar();

    //saque na conta corrente
    cc1.sacar(100500);
    cc1.visualizar();

    //deposito na conta corrente
    cc1.depositar(2000);
    cc1.visualizar();*/

    //conta poupanca
    const cp1 = new ContaPoupanca(4, 789, 2, "Lia", 500000, 1);
    cp1.visualizar();

    console.log("");
    
    while (true) {

        console.log(colors.bg.black, colors.fg.green);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");
                keyPress();
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                keyPress();
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                keyPress();
                break;
            case 6:
                console.log("\n\nSaque\n\n");
                keyPress();
                break;
            case 7:
                console.log("\n\nDepósito\n\n");
                keyPress();
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress();
                break;
        }
    }

}

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.gray);
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Lia Matsubara - matsubaralia@gmail.com");
    console.log("https://github.com/liamatsubara");
    console.log("*****************************************************");
    console.log(colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();