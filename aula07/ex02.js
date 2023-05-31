

let agora = new Date()
let diasem = agora.getDay()

switch(diasem) {
    case 0:
        console.log("domingo")
        break
     case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terça")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log("quinta")
        break
    case 5:
        console.log("sexta")
        break
    case 7:
        console.log("sabado")
        break
    default:
    console.log("dia invalido")
    break    
}
console.log("você esta atrasado!")