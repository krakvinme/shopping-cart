// entry point

function render() {
    const productsStore = localStorageUtil.getProducts();

    HeaderCounterView.render(productsStore.length);
    productsList.render();
}

pageSpinner.render();

let CATALOG = [];

// fetch('js/server/catalog.json')
fetch('https://krakvinme.github.io/host_api/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        pageSpinner.handleClear();
        render();
    })
    .catch(error => {
        pageError.render();
        pageSpinner.handleClear();
    })
