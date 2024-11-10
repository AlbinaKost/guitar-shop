function rendrer() {
  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);
  productsPage.render();
}

let CATALOG = [];

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    rendrer();
  })
  .catch((error) => {
    console.log(error);
  });
