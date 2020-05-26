const buttonAdicionar = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const buttonLimpaTudo = document.getElementById('apaga-tudo');
const buttonLimpaFeitos = document.getElementById('remover-finalizados');

buttonAdicionar.addEventListener('click', function () {
  let li = document.createElement('li');
  li.onclick = function () {
    li.style.backgroundColor = 'rgb(128,128,128)';
  };
  li.ondblclick = function () {
    let liCompleted = li.getAttribute('class');
    if (!liCompleted) {
      li.setAttribute('class', 'completed');
    } else {
      li.removeAttribute('class', 'completed');
    }
  };
  li.innerHTML = inputText.value;
  lista.appendChild(li);
  inputText.value = '';
});

buttonLimpaTudo.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    lista.removeChild(lis[i]);
  }
});
buttonLimpaFeitos.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    let itemDaLista = lis[index];
    if (itemDaLista.getAttribute('class')) {
      lista.removeChild(lis[index]);
    }
  }
});
