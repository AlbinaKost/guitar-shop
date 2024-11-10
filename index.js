function rendrer() {
  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);
  productsPage.render();
}

let CATALOG = [];

rendrer();
fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
  })
  .catch((error) => {
    console.log(error);
  });
