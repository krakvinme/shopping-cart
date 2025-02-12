class Products {

    // constructor(name,id){
    //     this.name = name;
    //     this.id = id;
    // }

    


    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ name, id, price, img}) => {
            htmlCatalog += `
                <div class="list__item">
                    <div class="list__in">
                        <div class="list__title">${name}</div>
                        <div class="list__img"><img src="${img}" alt=""></div>
                        <div class="list__price">${price.toLocaleString()} USD</div>
                        <a href="#" class="list__btn">Добавить в корзину</a>
                    </div>
                </div>
            `
        });

        ROOT_PRODUCTS.innerHTML = htmlCatalog;
        // htmlCatalog
    }
}

const productsList = new Products();
// console.log(productsList);

productsList.render();