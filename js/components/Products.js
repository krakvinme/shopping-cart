class Products {
    constructor () {
        this.classnameActive = 'active'; 
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(el,id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id);

        if(pushProduct){
            el.classList.add(this.classnameActive);
            el.innerHTML = this.labelRemove;
        } else{
            el.classList.remove(this.classnameActive);
            el.innerHTML = this.labelAdd;
        }
        HeaderCounterView.render(products.length);
        console.log(products)
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ name, id, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1) {
                activeClass = '';
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classnameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <div class="list__item" id="${id}">
                    <div class="list__in">
                        <div class="list__title">${name}</div>
                        <div class="list__img"><img src="${img}" alt=""></div>
                        <div class="list__price">${price.toLocaleString()} USD</div>
                        <button class="list__btn${activeClass}" onClick="productsList.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                    </div>
                </div>
            `
        });
        ROOT_PRODUCTS.innerHTML = htmlCatalog;
        //HeaderCounterView.render(products.length);
    }
}

const productsList = new Products();

productsList.render();