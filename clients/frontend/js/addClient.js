import { createClientContact } from "./createContact.js";
import { createClient } from "./clientsApi.js";

export function addClientModal() {
    // логика с показом и закрытием модалки
    // const addNewClient = document.getElementById('addNewClient');
    const popupAddClient = document.getElementById('popup_1');
    const popupAddClientClose = document.getElementById('closePopupAdd');
    const popupAddClientCancel = document.querySelector('.popup-login__cancelBtn');
    const contactsList = document.querySelector('.popup-contacts__list');


    // addNewClient.addEventListener('click', () => {
    //     popupAddClient.classList.add('_active');
    // });
    popupAddClientClose.addEventListener('click', () => {
        popupAddClient.classList.remove('_active');
        // обнуление строк ввода
        inputsNull(inputs);
        // удаление контактов
        contactsNull(contactsList);
        contactsList.style.marginBottom = '0px';
    });
    popupAddClient.addEventListener('click', (e) => {
        if (!(e.target.closest('.popup-login__content'))) {
            popupAddClient.classList.remove('_active');
            // обнуление строк ввода
            inputsNull(inputs);
            // удаление контактов
            contactsNull(contactsList);
            contactsList.style.marginBottom = '0px';
        }
    });
    popupAddClientCancel.addEventListener('click', (e) => {
        e.preventDefault();
        popupAddClient.classList.remove('_active');
        inputsNull(inputs);
        // удаление контактов
        contactsNull(contactsList);
        contactsList.style.marginBottom = '0px';
    })

    // добавление клиента при отправке формы
    const form = document.getElementById('addNewClientForm');
    const inputs = document.querySelectorAll('.popup-login__form-input')
    const inputName = document.getElementById('clientName');
    const inputSurname = document.getElementById('clientSurname');
    const inputLastname = document.getElementById('clientLastname');

    const regEx = /[\w\d]/i;
    const arrSymbols = ['!', '@', '#', '$', '%', '&', '?', '+', '=', '~', '*', '^'];



    inputs.forEach(item => {
        item.addEventListener('keypress', (e) => {
            if (regEx.test(e.key) || arrSymbols.includes(e.key)) {
                e.preventDefault();
            }
        });
        item.addEventListener('blur', () => {
            item.value = correctValue(item.value);
        });
        item.addEventListener('focus', () => {
            if (item.style.borderBottom === '1px solid rgb(240, 106, 77)') {
                item.style.borderBottom = '1px solid #B0B0B0';
            }
        })
    });

    // функция для стилизации значения поля
    function correctValue(value) {
        if (!value) {
            return value;
        }

        let newValue = '';

        for (let char of value) {
            if (!(regEx.test(char) || arrSymbols.includes(char))) {
                newValue += char.toLowerCase();
            }
        }
        if (!newValue) return newValue;


        let x = newValue.replace(/^ +| +$|( ) +/g, "$1");
        let y = x.replace(/^-+| +$|(-)-+/g, "$1");
        let finalValue = y[0].toUpperCase() + y.slice(1);

        return finalValue;
    }
    // функция для обнуления значений полей
    function inputsNull(inputsMassive) {
        inputsMassive.forEach(item => {
            item.value = '';
        })
    }
    // функция для удаления контактов при закрытии
    function contactsNull(contactsList) {
        while (contactsList.firstChild) {
            contactsList.removeChild(contactsList.firstChild);
        }
    }

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
            if (contactsList.children.length > 0) {
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

            console.log(clientObj);

            popupAddClient.classList.remove('_active');

            // обнуление строк ввода
            inputsNull(inputs);
            // удаление контактов
            contactsNull(contactsList);
            contactsList.style.marginBottom = '0px';

            await createClient(clientObj);
        }

    })

    // добавление нового контакта при клике на кнопку
    const contactBtn = document.querySelector('.popup-contacts__title');
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault()
        // console.log('Добавляем 1 пункт');
        if (contactsList.children.length >= 10) {
            alert('Превышено количество контактов');
            return;
        } else {
            if (contactsList.style.marginBottom !== '25px') {
                contactsList.style.marginBottom = '25px';
            }
            contactsList.prepend(createClientContact());
        }
    })

}