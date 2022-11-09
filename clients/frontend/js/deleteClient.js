import { deleteClient } from "./clientsApi.js";

export function deleteClientModal(id) {
    const popupDeleteClient = document.getElementById('popup_2');
    const popupDeleteClientClose = document.querySelector('.popup-delete__close');
    const popupDeleteClientCancel = document.querySelector('.popup-delete__cancelBtn');
    const popupDeleteClientDelete = document.querySelector('.popup-delete__accessBtn');

    popupDeleteClientClose.addEventListener('click', () => {
        popupDeleteClient.classList.remove('_active');
    });
    popupDeleteClient.addEventListener('click', (e) => {
        if (!(e.target.closest('.popup-delete__content'))) {
            popupDeleteClient.classList.remove('_active');
        }
    });
    popupDeleteClientCancel.addEventListener('click', () => {
        popupDeleteClient.classList.remove('_active');
    });

    popupDeleteClientDelete.addEventListener('click', async () => {
        await deleteClient(id);
    })
}