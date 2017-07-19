"use strict";
const p1_inventory = ["Seven Inventory  posee más de 45 opciones con más de 90 funciones, lo que facilita controlar el inventario hasta el más mínimo requerimiento, porque además de las funciones básicas como lo son compras, traslados, rebajas, ajustes, devoluciones; el sistema permite manejar órdenes de compra, solicitudes de compra, pedidos, darle seguimiento a esos procesos, elaboración de productos en base a otros productos, despiece, ubicación física y control del producto según el gramaje del lugar donde se encuentre,  en fin, ¡90 funciones!"]
const p2_inventory = [
    "Control, compras,  traslado, toma física. ",
    "Órdenes y solicitudes de compra.",
    "Control de traslado entre departamentos. "
  ]
const p1_front = ["El módulo Front Desk manejo de operaciones diarias, contiene más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos.","Front Desk contiene el módulo de Front Parámetros independiente al operativo, ya que está enfocado a los departamentos de mercadeo y recepción (Jefe de Recepción)."]
const p2_front = [
    "Manejo de reservas",
    "Operaciones Sobre habitaciones",
     "Estadísticas"
   ]
const p1_fixed = ["El módulo de activos fijos con sus 13 opciones nos permite crear áreas, grupos y los activos como tal, con el fin de manejar su ubicación, estado, tasa de depreciación, responsables y movimientos contables propios del manejo de activos fijos."]
const p2_fixed = [
  "Configuración de áreas para los activos.",
  "Inventario de Activos Fijos", "Traslado de Activos"
]

const p1_accounting = ["Nuestro sistema contable cuenta con todas las operaciones propias que se necesitan en el trabajo diario. Posee más de 30 opciones y 120 funciones entre operativas, configuración y reportes, entre los más destacables tenemos control de multimoneda y manejo de varias empresas contables."]
const p2_accounting = [
  "Asientos Contables",
  "Catálogo de Cuentas",
  "Conciliación Bancaria",
  "Extracto de Cuentas",
  "Manejo de Presupuestos"
]
const p1_payroll = ["Nuestro sistema de planilla contiene 14 opciones que permite un control detallado del personal y departamentos de su empresa. Se puede configurar cualquier tipo de afectación (modificadores del salario), manejadas a varios niveles, los cuales nos permiten indicar si la afectación es parte de los cálculos de cargas sociales o no, si acumula o no  pagos de aguinaldo o vacaciones. También nos permite automatizar por empleado rebajos o pagos en la planilla."]
const p2_payroll = [
  "Control de cuentas por cobrar y pagar por empleado. ",
  "Histórico por planillas.", "Cálculos automáticos de aguinaldos, vacaciones, cesantías, entre otros."
]
const p1_point = ["El módulo Point of sales o punto de ventas fue creado para la facturación de productos, y se puede configurar a cualquier mercado, restaurant, tienda, tour desk, en fin, cualquier transacción que implique una venta. ","Para control de inventario el punto de venta tiene integración con nuestro sistema de inventario, con el cual, se puede liar los productos de ventas con los productos de inventario, así se puede hacer explosión de insumos muy detallado, en el caso de restaurantes esta función costea los platos y rebaja las cantidades estipuladas en la receta."]
const p2_point = [
  "Informe de Ventas",
  "Mapa de Mesas",
  "Selección de cuentas contables para enlaces."
]
const p1_management = ["El sistema Management es indispensable para el control y supervisión de los usuarios y terminales que usan el sistema. Aquí se puede crear, eliminar o dar permiso a los usuario, ítem por ítem, en cada uno de los módulos, ofreciendo la posibilidad de dar permisos individuales o grupales de lo que puede hacer en toda la suite.  Además, en este módulo queda registrado todo movimiento que realicen los usuarios."]
const p2_management = [
  "Selección de permisos por usuario, opción por opción en cada uno de los módulos.",
  "Histórico de movimientos de los usuarios en los módulos."
]
const p1_online = ["Seven Online está diseñado para tener integración con Front Desk,  así permitir al huésped hacer su propia reservación mediante la página del hotel. La administración del módulo es prácticamente nula, ya que la información se extrae directamente de Seven Front Desk."]
const p2_online = [
  "Al terminar la reserva se guarda automáticamente de Front Desk y se envían los correos correspondientes.",
  "Integración de contrato con Seven Front Desk.",
  "Administración de logos e imágenes promocionales. "
]
const img = "img/compras.png"
const p2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in iaculis neque. Mauris consectetur leo ipsum, eget porttitor metus porta ac. Donec in massa eget lectus aliquet vulputate"
const box_inventory = [
  {
    img: "img/inv1.png",
    title: "Inventarios",
    text: p2
  }, {
    img: "img/inv2.png",
    title: "Ordenes de Compra",
    text: p2
  }, {
    img: "img/inv3.png",
    title: "Previsión de Compras",
    text: p2
  }
]

const box_front = [
  {
    img: "img/front1.png",
    title: "Estadisticas",
    text: p2
  }, {
    img: "img/front2.png",
    title: "Manejo de Reserva",
    text: p2
  }, {
    img: "img/front3.png",
    title: "Manejo de Habitaciones",
    text: p2
  }
]

const box_accounting = [
  {
    img: "img/accoun1.png",
    title: "Presupuestos",
    text: p2
  }, {
    img: "img/accoun2.png",
    title: "Conciliaión Bancaria",
    text: p2
  }, {
    img: "img/accoun3.png",
    title: "Asientos Contables",
    text: p2
  }
]

const box_point = [
  {
    img: "img/point1.png",
    title: "Informe de Ventas",
    text: p2
  }, {
    img: "img/point2.png",
    title: "Facturación",
    text: p2
  }, {
    img: "img/point3.png",
    title: "Mapa de Mesas",
    text: p2
  }
]

const box_payroll = [
  {
    img: "img/pay1.png",
    title: "Puestos y Categorias",
    text: p2
  }, {
    img: "img/pay2.png",
    title: "Historico de Planillas",
    text: p2
  }, {
    img: "img/pay3.png",
    title: "Afectaciones",
    text: p2
  }
]

const box_fixed = [
  {
    img: "img/fa1.png",
    title: "Salida de Activos",
    text: p2
  }, {
    img: "img/fa2.png",
    title: "Entrada de Activos",
    text: p2
  }, {
    img: "img/fa3.png",
    title: "Grupo de Activos",
    text: p2
  }
]

const box_management = [
  {
    img: "img/mana1.png",
    title: "Bitacora de Seguridad",
    text: p2
  }, {
    img: "img/mana2.png",
    title: "Permisos de Usuarios",
    text: p2
  }, {
    img: "img/mana3.png",
    title: "Usuarios",
    text: p2
  }
]

const inventory  = {
"background": "inventory-f",
"logo":"img/productos/inventory.png",
"img":"img/inv.png",
"nombre":"Inventory",
"p1":p1_inventory,
"p2":p2_inventory,
"box": box_inventory
}

const front  = {
"background": "front-f",
"logo":"img/productos/front.png",
"img":"img/front.png",
"nombre":"Front Desk",
"p1":p1_front,
"p2":p2_front,
"box": box_front
}

const accounting  = {
"background": "accounting-f",
"logo":"img/productos/accounting.png",
"img":"img/accoun.png",
"nombre":"Accounting",
"p1":p1_accounting,
"p2":p2_accounting,
"box": box_accounting
}

const point  = {
"background": "point-f",
"logo":"img/productos/point.png",
"img":"img/point.png",
"nombre":"Point of Sales",
"p1":p1_point,
"p2":p2_point,
"box": box_point
}

const payroll  = {
"background": "payroll-f",
"logo":"img/productos/payroll.png",
"img":"img/pay.png",
"nombre":"Payroll",
"p1":p1_payroll,
"p2":p2_payroll,
"box": box_payroll
}

const fixed  = {
"background": "fixed-f",
"logo":"img/productos/fixed.png",
"img":"img/fa.png",
"nombre":"Point of Sales",
"p1":p1_fixed,
"p2":p2_fixed,
"box": box_fixed
}

const management  = {
"background": "management-f",
"logo":"img/productos/management.png",
"img":"img/mana.png",
"nombre":"Management",
"p1":p1_management,
"p2":p2_management,
"box": box_management
}



const json = [inventory,front,accounting,point,payroll,fixed,management]

function Box(img, title, text) {
  let ret = `<div class="column is-4">\
                <img class="w" src="${img}" >\
                <h3 class="h3-change">${title}</h3>\
                <p class="p-change">${text}</p>\
             </div>`
  return ret
}

function Boxs(x){
  let ret =""
  for (let i = 0; i < x.length; i++) {
    ret += Box(x[i].img,x[i].title,x[i].text)
  }
  return ret
}

function It(x,x2){
  let ret=""
  for (let i = 0; i < x.length; i++) {
    ret+=`<p class="p-change${x2}">${x[i]}</p>`
  }
  return ret
}

function Item(f, img, img2, title, p1, p2, box) {
  let ret = `<div class="img-center">\
      <img id="log" src="${img}">\
  </div>\
  ${It(p1,"2")}\
  <br>\
  <div class="back ${f}">\
      <div class="columns">\
        <div class="column">\
          <h3 class="h3-change">${title}</h3>\
          ${It(p2,"")}\
        </div>\
        <div class="column">\
          <img class="f-img" src="${img2}">\
        </div>\
      </div>\
  </div>\
  <div class="columns desaparecer">\
    ${Boxs(box)}\
  </div>\
  `
  return ret
}

function Items(x){

  let ret = ""
  for (let i = 0; i < x.length; i++) {
    console.log(x[i].background)
    ret += `<div class="item" data-hash="${i}">\
    ${Item(x[i].background,x[i].logo,x[i].img,x[i].nombre,x[i].p1,x[i].p2,x[i].box)}\
  </div>`
  }
  return ret
}

const html = `${Items(json)}`
$("#carrusel").html(html)
