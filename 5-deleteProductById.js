const ProductManager = require("./ProductManager.js");

const entorno = async () => {
  let path = "./archivos/productos.json";
  let productManager = new ProductManager(path);

  // BORRAMOS UN PRODUCTO QUE SI EXISTE - El sistema muestra el producto y la leyenda "El producto ha sido eliminado exitosamente" 
  console.log(await productManager.deleteProductoById(1));

  //SI QUEREMOS BORRAR UN PRODUCTO QUE NO EXISTE - El sistema valida que no existe y arroja el comentario: El producto a eliminar no existe. 
  console.log(await productManager.deleteProductoById(1250));
};

entorno();
