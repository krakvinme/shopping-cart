// entry point


function render() {
    const productsStore = localStorageUtil.getProducts();

    HeaderCounterView.render(productsStore.length);
    productsList.render();
}
let CATALOG = [];

fetch('https://krakvinme.github.io/host_api/catalog.json')
// fetch('js/server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error)
    })
