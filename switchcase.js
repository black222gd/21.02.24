const sortear = () => {
let nomes = ["NEMO1","NEMO2","NEMO3","NEMO4","NEMO5","NEMO6","NEMO7","NEMO8","NEMO9","NEMO10"];

let h1Nome = document.getElementById("nome");

let achouNumero = false;
let numeroSorteado;

while (achouNumero == false){
    numeroSorteado = Math.floor(Math.random() * 100);
    if (numeroSorteado < nomes.length) {
        achouNumero = true;
    }
}

switch (numeroSorteado) {
    case 0:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 1:
        h1Nome.innerText = nomes[numeroSorteado];
         break;
    case 2:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 3:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 4:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 5:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 6:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 7:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 8:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 9:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 10:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
        default:
            h1Nome.innerText = "nome nao esta na lista";
            break;
    }
    h1Nome.innerText += " O NUMERO SORTEADO FOI:" + numeroSorteado;
}
