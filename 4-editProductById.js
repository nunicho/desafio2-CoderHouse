const ProductManager = require("./ProductManager.js");

const entorno = async () => {
  let path = "./archivos/productos.json";
  let productManager = new ProductManager(path);

  // EDITAMOS UN PRODUCTO CORRECTAMENTE (Le agregamos la marca DeWalt al nombre y Cambiamos el Stock de 15 a 9)
  await productManager.editProductoById(
    1,
    "Taladro Atornillador DeWalt",
    "Percutor 13mm 700w +45",
    18973,
    "https://http2.mlstatic.com/D_Q_NP_696031-MLA53229149793_012023-AC.webp",
    "TA-1",
    29
  );

  // Tratamos de editar un producto pero no completamos todos los campos, la validación lo impide alertando "Faltan elementos de completar antes de editar"

  await productManager.editProductoById(
    2,
    "Ventilador",
    21000,
    "https://http2.mlstatic.com/D_NQ_NP_685663-MLU69658396260_052023-O.webp",
    "TA-3",
    9
  );

  // Tratamos de editar un producto pero repetimos el CODE, la validación lo impide alertando "El CODE TA-1 ya está siendo usado...!!!"

  await productManager.editProductoById(
    2,
    "Pie aluminio plegable",
    "Ventilador",
    21000,
    "https://http2.mlstatic.com/D_NQ_NP_685663-MLU69658396260_052023-O.webp",
    "TA-1",
    9
  );
};

entorno();
