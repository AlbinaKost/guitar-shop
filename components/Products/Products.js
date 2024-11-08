class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, image, price }) => {
      htmlCatalog += `
        <li class="products-element">
          <span class="products-element_name">${name}</span>
            <img class="products-element_image" src="${image}" />
            <span class="products-element_price">⚡️${price.toLocaleString()} USD</span>        
            <button class="products-element_button">Add to cart</button>                

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
