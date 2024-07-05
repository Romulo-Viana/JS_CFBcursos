"use scrict"

// Var = Escopo Global
// Let = Escopo local
// Const = value(ou valor) inalteravel


function teste(){
    if(true){
        var nome="Bruno"
        console.log(`Dentro de IF do teste:`,nome)
    }
    console.log(`Dentro de teste:`,nome)
}

teste()

console.log(`Fora de teste:`,nome)


