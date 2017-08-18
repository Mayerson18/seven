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


const p1_tour = ["Sistema para Operadores de Tours Permite reservar varios servicios en diferentes fechas y, horas de inicio y final, todo en una misma reserva. Control de Disponibilidad por Servicio, Equipo y Recurso Humano. lexible e Intuitiva función para el control de las rutas de transporte de los clientes al lugar donde recibírn el servicio. Contabilidad: Prepagos, Facturas y, Notas de Débito y Crédito, todo enlazado a nuestro módulo de contabilidad Seven Accounting."]
const p2_tour = [
  "Reservas",
  "Prespagos",
  "Rutas"
]


const p1_dds = ["Módulo de reportería centralizado para gerentes. Permite a la gerencia acceder a los principales reportes de nuestros módulos en un mismo sitio. Entre los módulos con reportería en el DSS están Front Desk, Point of Sales, Inventory, Accounting y Management. Compatible con dispositivos móviles."]
const p2_dds = [
  "Estado de Resultados",
  "Bitacora de Seguridad",
  "Balance General"
]

const p1_comunication = ["Tarificador de Llamadas Telefónicas Se conecta a centrales Telefónicas de Puerto Serial y por IP. Registra y tarifica la duración de las llamadas, tanto en habitaciones como en oficinas administrativas. Envía los cargos a Front Desk. Brinda varios reportes estadísticos de las llamadas."]
const p2_comunication = [
  "Control de LLamadas",
  "Directorio Telefonico",
  "Extenciones",
  "Reporte de LLamadas",
]


const p1_multi = ["Módulo de Administración para Cadenas de Hoteles que permite gestionar varios hoteles como si fuesen uno solo.."]
const p2_multi = [
  "Pronostico de Ingreso",
  "Pronostico de Ocupación unificadas",
  "Translados de Huespedes entre Hoteles"
]


const img = "img/compras.png"
const p2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in iaculis neque. Mauris consectetur leo ipsum, eget porttitor metus porta ac. Donec in massa eget lectus aliquet vulputate"
const box_inventory = [
  {
    img: "img/inv1.png",
    title: "Inventarios",
    text: "Inventario: Registro de tomas físicas, con múltiples criterios de selección para el grupo de artÌculos a revisar."
  }, {
    img: "img/inv2.png",
    title: "Ordenes de Compra",
    text: "Registro de solicitudes de compra de productos para su respectiva revisión y aprobación previa a realizar la compra."
  }, {
    img: "img/inv3.png",
    title: "Previsión de Compras",
    text: "Informe que pronostica cuantos productos se van a comprar en base a las compras y ordenes de compra registradas en un periodo."
  }
]

const box_front = [
  {
    img: "img/front1.png",
    title: "Estadísticas de Explotación",
    text: "Informe que muestra los ingresos de hospedaje, paquetes, estancias, pax y otros en un rango de fechas por varios criterios de agrupación y detalle."
  }, {
    img: "img/front2.png",
    title: "Reservas",
    text: "Registro de solicitudes y confirmaciones de reserva, asignación de habitaciones, control de disponibilidad."
  }, {
    img: "img/front3.png",
    title: "Operaciones sobre Habitaciones",
    text: "Manejo de check-in y check-out de los huéspedes, observaciones especiales, cambios de habitación, entre otros."
  }
]

const box_accounting = [
  {
    img: "img/accoun1.png",
    title: "Asientos Contables",
    text: "Registro por partida doble de movimientos contables, permite utilizar plantillas de asientos prediseñadas, agregar observaciones y definir"
  }, {
    img: "img/accoun2.png",
    title: "Conciliación Bancaria",
    text: "Pantalla amigable donde se pueden conciliar las cuentas bancarias de la empresa."
  }, {
    img: "img/accoun3.png",
    title: "Presupuestos",
    text: "Defina presupuestos para las cuentas en un periodo dado, para luego comprar el resultado de ese periodo con lo presupuestado."
  }
]

const box_point = [
  {
    img: "img/point1.png",
    title: "Informe de Ventas",
    text: "Reporte estadístico de las ventas en un periodo dado bajo un gran abanico de opciones de selección y agrupamiento para escoger."
  }, {
    img: "img/point2.png",
    title: "Facturación",
    text: "Carga de artículos a la comanda, envÌo de pedidos a impresoras de cocina sobre categorÌa del producto, anulaciones, devoluciones, descuentos, entre otras funciones."
  }, {
    img: "img/point3.png",
    title: "Mapa de Mesas",
    text: "Página configurable donde se pueden definir varios salones, cada uno con la distribución de las mesas. Refleja mesas libres y ocupadas, control de saloneros en las mesas."
  }
]

const box_payroll = [
  {
    img: "img/pay1.png",
    title: "Afectaciones",
    text: "Definición de dÌas libres, feriados, feriados de pago doble, etc."
  }, {
    img: "img/pay2.png",
    title: "Puestos y categorÌas",
    text: "Definición de los puestos en la empresa, periodos de pago, cantidad de dÌas laborables, salario mÌnimo entre otros."
  }, {
    img: "img/pay3.png",
    title: "Histórico de Planillas",
    text: "Consulta de planillas emitidas anteriormente con varios criterios de selección."
  }
]

const box_fixed = [
  {
    img: "img/fa1.png",
    title: "Entrada de Activos",
    text: "Registro de adquisición de activos, por compra, donación, a cuál ·rea ir·, etc."
  }, {
    img: "img/fa2.png",
    title: "Salida de Activos",
    text: "Registro de bajas de activos ya sea por venta, que se haya dañado, etc."
  }, {
    img: "img/fa3.png",
    title: "Grupos de Activos",
    text: "Configuración de grupos de activos en múltiples categorÌas."
  }
]

const box_management = [
  {
    img: "img/mana1.png",
    title: "Usuarios",
    text: "Registro e inactivación de los usuarios de los distintos módulos del sistema."
  }, {
    img: "img/mana2.png",
    title: "Permisos de Usuarios",
    text: "Autorización o denegación de funciones en el sistema, permitir o denegar acceso directamente a bases de datos de los módulos."
  }, {
    img: "img/mana3.png",
    title: "Bitácora de Seguridad",
    text: "Registro de las actividades de los usuarios en el sistema en base al permiso utilizado, muy útil para auditar eventos y detectar errores de los usuarios en el uso del sistema."
  }
]


const box_tour = [
  {
    img: "img/tour1.png",
    title: "Reservas",
    text: "Registro e inactivación de los usuarios de los distintos módulos del sistema."
  }, {
    img: "img/tour2.png",
    title: "Prepagos",
    text: "Autorización o denegación de funciones en el sistema, permitir o denegar acceso directamente a bases de datos de los módulos."
  }, {
    img: "img/tour3.png",
    title: "Rutas",
    text: "Registro de las actividades de los usuarios en el sistema en base al permiso utilizado, muy útil para auditar eventos y detectar errores de los usuarios en el uso del sistema."
  }
]


const box_dds = [
  {
    img: "img/dds1.png",
    title: "Estado de Resultados",
    text: "Registro e inactivación de los usuarios de los distintos módulos del sistema."
  }, {
    img: "img/dds2.png",
    title: "Bitacora Genetal",
    text: "Autorización o denegación de funciones en el sistema, permitir o denegar acceso directamente a bases de datos de los módulos."
  }, {
    img: "img/dds3.png",
    title: "Balance General",
    text: "Registro de las actividades de los usuarios en el sistema en base al permiso utilizado, muy útil para auditar eventos y detectar errores de los usuarios en el uso del sistema."
  }
]

const box_comunication = [
  {
    img: "img/comunication1.png",
    title: "Extenciones",
    text: "Registro e inactivación de los usuarios de los distintos módulos del sistema."
  }, {
    img: "img/comunication2.png",
    title: "Reporte de Llamadas",
    text: "Autorización o denegación de funciones en el sistema, permitir o denegar acceso directamente a bases de datos de los módulos."
  }, {
    img: "img/comunication3.png",
    title: "Tarifas",
    text: "Registro de las actividades de los usuarios en el sistema en base al permiso utilizado, muy útil para auditar eventos y detectar errores de los usuarios en el uso del sistema."
  }
]

const box_multi = [
  {
    img: "img/multi1.png",
    title: "Pronostico de Ingresos",
    text: "Registro e inactivación de los usuarios de los distintos módulos del sistema."
  }, {
    img: "img/multi2.png",
    title: "Pronóstico de Ocupación",
    text: "Autorización o denegación de funciones en el sistema, permitir o denegar acceso directamente a bases de datos de los módulos."
  }, {
    img: "img/multi3.png",
    title: "Translado de Huespedes",
    text: "Registro de las actividades de los usuarios en el sistema en base al permiso utilizado, muy útil para auditar eventos y detectar errores de los usuarios en el uso del sistema."
  }
]

const inventory  = {
"background": "inventory-f",
"logo":"img/productos/inventory.png",
"img":"img/inv.png",
"nombre":"Inventory",
"p1":p1_inventory,
"p2":p2_inventory,
"box": box_inventory,
"hash":"inventory"
}

const front  = {
"background": "front-f",
"logo":"img/productos/front.png",
"img":"img/front.png",
"nombre":"Front Desk",
"p1":p1_front,
"p2":p2_front,
"box": box_front,
"hash":"front"
}

const accounting  = {
"background": "accounting-f",
"logo":"img/productos/accounting.png",
"img":"img/accoun.png",
"nombre":"Accounting",
"p1":p1_accounting,
"p2":p2_accounting,
"box": box_accounting,
"hash":"accounting"
}

const point  = {
"background": "point-f",
"logo":"img/productos/point.png",
"img":"img/point.png",
"nombre":"Point of Sales",
"p1":p1_point,
"p2":p2_point,
"box": box_point,
"hash":"point"
}

const payroll  = {
"background": "payroll-f",
"logo":"img/productos/payroll.png",
"img":"img/pay.png",
"nombre":"Payroll",
"p1":p1_payroll,
"p2":p2_payroll,
"box": box_payroll,
"hash":"payroll"
}

const fixed  = {
"background": "fixed-f",
"logo":"img/productos/fixed.png",
"img":"img/fa.png",
"nombre":"Point of Sales",
"p1":p1_fixed,
"p2":p2_fixed,
"box": box_fixed,
"hash":"fixed"
}

const management  = {
"background": "management-f",
"logo":"img/productos/management.png",
"img":"img/mana.png",
"nombre":"Management",
"p1":p1_management,
"p2":p2_management,
"box": box_management,
"hash":"management"
}

const mail  = {
"background": "management-f",
"logo":"img/productos/mail.png",
"img":"img/mana.png",
"nombre":"Management",
"p1":p1_management,
"p2":p2_management,
"box": box_management,
"hash":"mail"
}



const tour  = {
"background": "management-f",
"logo":"img/productos/tour.png",
"img":"img/auxtour.png",
"nombre":"Tour Operator",
"p1":p1_tour,
"p2":p2_tour,
"box": box_tour,
"hash":"tour"
}

const dds  = {
"background": "accounting-f",
"logo":"img/productos/dds.png",
"img":"img/dds.png",
"nombre":"Desiciones Support System",
"p1":p1_dds,
"p2":p2_dds,
"box": box_dds,
"hash":"decision"
}

const comunication  = {
"background": "accounting-f",
"logo":"img/productos/communications.png",
"img":"img/comunication.png",
"nombre":"Comunication",
"p1":p1_comunication,
"p2":p2_comunication,
"box": box_comunication,
"hash":"comunication"
}

const multi  = {
"background": "payroll-f",
"logo":"img/productos/multi.png",
"img":"img/multy.png",
"nombre":"Multiproperty",
"p1":p1_multi,
"p2":p2_multi,
"box": box_multi,
"hash":"multiproperty"
}



const json = [front,point,inventory,accounting,fixed,payroll,tour,dds,management,comunication,multi,mail]

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
    ret += `<div class="item pad-item" data-hash="${x[i].hash}">\
    ${Item(x[i].background,x[i].logo,x[i].img,x[i].nombre,x[i].p1,x[i].p2,x[i].box)}\
  </div>`
  }
  return ret
}

const html = `${Items(json)}`
$("#carrusel").html(html)
