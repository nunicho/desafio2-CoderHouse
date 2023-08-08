// DESAFIO 1  -  ALUMNO:   Mauricio Javier Alonso
// Comisión: 55565
// CREAMOS LA CLASE

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProducto(title, description, price, thumbnail, code, stock) {
    let nuevoProducto = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    // Verificamos si el CODE del producto a ingresar ya pertenece a otro producto ya ingresado en el array.

    let result = this.products.map((producto) => producto.code);
    if (result.includes(nuevoProducto.code)) {
      console.log(
        `El CODE ${nuevoProducto.code} ya está siendo usado en otro producto`
      );
      return;
    }

    // Con (title && description && price && thumbnail && code && stock) validamos que todos los campos deban ser "true" porque son obligatorios. Si alguno no es completado, se devuelve "`Debe completar todos los datos`"
    if (title && description && price && thumbnail && code && stock) {
      if (this.products.length === 0) {
        nuevoProducto.id = 1;
      } else {
        nuevoProducto.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(nuevoProducto);
    } else {
      console.log(`Debe completar todos los datos`);
    }
  }

  getProductos() {
    return this.products;
  }
  getProductoById(idProducto) {
    let indiceProducto = this.products.findIndex(
      (producto) => producto.id === idProducto
    );

    if (indiceProducto === -1) {
      console.log(`El producto ${idProducto} no existe...!!!`);
      return;
    }

    return this.products[indiceProducto];
  }

  checkProductsByCode(code) {
    let result = this.products.map((producto) => producto.code);
    console.log(result);
    if (result.includes(code)) {
      console.log("El CODE ya está siendo usado por otro producto");
      return;
    }
  }
}

// CREAMOS VARIAS INSTANCIAS DE LA CLASE PRODUCT MANAGER, tomando como ejemplo una ferretería.

let prod = new ProductManager();

//console.log(prod.getProductos());
prod.addProducto(
  // este producto cumple los parámetros
  "Taladro Atornillador",
  "Percutor 13mm 700w +45",
  18973,
  "https://http2.mlstatic.com/D_Q_NP_696031-MLA53229149793_012023-AC.webp",
  "TA-1",
  15
);
prod.addProducto(
  // este producto cumple los parámetros
  "Bomba de agua Bestway",
  "Para pileta de 8300 litros",
  15300,
  "https://http2.mlstatic.com/D_NQ_NP_2X_834375-MLA53124664257_012023-F.webp",
  "TA-2",
  8
);
prod.addProducto(
  // en este producto falta el nombre, por lo tanto, el sistema arroja la alerta `Debe completar todos los datos`
  "Pie aluminio plegable",
  21000,
  "https://http2.mlstatic.com/D_NQ_NP_685663-MLU69658396260_052023-O.webp",
  "TA-3",
  9
);
prod.addProducto(
  // en este producto falta el precio, por lo tanto, el sistema arroja la alerta `Debe completar todos los datos`
  "tender de ropa",
  "Pie aluminio plegable",
  "https://http2.mlstatic.com/D_NQ_NP_685663-MLU69658396260_052023-O.webp",
  "TA-3",
  9
);
prod.addProducto(
  // este producto cumple los parámetros
  "llaves inglesas, set",
  "tamaños 10,12,14,16,18,20",
  10200,
  "https://http2.mlstatic.com/D_Q_NP_696031-MLA53229149793_012023-AC.webp",
  "TA-4",
  9
);

prod.addProducto(
  // en este producto repite el CODE, por lo tanto, el sistema arroja la alerta ``El CODE ${nuevoProducto.code} ya está siendo usado en otro producto``
  "cinta métrica ",
  "3 metros",
  4500,
  "https://http2.mlstatic.com/D_NQ_NP_2X_854663-MLA46352741542_062021-F.webp",
  "TA-4",
  9
);

prod.addProducto(
  // en este producto repite el CODE, por lo tanto, el sistema arroja la alerta ``El CODE ${nuevoProducto.code} ya está siendo usado en otro producto``
  "ventilador de pared",
  "Iv20 turbo",
  22100,
  "https://http2.mlstatic.com/D_NQ_NP_647536-MLA43804358477_102020-O.webp",
  "TA-1",
  9
);

prod.addProducto(
  // este producto cumple los parámetros
  "ventilador de pared",
  "Iv20 turbo",
  22100,
  "https://http2.mlstatic.com/D_NQ_NP_647536-MLA43804358477_102020-O.webp",
  "TA-250",
  9
);

console.log(prod.getProductos());
