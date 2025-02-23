class HeaderCounter {
    handlerOpenShoppingPage() {
        ShoppingPage.render();
    }

    render(count){
        const html = `${count}`;
        ROOT_COUNTER.innerHTML = html;
    }
}

const HeaderCounterView = new HeaderCounter;
// ROOT_COUNTER
const productsStore = localStorageUtil.getProducts();
HeaderCounterView.render(productsStore.length);