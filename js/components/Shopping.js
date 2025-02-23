class Shopping {
    handleCloseShoppingPage(e) {
        ROOT_SHOPPING.classList.remove("active");
    }

    handleOpenShoppingPage() {
        if(localStorageUtil.getProducts().length){
            ShoppingPage.render();
            ROOT_SHOPPING.classList.add("active");
        }
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id,name,price}) => {
            if(productsStore.includes(id)){
                htmlCatalog += `
                    <li class="shopping__item">
                        <div class="shopping__top">
                            <span class="shopping__title">
                                ${name}
                            </span>
                        </div>
                        <div class="shopping__price">
                            ${price.toLocaleString()} USD
                        </div>
                    </li>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <a href="#" class="shopping__close" id="shopping__close" onClick="ShoppingPage.handleCloseShoppingPage()"></a>
            <ol class="shopping__list">
                ${htmlCatalog}
            </ol>
            <div class="shopping__total">
                Total amount: ${sumCatalog.toLocaleString()} USD
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const ShoppingPage = new Shopping();
