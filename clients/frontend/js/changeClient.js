import { changeClient, getClient, getClients } from "./clientsApi.js";
import { createClientContact } from "./createContact.js";
import { deleteClientModal } from "./deleteClient.js";


export function changeClientModal(data) {
    const popupChangeClient = document.getElementById('popup_3');
    const popupChangeClientClose = document.querySelector('.popup-change__close');
    const popupChangeClientAccess = document.querySelector('.popup-change__accessBtn');
    const popupChangeClientDelete = document.querySelector('.popup-change__deleteBtn');

    popupChangeClientClose.addEventListener('click', () => {
        popupChangeClient.classList.remove('_active');
    });
    popupChangeClient.addEventListener('click', (e) => {
        if (!(e.target.closest('.popup-change__content'))) {
            popupChangeClient.classList.remove('_active');
        }
    });
    popupChangeClientDelete.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('popup_3').classList.remove('_active');
        document.getElementById('popup_2').classList.add('_active');
        deleteClientModal(data.id);
    })





    const form = document.querySelector('.popup-change__form');
    const inputs = document.querySelectorAll('.popup-change__form-input')
    const inputName = document.getElementById('changeClientSur');
    const inputSurname = document.getElementById('changeClientName');
    const inputLastname = document.getElementById('changeClientLast');
    const clientId = document.getElementById('changeClientId');
    const changeContactsList = document.querySelector('.popup-change-contacts__list');

    inputName.value = data.surname;
    inputSurname.value = data.name;
    inputLastname.value = data.lastName;

    clientId.textContent = `ID: ${data.id.substr(7)}`;

    // контакты
    // обнуляем список контактов
    while (changeContactsList.firstChild) {
        changeContactsList.removeChild(changeContactsList.firstChild);
    }
    for (const contact of data.contacts) {
        createClientContact(changeContactsList, contact.type, contact.value);
    }
    if (data.contacts.length) {
        changeContactsList.style.marginBottom = '25px';
    }
    // добавление нового контакта при клике на кнопку
    // const addContactBtn = document.querySelector('.popup-change-contacts__title');
    // addContactBtn.addEventListener('click', () => {
    //     if (contactsList.children.length >= 10) {
    //         alert('Превышено количество контактов');
    //         return;
    //     } else {
    //         if (contactsList.style.marginBottom !== '25px') {
    //             contactsList.style.marginBottom = '25px';
    //         }
    //         createClientContact(contactsList);
    //     }
    // })

    // отправка формы
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // проверка на наличие значений
        let isEmpty = false;
        inputs.forEach(item => {
            if (!item.value) {
                isEmpty = true;
                item.style.borderBottom = '1px solid #F06A4D';
                return;
            }
        })
        if (!isEmpty) {
            // сам обьект
            let clientObj = {};
            // массив контактов
            let contacts = [];

            const contactsTypes = document.querySelectorAll('.select');
            const contactsValues = document.querySelectorAll('.input-contacts');
            if (changeContactsList.children.length > 0) {
                for (let i = 0; i < contactsTypes.length; i++) {
                    if (contactsValues[i].value) {
                        contacts.push({
                            type: contactsTypes[i].value,
                            value: contactsValues[i].value,
                        });
                    }
                }
            }

            clientObj.name = inputName.value;
            clientObj.surname = inputSurname.value;
            clientObj.lastName = inputLastname.value;
            clientObj.contacts = contacts;

            popupChangeClient.classList.remove('_active');

            // // обнуление строк ввода
            // inputsNull(inputs);
            // // удаление контактов
            // contactsNull(contactsList);
            // contactsList.style.marginBottom = '0px';


            // await getClient(data.id);
            // await changeClient(clientObj, data.id);
        }

    })



}