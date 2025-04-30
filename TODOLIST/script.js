function concluirTarefa(checkbox) {
    const tarefa = checkbox.closest('li');
    tarefa.remove();
}

function adicionarTarefa(event) {
    event.preventDefault();

    const inputTarefa = event.target.todo;
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === '') {
        alert("A tarefa não pode estar vazia!!");
        return;
    }

    const htmlTarefa = `
        <li>
            <input type="checkbox" onclick="concluirTarefa(this)" />
            <span>${textoTarefa}</span>
        </li>
    `;

    document
        .querySelector('#todo-list')
        .insertAdjacentHTML('beforeend', htmlTarefa);

    inputTarefa.value = '';
}

document
    .querySelector('#form-todo')
    .addEventListener('submit', adicionarTarefa);
