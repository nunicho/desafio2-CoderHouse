const ProductManager = require("./ProductManager.js");

const entorno = async () => {
  let path = "./archivos/productos.json";
  let productManager = new ProductManager(path);

  // La busqueda dará un resultado correcto en tanto haya 3 ítems
  console.log(await productManager.getProductoById(3));

  // La busqueda indicará que el producto no existe

  console.log(await productManager.getProductoById(1257));
};

entorno();