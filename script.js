const createTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');
const taskItem = document.getElementsByTagName('li');

// criar uma função que irá adicionar uma nova tarefa ao receber o click no botão.
// O texto do item da lista criado, deve ser o texto inserido no text-input.//

function addTask() {
  const li = document.createElement('li');
  li.innerHTML = textInput.value;
  taskList.appendChild(li);
  textInput.value = '';
  // Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
  li.addEventListener('click', function () {
    li.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });
  li.addEventListener('dblclick', function () {
    li.classList.toggle('completed');
  });
}

function deleteList() {
  taskList.innerHTML = '';
}

/*function deleteCompleted() {
  $('.completed').remove();
}*/

function deleteCompleted() {
  let completedElements = document.getElementsByClassName('completed');
  while (completedElements.length > 0) {
    completedElements[0].parentNode.removeChild(completedElements[0]);
  }
}
