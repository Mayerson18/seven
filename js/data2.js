"use strict";
var operaciones_front = ["Operaciones sobre Habitaciones","Operaciones sobre Folios","Reservas"]
var operaciones_decision = [""]
var operaciones_inventory = ["Control, compras,  traslado, toma física. ","Órdenes y solicitudes de compra.","Control de traslado entre departamentos."]
var operaciones_comunication = [""]
var operaciones_accounting = ["Asientos Contables","Catálogo de Cuentas","Conciliación Bancaria","Extracto de Cuentas","Manejo de Presupuestos"]
var operaciones_tour = [""]
var operaciones_point = ["Informe de Ventas","Mapa de Mesas","Selección de cuentas contables para enlaces"]
var operaciones_payroll = ["Control de cuentas por cobrar y pagar por empleado.","Histórico por planillas."]
var operaciones_multiproperty = ["Traslado de Reservas entre Hoteles", "Traslado de Huespedes entre Hoteles"]
var operaciones_fixed = ["Configuración de áreas para los activos.","Inventario de Activos Fijos","Traslado de Activos"]
var operaciones_management = ["Selección de permisos por usuario, opción por opción en cada uno de los módulos.","Histórico de movimientos de los usuarios en los módulos."]
var operaciones_mail = [""]
var operaciones_online = ["Al terminar la reserva se guarda automáticamente de Front Desk y se envían los correos correspondientes.","Integración de contrato con Seven Front Desk.","Administración de logos e imágenes promocionales."]

var n = "</p><p class='content-body'>"
var texto_front = "Front Desk, con sus más de 160 opciones entre operativas,configuración y reportes, es a nivel de hoteles el más importanteentre los módulos.  Una vez configurado el Front Parámetros, estemódulo nos permite de una forma muy eficiente controlar lasoperaciones diarias con reportes muy útiles y facilidad demanipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro."
var texto_decision = "Módulo de reportería centralizado para gerentes. Permite a la gerencia acceder a los principales reportes de nuestros módulos en un mismo sitio. Entre los módulos con reportería en el DSS están Front Desk, Point of Sales, Inventory, Accounting y Management. Compatible con dispositivos móviles."
var texto_comunication = ""
var texto_inventory = "Seven Inventory  posee más de 45 opciones con más de 90 funciones, lo que facilita controlar el inventario hasta el más mínimo requerimiento, porque además de las funciones básicas como lo son compras, traslados, rebajas, ajustes, devoluciones; el sistema permite manejar órdenes de compra, solicitudes de compra, pedidos, darle seguimiento a esos procesos, elaboración de productos en base a otros productos, despiece, ubicación física y control del producto según el gramaje del lugar donde se encuentre,  en fin, ¡90 funciones!"
var texto_accounting = "Nuestro sistema contable cuenta con todas las operaciones propias que se necesitan en el trabajo diario. Posee más de 30 opciones y 120 funciones entre operativas, configuración y reportes, entre los más destacables tenemos control de multi-moneda y manejo de varias empresas contables."
var texto_tour = "Sistema para Operadores de Tours Permite reservar varios servicios en diferentes fechas y, horas de inicio y final, todo en una misma reserva. Control de Disponibilidad por Servicio, Equipo y Recurso Humano. lexible e Intuitiva función para el control de las rutas de transporte de los clientes al lugar donde recibírn el servicio. Contabilidad: Prepagos, Facturas y, Notas de Débito y Crédito, todo enlazado a nuestro módulo de contabilidad Seven Accounting."
var texto_point = `El módulo Point of sales o punto de ventas fue creado para la facturación de productos, y se puede configurar a cualquier mercado, restaurant, tienda, tour desk, en fin, cualquier transacción que implique una venta.${n}Para control de inventario el punto de venta tiene integración con nuestro sistema de inventario, con el cual, se puede liar los productos de ventas con los productos de inventario, así se puede hacer explosión de insumos muy detallado, en el caso de restaurantes esta función costea los platos y rebaja las cantidades estipuladas en la receta.`
var texto_payroll = `Nuestro sistema de planilla contiene 14 opciones que permite un control detallado del personal y departamentos de su empresa. Se puede configurar cualquier tipo de afectación (modificadores del salario), manejadas a varios niveles, los cuales nos permiten indicar si la afectación es parte de los cálculos de cargas sociales o no, si acumula o no  pagos de aguinaldo o vacaciones. También nos permite automatizar por empleado rebajos o pagos en la planilla.`
var texto_multiproperty = `Módulo de Administración para Cadenas de Hoteles que permite gestionar varios hoteles como si fuesen uno solo.`
var texto_fixed = `El módulo de activos fijos con sus 13 opciones nos permite crear áreas, grupos y los activos como tal, con el fin de manejar su ubicación, estado, tasa de depreciación, responsables y movimientos contables propios del manejo de activos fijos.`
var texto_management = `El sistema Management es indispensable para el control y supervisión de los usuarios y terminales que usan el sistema. Aquí se puede crear, eliminar o dar permiso a los usuario, ítem por ítem, en cada uno de los módulos, ofreciendo la posibilidad de dar permisos individuales o grupales de lo que puede hacer en toda la suite.  Además, en este módulo queda registrado todo movimiento que realicen los usuarios.`
var texto_mail = `Es un pequeño módulo que permite enviar correos. Envió de correos desde Front Desk, entre ellos Solicitudes y Confirmaciones de Reservas y Mensaje al hacer check-out. Sistema de Plantillas para correos basado en HTML, lo que permite una alta flexibilidad al personalizar el formato y diseño de los correos.`
var texto_online = `Seven Online está diseñado para tener integración con Front Desk,  así permitir al huésped hacer su propia reservación mediante la página del hotel. La administración del módulo es prácticamente nula, ya que la información se extrae directamente de Seven Front Desk.`

var imagen_front = "img/productos/front.png"
var imagen_point = "img/productos/point.png"
var imagen_inventory = "img/productos/inventory.png"
var imagen_accounting = "img/productos/accounting.png"
var imagen_fixed = "img/productos/fixed.png"
var imagen_payroll = "img/productos/payroll.png"
var imagen_tour = "img/productos/tour.png"
var imagen_decision = "img/productos/dds.png"
var imagen_management = "img/productos/management.png"
var imagen_comunication = "img/productos/communications.png"
var imagen_multiproperty = "img/productos/multi.png"
var imagen_mail = "img/productos/mail.png"
var imagen_online = "img/productos/online.png"

var img_aux_front = "img/img1.png"
var img_aux_point = "img/auxpoint.png"
var img_aux_inventory = "img/inv.png"
var img_aux_accounting = "img/auxacou.png"
var img_aux_fixed = "img/auxfixed.png"
var img_aux_payroll = "img/auxpay.png"
var img_aux_tour = "img/auxtour.png"
var img_aux_decision = "img/auxdds.png"
var img_aux_management = "img/auxmanag.png"
var img_aux_comunication = "img/auxcom.png"
var img_aux_multiproperty = "img/auxmulti.png"
var img_aux_mail = "img/auxmail.png"
var img_aux_online = "img/auxonline.png"

var titulo_front = "FRONT DESK"
var titulo_point = "POINT OF SALES BILLING"
var titulo_inventory = "INVENTORY"
var titulo_accounting = "ACCOUNTING"
var titulo_fixed = "FIXED ASSET"
var titulo_payroll = "PAYROLL"
var titulo_tour = "TOUR OPERATION"
var titulo_decision = "DECISIONES SUPPORT SYSTEM"
var titulo_management = "MANAGEMENT"
var titulo_comunication = "COMUNICATION"
var titulo_multiproperty = "MULTIPROPERTY"
var titulo_mail = "MAIL SERVICE"
var titulo_online = "ONLINE RESERVATION"

var obj_front = {
            title:titulo_front,
            text:texto_front,
            img1:imagen_front,
            img2:img_aux_front,
            ops:operaciones_front,
            hash:"front"
          }
var obj_point = {title:titulo_point,text:texto_point,img1:imagen_point,img2:img_aux_point,ops:operaciones_point,hash:"point"}
var obj_inventory = {title:titulo_inventory,text:texto_inventory,img1:imagen_inventory,img2:img_aux_inventory,ops:operaciones_inventory,hash:"inventory"}
var obj_accounting = {title:titulo_accounting,text:texto_accounting,img1:imagen_accounting,img2:img_aux_accounting,ops:operaciones_accounting,hash:"accounting"}
var obj_fixed = {title:titulo_fixed,text:texto_fixed,img1:imagen_fixed,img2:img_aux_fixed,ops:operaciones_fixed,hash:"fixed"}
var obj_payroll = {title:titulo_payroll,text:texto_payroll,img1:imagen_payroll,img2:img_aux_payroll,ops:operaciones_payroll,hash:"payroll"}
var obj_tour = {title:titulo_tour,text:texto_tour,img1:imagen_tour,img2:img_aux_tour,ops:operaciones_tour,hash:"tour"}
var obj_decision = {title:titulo_decision,text:texto_decision,img1:imagen_decision,img2:img_aux_decision,ops:operaciones_decision,hash:"decision"}
var obj_management = {title:titulo_management,text:texto_management,img1:imagen_management,img2:img_aux_management,ops:operaciones_management,hash:"management"}
var obj_comunication = {title:titulo_comunication,text:texto_comunication,img1:imagen_comunication,img2:img_aux_comunication,ops:operaciones_comunication,hash:"comunication"}
var obj_multiproperty = {title:titulo_multiproperty,text:texto_multiproperty,img1:imagen_multiproperty,img2:img_aux_multiproperty,ops:operaciones_multiproperty,hash:"multiproperty"}
var obj_mail = {title:titulo_mail,text:texto_mail,img1:imagen_mail,img2:img_aux_mail,ops:operaciones_mail,hash:"mail"}
var obj_online = {title:titulo_online,text:texto_online,img1:imagen_online,img2:img_aux_online,ops:operaciones_online,hash:"online"}
var json = [
  obj_front,
  obj_point,
  obj_inventory,
  obj_accounting,
  obj_fixed,
  obj_payroll,
  obj_tour,
  obj_decision,
  obj_management,
  obj_comunication,
  obj_multiproperty,
  obj_mail,
  obj_online
]

let result = ""
for (let i = 0; i < json.length; i++) {
  const val = json[i]
  result += products(val.title,val.text,val.img1,val.img2,val.ops,val.hash)
}

$("#data-json2").html(result)

/****************FUNCIONES********************/
function op(o){
  let t = ""
  for (let i = 0; i < o.length; i++) {
    const val = o[i]
    t += `<li class="function"><a>${val}</a></li>`
  }
  return(t)
}

function products(title,text,img1,img2,operations,index){
  const html = `<div class="item" data-hash="${index}">\
    <div class="content">\
      <div class="row">\
        <h1 class="content-title">${title}</h1>\
        <div class="flex-end">\
          <img class="logo-blue" src="${img1}" alt="Seven">\
        </div>\
      </div>\
      <p class="content-body">${text}</p>\
      <div class="columns">\
        <div class="column is-4 desaparecer">\
          <h4 class="content-sub-title">Algunas Funciones</h4>\
          <ul id="function">\
            ${op(operations)}\
          </ul>\
          <div class="flex-center"> <div class="boton-products">SOLICITA MAS INFORMACIÓN</div></div>\
        </div>\
        <div class="column">\
          <img class="img" src="${img2}" width="100%" data-index="0" data-img='["img/img1.png","img/l2.png"]'>\
        </div>\
      </div>\
    </div>\
  </div>`;
  return html;
}


const hotel1 = {img:"img/casos/hoteles/agualcas.jpg",url:"agualcas.com",img2:"img/flag-cr.png"}
const hotel2 = {img:"img/casos/hoteles/cano-negro.png",url:"agualcas.com",img2:"img/flag-cr.png"}
const hotel3 = {img:"img/casos/hoteles/casa-roland-marina-golfito.png",url:"agualcas.com",img2:"img/flag-cr.png"}
const hotel4 = {img:"img/casos/hoteles/elgranescape.png",url:"El gran escape",img2:"img/flag-cr.png"}
const hotel5 = {img:"img/casos/hoteles/finca-luna-nueva-lodge.png",url:"agualcas.com",img2:"img/flag-cr.png"}
const hotel6 = {img:"img/casos/hoteles/las-colinas.png",url:"las-colinas",img2:"img/flag-cr.png"}
const hoteles1 = [hotel1,hotel2,hotel3]
const hoteles2 = [hotel4,hotel5,hotel6]
const item = {item1: hoteles1,item2: hoteles2}
var items = [item,item]

function itemsF(ite,index){
  var x = `<div class="item" data-hash="${'i'+index}">
    <div class="owl-carousel owl-theme coki2">

        ${casos(ite.item1)}
        ${casos(ite.item2)}

    </div>
  </div>`
  return x
}

function casos(vak){
  let x = ""
  for (let i = 0; i < vak.length; i++) {
    const val = vak[i]
    x += `
    <div class="item casos-item">
      <div class="flex-center">
        <img class="img-item" src="${val.img}">
      </div>
      <div class="flex-center">
        <p>${val.url}</p>
      </div>
      <div class="flex-center">
        <img class="img-cr" src="${val.img2}">
      </div>
    </div>`
  }
  return x
}
let ret = ""
for (let i = 0; i < items.length; i++) {
  const x = items[i]
  ret += itemsF(x,i)
}
$("#imgs").html(ret)
$(".casos").click(function(){
  $(".casos").removeClass("active");
  $(this).addClass("active");
})
