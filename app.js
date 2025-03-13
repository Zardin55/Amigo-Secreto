let listaDePessoas = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo == ""){
        alert ("Digite o nome de um amigo!")
        return
    }
    if (listaDePessoas.includes(nomeAmigo)){
        alert("Esse amigo ja foi adicionado!"); 
        return;
    }
    listaDePessoas.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus(); 
    atualizarLista();
}
document.body.addEventListener('keypress', function (event) {
    const key = event.key;
    if (key === 'Enter'){
        adicionarAmigo();
    }
    
  });

function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < listaDePessoas.length; i++){
        let item = document.createElement("li");
        item.textContent = listaDePessoas[i];
        listaAmigos.appendChild(item);
    }
}   

function sortearAmigo(){
    if (listaDePessoas.length == 0){
        alert("Nenhum amigo cadastrado!");
        return;

    }
    let sorteados = listaDePessoas[Math.floor(Math.random() * listaDePessoas.length)];
    let pessoaSorteada = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: ${sorteados}<li>`;
    listaDePessoas.splice(listaDePessoas.indexOf(sorteados), 1)
    atualizarLista();

    

}
