class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `<tr><td clsass="shopping-element_name">⚡️${name}
          </td>
          <td clsass="shopping-element_price">
            $${price.toLocaleString()} USD
          </td>
        </tr>`;
        sumCatalog += price;
      }
    });

    const html = `
            <div class="shopping-container">
                <div class="shopping_close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element_name">💥 Sum:</td>
                        <td class="shopping-element_price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;

    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
