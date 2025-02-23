function render() {
    const productsStore = localStorageUtil.getProducts();

    HeaderCounterView.render(productsStore.length);

    productsList.render();
}

// render();