function rendrer() {
  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);
  productsPage.render();
}
spinnerPage.render();

let CATALOG = [];

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    setTimeout(() => {
      spinnerPage.handleClear();
      rendrer();
    }, 1000);
  })
  .catch((error) => {
    spinnerPage.handleClear();
    errorPage.render();
  });
