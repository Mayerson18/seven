"use strict";
var operaciones1 = ["Operaciones sobre Habitaciones","Operaciones sobre Folios","Reservas"]
var operaciones2 = [""]
var operaciones3 = [""]
var operaciones4 = ["Asientos Contables","Catálogo de Cuentas","Conciliación Bancaria","Extracto de Cuentas","Manejo de Presupuestos"]
var operaciones5 = [""]
var operaciones6 = ["Informe de Ventas","Mapa de Mesas","Selección de cuentas contables para enlaces"]
var operaciones7 = ["Control de cuentas por cobrar y pagar por empleado.","Histórico por planillas."]
var operaciones8 = ["Traslado de Reservas entre Hoteles", "Traslado de Huespedes entre Hoteles"]
var operaciones9 = ["Configuración de áreas para los activos.","Inventario de Activos Fijos","Traslado de Activos"]
var operaciones10 = ["Selección de permisos por usuario, opción por opción en cada uno de los módulos.","Histórico de movimientos de los usuarios en los módulos."]
var operaciones11 = [""]
var operaciones12 = ["Al terminar la reserva se guarda automáticamente de Front Desk y se envían los correos correspondientes.","Integración de contrato con Seven Front Desk.","Administración de logos e imágenes promocionales."]
var titulo1 = "FRONT DESK"
var titulo2 = "DECISIONES SUPPORT SYSTEM"
var titulo3 = "COMUNICATION"
var titulo4 = "ACCOUNTING"
var titulo5 = "TOUR OPERATION"
var titulo6 = "POINT OF SALES BILLING"
var titulo7 = "PAYROLL"
var titulo8 = "MULTIPROPERTY"
var titulo9 = "FIXED ASSET"
var titulo10 = "MANAGEMENT"
var titulo11 = "MAIL SERVICE"
var titulo12 = "ONLINE RESERVATION"
var n = "</p><p class='content-body'>"
var texto1 = "Front Desk, con sus más de 160 opciones entre operativas,configuración y reportes, es a nivel de hoteles el más importanteentre los módulos.  Una vez configurado el Front Parámetros, estemódulo nos permite de una forma muy eficiente controlar lasoperaciones diarias con reportes muy útiles y facilidad demanipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro."
var texto2 = "Módulo de reportería centralizado para gerentes. Permite a la gerencia acceder a los principales reportes de nuestros módulos en un mismo sitio. Entre los módulos con reportería en el DSS están Front Desk, Point of Sales, Inventory, Accounting y Management. Compatible con dispositivos móviles."
var texto3 = ""
var texto4 = "Nuestro sistema contable cuenta con todas las operaciones propias que se necesitan en el trabajo diario. Posee más de 30 opciones y 120 funciones entre operativas, configuración y reportes, entre los más destacables tenemos control de multi-moneda y manejo de varias empresas contables."
var texto5 = "Sistema para Operadores de Tours Permite reservar varios servicios en diferentes fechas y, horas de inicio y final, todo en una misma reserva. Control de Disponibilidad por Servicio, Equipo y Recurso Humano. lexible e Intuitiva función para el control de las rutas de transporte de los clientes al lugar donde recibírn el servicio. Contabilidad: Prepagos, Facturas y, Notas de Débito y Crédito, todo enlazado a nuestro módulo de contabilidad Seven Accounting."
var texto6 = `El módulo Point of sales o punto de ventas fue creado para la facturación de productos, y se puede configurar a cualquier mercado, restaurant, tienda, tour desk, en fin, cualquier transacción que implique una venta.${n}Para control de inventario el punto de venta tiene integración con nuestro sistema de inventario, con el cual, se puede liar los productos de ventas con los productos de inventario, así se puede hacer explosión de insumos muy detallado, en el caso de restaurantes esta función costea los platos y rebaja las cantidades estipuladas en la receta.`
var texto7 = `Nuestro sistema de planilla contiene 14 opciones que permite un control detallado del personal y departamentos de su empresa. Se puede configurar cualquier tipo de afectación (modificadores del salario), manejadas a varios niveles, los cuales nos permiten indicar si la afectación es parte de los cálculos de cargas sociales o no, si acumula o no  pagos de aguinaldo o vacaciones. También nos permite automatizar por empleado rebajos o pagos en la planilla.`
var texto8 = `Módulo de Administración para Cadenas de Hoteles que permite gestionar varios hoteles como si fuesen uno solo.`
var texto9 = `El módulo de activos fijos con sus 13 opciones nos permite crear áreas, grupos y los activos como tal, con el fin de manejar su ubicación, estado, tasa de depreciación, responsables y movimientos contables propios del manejo de activos fijos.`
var texto10 = `El sistema Management es indispensable para el control y supervisión de los usuarios y terminales que usan el sistema. Aquí se puede crear, eliminar o dar permiso a los usuario, ítem por ítem, en cada uno de los módulos, ofreciendo la posibilidad de dar permisos individuales o grupales de lo que puede hacer en toda la suite.  Además, en este módulo queda registrado todo movimiento que realicen los usuarios.`
var texto11 = `Es un pequeño módulo que permite enviar correos. Envió de correos desde Front Desk, entre ellos Solicitudes y Confirmaciones de Reservas y Mensaje al hacer check-out. Sistema de Plantillas para correos basado en HTML, lo que permite una alta flexibilidad al personalizar el formato y diseño de los correos.`
var texto12 = `Seven Online está diseñado para tener integración con Front Desk,  así permitir al huésped hacer su propia reservación mediante la página del hotel. La administración del módulo es prácticamente nula, ya que la información se extrae directamente de Seven Front Desk.`
var imagen1 = "img/productos/front.png"
var imagen2 = "img/productos/dds.png"
var imagen3 = "img/productos/communications.png"
var imagen4 = "img/productos/accounting.png"
var imagen5 = "img/productos/tour.png"
var imagen6 = "img/productos/point.png"
var imagen7 = "img/productos/payroll.png"
var imagen8 = "img/productos/multi.png"
var imagen9 = "img/productos/fixed.png"
var imagen10 = "img/productos/management.png"
var imagen11 = "img/productos/mail.png"
var imagen12 = "img/productos/online.png"
var img_aux = "img/img1.png"
var img_aux2 = "img/auxdds.png"
var img_aux3 = "img/auxcom.png"
var img_aux4 = "img/auxacou.png"
var img_aux5 = "img/auxtour.png"
var img_aux6 = "img/auxpoint.png"
var img_aux7 = "img/auxpay.png"
var img_aux8 = "img/auxmulti.png"
var img_aux9 = "img/auxfixed.png"
var img_aux10 = "img/auxmanag.png"
var img_aux11 = "img/auxmail.png"
var img_aux12 = "img/auxonline.png"








var obj1 = {
            title:titulo1,
            text:texto1,
            img1:imagen1,
            img2:img_aux,
            ops:operaciones1//ARRAY DE CADENAS DE TEXTO
          }
var obj2 = {title:titulo2,text:texto2,img1:imagen2,img2:img_aux2,ops:operaciones2}
var obj3 = {title:titulo3,text:texto3,img1:imagen3,img2:img_aux3,ops:operaciones3}
var obj4 = {title:titulo4,text:texto4,img1:imagen4,img2:img_aux4,ops:operaciones4}
var obj5 = {title:titulo5,text:texto5,img1:imagen5,img2:img_aux5,ops:operaciones5}
var obj6 = {title:titulo6,text:texto6,img1:imagen6,img2:img_aux6,ops:operaciones6}
var obj7 = {title:titulo7,text:texto7,img1:imagen7,img2:img_aux7,ops:operaciones7}
var obj8 = {title:titulo8,text:texto8,img1:imagen8,img2:img_aux8,ops:operaciones8}
var obj9 = {title:titulo9,text:texto9,img1:imagen9,img2:img_aux9,ops:operaciones9}
var obj10 = {title:titulo10,text:texto10,img1:imagen10,img2:img_aux10,ops:operaciones10}
var obj11 = {title:titulo11,text:texto11,img1:imagen11,img2:img_aux11,ops:operaciones11}
var obj12 = {title:titulo12,text:texto12,img1:imagen12,img2:img_aux12,ops:operaciones12}
var json = [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12]

let result = ""
for (let i = 0; i < json.length; i++) {
  const val = json[i]
  result += products(val.title,val.text,val.img1,val.img2,val.ops,i)
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
  </div>\
  `;
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
