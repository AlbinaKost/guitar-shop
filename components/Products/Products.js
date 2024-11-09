class Products {
  constructor() {
    this.classNameActive = "products-element_btn_active";
    this.labelAdd = "Add to cart";
    this.labelRemove = "Remove";
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, image }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
                <li class="products-element">
                    <span class="products-element_name">${name}</span>
                    <img class="products-element_image" src="${image}" />
                    <span class="products-element_price">
                        ⚡️ ${price.toLocaleString()} USD
                    </span>
                    <button class="products-element_btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
    });

    const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
