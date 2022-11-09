export function sortClients(clientsMassive, prop, dir) {

    return clientsMassive.sort((clientrA, clientB) => {
        if (dir ? clientrA[prop] < clientB[prop] : clientrA[prop] > clientB[prop]) {
            return -1;
        }
    })

}

export function sortFunction() {
    const clientsProp = document.querySelectorAll('.th-main-span');
    let prop;
    let dir = false;
    // Сортировка
    clientsProp.forEach(el => {
        el.addEventListener('click', function () {
            prop = this.dataset.prop;
            console.log(prop);
            dir = !dir;
            console.log(dir);
        })
    })
    return {
        prop,
        dir
    }
}