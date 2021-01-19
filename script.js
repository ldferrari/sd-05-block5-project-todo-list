let adicionar = document.querySelector("#criar-tarefa");
let ol = document.querySelector("#lista-tarefas");
let lista = document.querySelectorAll(".list");
let apagarSelecionado = document.querySelector("#remover-selecionado");
let cima = document.querySelector("#mover-cima");
let baixo = document.querySelector("#mover-baixo");
let apagarLista = document.querySelector("#apaga-tudo");
let apagarFinalizados = document.querySelector("#remover-finalizados");
let salvar = document.querySelector("#salvar-tarefas"); 

// carregar localStorage
for (let f = 0; f < localStorage.length; f++){
    listaSrorage = localStorage.getItem([f]);
    let li = document.createElement("li");
    li.classList.add("list")
    li.innerHTML = listaSrorage;
    ol.appendChild(li);
}
lista = document.querySelectorAll(".list");
for(let a = 0; a < lista.length; a++){
    lista[a].addEventListener("click",selected);
    lista[a].addEventListener("dblclick",completo);
}

adicionar.addEventListener("click", addList);
function addList (){
    let input = document.querySelector("#texto-tarefa").value;
    let li = document.createElement("li");
    li.classList.add("list")
    li.innerHTML = input;
    ol.appendChild(li);
    document.querySelector("#texto-tarefa").value="";

    lista = document.querySelectorAll(".list");
    for(let a = 0; a < lista.length; a++){
        lista[a].addEventListener("click",selected);
        lista[a].addEventListener("dblclick",completo);
    } 
}
function selected (event){
    console.log(event);
    let secionado = event.target.classList.contains('selected');
    for(let b = 0; b < lista.length; b++){
    lista[b].classList.remove('selected')
    }
    event.target.classList.add('selected');
}

function completo (event){
    let completed = event.target.classList.contains('completed');
    if(!completed){
    event.target.classList.add('completed');
    }
    else{
    event.target.classList.remove('completed');    
    }
}

apagarSelecionado.addEventListener("click",apagarSelec);
function apagarSelec (){
    let selec = document.querySelectorAll(".selected")
    for (let d = 0; d < selec.length; d++){
        if (selec){
        ol.removeChild(selec[d]);
        }
    }
}

cima.addEventListener("click",aCima);
function aCima(){
    let itemselec = document.querySelectorAll(".selected")[0];
    console.log(itemselec)
    for(let h = 0; h < lista.length; h++){
        if (lista[h] === itemselec){
            console.log(lista[h])
            let itemstandbay = "";
            let itemAcima = lista[[h]-1];
            console.log(itemAcima);
            itemstandbay = lista[h];
            console.log(itemstandbay)
            lista[h] = itemAcima;
            console.log(itemselec)
            lista[[h]-1] = itemstandbay;
            console.log(itemAcima)

            for(let i = 0; i < lista.length; i++){
            lista[i].innerHTML
            }
        }
    }
}

baixo.addEventListener("click",aBaixo);
function aBaixo(){
    let selec = document.querySelectorAll(".selected")
    for (let d = 0; d < selec.length; d++){
        if (selec){
        ol.removeChild(selec[d]);
        }
    }
}

apagarLista.addEventListener("click",apagarLi);
function apagarLi (){
    let lis = document.querySelectorAll(".list")
    for (let c = 0; c < lis.length; c++){
        if (lis){
        ol.removeChild(lis[c]);

        }
    }
}

apagarFinalizados.addEventListener("click",apagarCompleto);
function apagarCompleto (){
    let compl = document.querySelectorAll(".completed")
    for (let d = 0; d < compl.length; d++){
        if (compl){
        ol.removeChild(compl[d]);
        }
    }
} 

salvar.addEventListener("click",salvarTarefas);
function salvarTarefas (){
    localStorage.clear();
    lista = document.querySelectorAll(".list");
    for(let d = 0; d < lista.length; d++){
    localStorage.setItem([d],lista[d].innerHTML);
    }
}     