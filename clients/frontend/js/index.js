import { createHeader } from "./header.js";
import { addClientModal } from "./addClient.js";
import { getClients } from "./clientsApi.js";
import { addClientItem } from "./createClientItem.js";
// import { sortFunction, sortClients } from "./sortClient.js";
import { createPreloader } from "./preloader.js";

(async function app() {
    const header = createHeader();
    document.body.prepend(header);
    const addClientBtn = document.getElementById('addNewClient');
    const preloader = createPreloader();
    document.getElementById('clients-list').append(preloader);


    try {
        const clients = await getClients();
        for (const client of clients) {
            document.getElementById('clients-list').append(addClientItem(client));
        }
        addClientBtn.addEventListener('click', () => {
            document.getElementById('popup_1').classList.add('_active');
            console.log('add')
            addClientModal();
        })
    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(() => preloader.remove(), 200);
    }


    // сортировка
    // const sortObj = sortFunction();
    // clients = sortClients(clients, sortObj.prop, sortObj.dir)

}());
