const ProductManager = require("./ProductManager.js");

const entorno = async () => {
  let path = "./archivos/productos.json";
  let productManager = new ProductManager(path);

  // CREAMOS VARIAS INSTANCIAS DE LA CLASE PRODUCT MANAGER, tomando como ejemplo una ferretería.

  await productManager.addProducto(
    // este producto cumple los parámetros
    "Taladro Atornillador",
    "Percutor 13mm 700w +45",
    18973,
    "https://http2.mlstatic.com/D_Q_NP_696031-MLA53229149793_012023-AC.webp",
    "TA-1",
    15
  );

  await productManager.addProducto(
    // este producto cumple los parámetros
    "Bomba de agua Bestway",
    "Para pileta de 8300 litros",
    15300,
    "https://http2.mlstatic.com/D_NQ_NP_2X_834375-MLA53124664257_012023-F.webp",
    "TA-2",
    8
  );
  await productManager.addProducto(
    "Ventilador",
    "Pie aluminio plegable",
    21000,
    "https://http2.mlstatic.com/D_NQ_NP_685663-MLU69658396260_052023-O.webp",
    "TA-3",
    9
  );

  await productManager.addProducto(
    // este producto repite el CODE, con la intención de probar la validación de detección de CODE repetido.
    "Set de destornilladores",
    "Philips recto y demás",
    15000,
    "https://http2.mlstatic.com/D_NQ_NP_2X_966319-MLA44072933854_112020-F.webp",
    "TA-3",
    8
  );

  await productManager.addProducto(
    // este producto está incompleto (falta el nombre), con la intención de probar la validación de detección de datos incompletos.
    "Abrasivo Flap 115mm Grano 40/60/80/100",
    6299,
    "https://http2.mlstatic.com/D_NQ_NP_2X_967382-MLA50849369962_072022-F.webp",
    "TA-120",
    9
  );
};

entorno();
