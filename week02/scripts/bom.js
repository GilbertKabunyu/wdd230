const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.innerHTML = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = '';
    }
    else {
        input.focus();
    }
});