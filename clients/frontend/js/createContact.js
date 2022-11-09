export function createClientContact(type = null, value = null) {
    // <li class="popup-contacts__item">
    //     <div class="select-contacts select-section">
    //         <select class="select" name="select">
    //             <option class="select-option" selected>Телефон</option>
    //             <option class="select-option">Доп. телефон</option>
    //             <option class="select-option">Email</option>
    //             <option class="select-option">Vk</option>
    //             <option class="select-option">Facebook</option>
    //         </select>
    //     </div>
    //     <input class="input-contacts" type="text" placeholder="Введите данные контакта">
    // </li>
    const liContact = document.createElement('li');
    const divContact = document.createElement('div');
    const selectContact = document.createElement('select');

    const telOption = document.createElement('option');
    const emailOption = document.createElement('option');
    const vkOption = document.createElement('option');
    const facebookOption = document.createElement('option');
    const otherOption = document.createElement('option')

    const inputContact = document.createElement('input');
    const cancelBtn = document.createElement('button');

    liContact.classList.add('popup-contacts__item');
    divContact.classList.add('select-contacts');
    selectContact.classList.add('select');
    selectContact.setAttribute('name', 'select');
    inputContact.classList.add('input-contacts');
    cancelBtn.classList.add('popup-contacts__deleteBtn');

    telOption.value = 'Телефон';
    emailOption.value = 'Email';
    vkOption.value = 'Vk';
    facebookOption.value = 'Facebook';
    otherOption.value = 'Другое';

    cancelBtn.innerHTML = `<svg class="popup-contacts__deleteBtn-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#B0B0B0"/>
    </svg>
    `;

    if (type) {
        // inputContact.value = value;
        switch (type) {
            case "Телефон":
                telOption.setAttribute('selected', 'selected');
                break;
            case "Email":
                emailOption.setAttribute('selected', 'selected');
                break;
            case "Vk":
                vkOption.setAttribute('selected', 'selected');
                break;
            case "Facebook":
                facebookOption.setAttribute('selected', 'selected');
                break;
            case "Другое":
                otherOption.setAttribute('selected', 'selected');
                break;
            default:
                break;
        }
    } else {
        telOption.setAttribute('selected', 'selected');
    }


    telOption.textContent = 'Телефон';
    emailOption.textContent = 'Email';
    vkOption.textContent = 'Vk';
    facebookOption.textContent = 'Facebook';
    otherOption.textContent = 'Другое';
    inputContact.setAttribute('type', 'text');
    inputContact.setAttribute('placeholder', 'Введите данные контакта');

    // удаление контакта
    cancelBtn.addEventListener('click', (e) => {
        // e.preventDefault();
        // liContact.remove();
    })

    selectContact.append(telOption, emailOption, vkOption, facebookOption, otherOption);
    divContact.append(selectContact);
    liContact.append(divContact, inputContact, cancelBtn);

    // list.append(liContact);
    return liContact;
}