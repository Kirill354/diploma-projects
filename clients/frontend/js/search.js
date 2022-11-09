import { getClients } from "./clientsApi.js";
import { addClientItem } from "./createClientItem.js";

export async function searchClient(value) {
    const data = await getClients();
    if (!value) {
        document.getElementById('clients-list').innerHTML = '';
        for (const client of data) {
            document.getElementById('clients-list').append(addClientItem(client));
        }
    } else {
        value = value[0].toUpperCase() + value.slice(1);

        let clients = JSON.parse(JSON.stringify(data));
        clients = clients.filter(item => item.name.startsWith(value) || item.surname.startsWith(value) || item.lastName.startsWith(value));

        document.getElementById('clients-list').innerHTML = '';
        for (const client of clients) {
            document.getElementById('clients-list').append(addClientItem(client));
        }
    }

}