class LocalStorageUtil {
    constructor() {
        this.keyname = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyname);
        if(productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        } 
        return [];
    }
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;

        // duplicate check
        const index = products.indexOf(id);
        if(index === -1){
            products.push(id);
            pushProduct = true;
        } else{
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyname, JSON.stringify(products));

        return {
            pushProduct: pushProduct,
            products: products
        }
    }
}
const localStorageUtil = new LocalStorageUtil();
//localStorage.clear();
//localStorageUtil.putProducts('el222');
//localStorageUtil.getProducts();