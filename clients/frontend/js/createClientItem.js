import { changeClientModal } from "./changeClient.js";
import { deleteClientModal } from "./deleteClient.js";
import { createContactItemByType } from "./forContacts.js";

// функция отрисовки клиента в таблитцу
export function addClientItem(data) {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdFIO = document.createElement('td');
    const tdCreateDate = document.createElement('td');
    const tdLastChange = document.createElement('td');
    const tdContacts = document.createElement('td');
    const tdActions = document.createElement('td');
    const changeButton = document.createElement('td');
    const deleteButton = document.createElement('td');

    changeButton.id = 'changeClient';
    deleteButton.id = 'deleteClient';

    tr.classList.add('client-tr');

    const contactsBox = document.createElement('div');
    contactsBox.classList.add('contact-icon__box');

    // отрисовка иконок контактов
    for (const contact of data.contacts) {
        createContactItemByType(contact.type, contact.value, contactsBox);
    }

    // функции для работы с датой
    function dateTransform(date) {
        const newDate = new Date(date);

        const correctDate = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        }
        const resultDate = newDate.toLocaleString('ru', correctDate);
        return resultDate;

        // if (typeof date === 'object') {
        //     let yy = date.getFullYear();
        //     let mm = date.getMonth() + 1;
        //     let dd = date.getDay();

        //     if (dd < 10) dd = '0' + dd;
        //     if (mm < 10) mm = 'n' + mm;

        //     return dd + '.' + mm + '.' + yy;
        // }
    }
    function getTime(date) {
        const newDate = new Date(date);

        const correctDate = {
            hour: "numeric",
            minute: "numeric",
        }
        const resultDate = newDate.toLocaleString('ru', correctDate);
        return resultDate;

        // let hours = date.getHours();
        // let minutes = date.getMinutes();

        // if (hours < 10) hours = '0' + hours;
        // if (minutes < 10) minutes = '0' + minutes;

        // return hours + ':' + minutes;
    }

    tdId.textContent = data.id.substr(7);
    tdFIO.textContent = `${data.surname} ${data.name} ${data.lastName}`;
    const date = new Date(data.createdAt);
    tdCreateDate.innerHTML = `${dateTransform(date)}<span style="color:#B0B0B0; padding-left: 7px;">${getTime(date)}</span>`;
    tdLastChange.innerHTML = `${dateTransform(date)}<span style="color:#B0B0B0; padding-left: 7px;">${getTime(date)}</span>`;
    changeButton.textContent = 'Изменить';
    deleteButton.textContent = 'Удалить';

    changeButton.style.background = 'url("./img/popup/change-svg.svg") left no-repeat';
    changeButton.style.paddingLeft = '15px';
    changeButton.style.cursor = 'pointer';
    changeButton.style.border = 'none';

    deleteButton.style.background = 'url("./img/popup/delete-svg.svg") left no-repeat';
    deleteButton.style.paddingLeft = '15px';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.border = 'none';


    // удаление клиента
    deleteButton.addEventListener('click', () => {
        document.getElementById('popup_2').classList.add('_active');
        deleteClientModal(data.id);
    })
    // изменение клиента
    changeButton.addEventListener('click', () => {
        document.getElementById('popup_3').classList.add('_active');
        changeClientModal(data);
    })

    tdContacts.append(contactsBox);
    tdActions.append(changeButton, deleteButton);
    tr.append(tdId, tdFIO, tdCreateDate, tdLastChange, tdContacts, tdActions);

    return tr;
}