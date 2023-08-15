const ProductManager = require("./ProductManager.js");

const entorno = async () => {
  let path = "./archivos/productos.json";
  let productManager = new ProductManager(path);

  console.log(await productManager.getProductos())


};

entorno();
