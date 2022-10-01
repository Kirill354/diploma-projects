export async function getClients() {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'GET',
    });
    const data = await response.json();
    // console.log(data);
    return data;
};
export async function getClient(id) {
    const response = await fetch(`http://localhost:3000/api/clients${id}`, {
        method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    return data;
};

export async function createClient(client) {
    console.log(client);
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(client),
    });
};

export async function deleteClient(id) {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
    });
}

export async function changeClient(client, id) {
    console.log(client);
    console.log(id);
    try {
        await fetch(`http://localhost:3000/api/clients${id}`, {
            method: 'PATCH',
            body: JSON.stringify(client),
        });
    } catch (error) {
        console.log(error);
    }
};