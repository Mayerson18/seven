"use strict";
var operaciones_front = ["Operaciones sobre Habitaciones","Operaciones sobre Folios","Reservas" , "Disponibilidad de Habitaciones" ]
var operaciones_decision = ["Estado de Resultados","Submayor de Artúculos","Bitácora de Seguridad","Balance General"]
var operaciones_inventory = ["Control, compras,  traslado, toma física. ","Inventaio","Órdenes y solicitudes de compra.","Previsión de Compras."]
var operaciones_comunication = ["Control de Llamadas","Directorio Telefénico","Extensiones","Reportes de Llamadas"]
var operaciones_accounting = ["Asientos Contables","Catálogo de Cuentas","Conciliación Bancaria","Extracto de Cuentas"]
var operaciones_tour = ["Reservas", "Prepagos" ,"Rutas"]
var operaciones_point = ["Facturacion","Cobros","Mapa de Mesas","Informe de Ventas"]
var operaciones_payroll = ["Afectaciones","Empleados","Puestos y Categorias"]
var operaciones_multiproperty = ["Pronóstico de Ingresos","Pronósticos de Ocupación Unificados", "Traslado de Huespedes entre Hoteles"]
var operaciones_fixed = ["Configuración de áreas para los activos.","Inventario de Activos Fijos","Traslado de Activos"]
var operaciones_management = ["Selección de permisos por usuario, opción por opción en cada uno de los módulos.","Histórico de movimientos de los usuarios en los módulos."]
var operaciones_mail = ["Previsualizador de Correos" , "Reserva al Correo"]
var operaciones_online = ["Al terminar la reserva se guarda automáticamente de Front Desk y se envían los correos correspondientes.","Integración de contrato con Seven Front Desk.","Administración de logos e imágenes promocionales."]

var n = "</p><p class='content-body'>"
var texto_front = "Front Desk, con sus más de 160 opciones entre operativas,configuración y reportes, es a nivel de hoteles el más importanteentre los módulos.  Una vez configurado el Front Parámetros, estemódulo nos permite de una forma muy eficiente controlar lasoperaciones diarias con reportes muy útiles y facilidad demanipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro."
var texto_decision = "Módulo de reportería centralizado para gerentes. Permite a la gerencia acceder a los principales reportes de nuestros módulos en un mismo sitio. Entre los módulos con reportería en el DSS están Front Desk, Point of Sales, Inventory, Accounting y Management. Compatible con dispositivos móviles."
var texto_comunication = "Tarificador de Llamadas Telefónicas Se conecta a centrales Telefónicas de Puerto Serial y por IP. Registra y tarifica la duración de las llamadas, tanto en habitaciones como en oficinas administrativas. Envía los cargos a Front Desk. Brinda varios reportes estadísticos de las llamadas."
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

var img_aux_front = ["img/pantallashome/front/1.png","img/pantallashome/front/2.png","img/pantallashome/front/3.png","img/pantallashome/front/4.png"]
var img_aux_point = ["img/pantallashome/point/1.png","img/pantallashome/point/2.png","img/pantallashome/point/3.png","img/pantallashome/point/4.png"]
var img_aux_inventory = ["img/pantallashome/inventory/1.png","img/pantallashome/inventory/2.png","img/pantallashome/inventory/3.png","img/pantallashome/inventory/4.png"]
var img_aux_accounting = ["img/pantallashome/accounting/1.png","img/pantallashome/accounting/2.png","img/pantallashome/accounting/3.png","img/pantallashome/accounting/4.png"]
var img_aux_fixed = ["img/pantallashome/fixed/1.png","img/pantallashome/fixed/2.png","img/pantallashome/fixed/3.png"]
var img_aux_payroll = ["img/pantallashome/payroll/1.png","img/pantallashome/payroll/2.png","img/pantallashome/payroll/3.png"]
var img_aux_tour = ["img/pantallashome/tour/1.png","img/pantallashome/tour/2.png","img/pantallashome/tour/3.png"]
var img_aux_decision = ["img/pantallashome/DSS/1.png","img/pantallashome/DSS/2.png","img/pantallashome/DSS/3.png","img/pantallashome/DSS/4.png"]
var img_aux_management = ["img/pantallashome/management/1.png","img/pantallashome/management/2.png"]
var img_aux_comunication = ["img/pantallashome/comunication/1.png","img/pantallashome/comunication/2.png","img/pantallashome/comunication/3.png","img/pantallashome/comunication/4.png","img/pantallashome/comunication/5.png"]
var img_aux_multiproperty = ["img/pantallashome/multiproperty/1.png","img/pantallashome/multiproperty/2.png","img/pantallashome/multiproperty/3.png"]
var img_aux_mail = ["img/pantallashome/mail/1.png","img/pantallashome/mail/2.png"]
var img_aux_online = ["img/pantallashome/online/1.png","img/pantallashome/online/2.png","img/pantallashome/online/3.png","img/pantallashome/online/4.png"]

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

var result = ""
for (var i = 0; i < json.length; i++) {
  const val = json[i]
  result += products(val.title,val.text,val.img1,val.img2,val.ops,val.hash)
}

$("#data-json2").html(result)

/****************FUNCIONES********************/
function op(o){
  var t = ""
  for (var i = 0; i < o.length; i++) {
    const val = o[i]
    t += `<li class="function"><a>${val}</a></li>`
  }
  return(t)
}

function products(title,text,img1,img2,operations,index){
  const html = `<div class="item item-aux" data-hash="${index}">\
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
          <div class="flex-center"> <a href="${ "productos.html#" + index}" class="boton-products">Aprender Más</a></div>\
        </div>\
        <div class="column">\
          <img class="img" src="${img2[0]}" width="100%" data-index="0" data-img='${JSON.stringify(img2)}'>\
        </div>\
      </div>\
      <div class="flex-center aparecer"> <a href="${ "productos.html#" + index}" class="boton-products">Solicita Más Información</a></div>\
    </div>\
  </div>`;
  return html;
}




const hotel1 = {img:"img/casos/hoteles/The Preserve at Los Altos.png",url:"http://www.thepreserveatlosaltos.com",img2:"img/flag-cr.png"}
const hotel2 = {img:"img/casos/hoteles/logo hotel seminole colorX.png",url:"http://www.seminoleplaza.com",img2:"img/flag-cr.png"}
const hotel3 = {img:"img/casos/hoteles/VolcanoBN.jpg",url:"http://www.volcanolodge.com/es",img2:"img/flag-cr.png"}
const hotel4 = {img:"img/casos/hoteles/San Bosco Inn.png",url:"http://www.hotelsanbosco.com/en/",img2:"img/flag-cr.png"}
const hotel5 = {img:"img/casos/hoteles/Cano_Negro.png",url:"http://www.canonegrolodge.com",img2:"img/flag-cr.png"}
const hotel6 = {img:"img/casos/hoteles/Logo Nacazcol - Final.png",url:"http://www.nacazcol.com",img2:"img/flag-cr.png"}
const hotel7 = {img:"img/casos/hoteles/Papagayo.png",url:"http://www.vp.cr/",img2:"img/flag-cr.png"}
const hotel8 = {img:"img/casos/hoteles/La Mansion Inn.png",url:"http://www.lamansioninn.com/en/",img2:"img/flag-cr.png"}
const hotel9 = {img:"img/casos/hoteles/Logo HDS.png",url:"http://www.hoteldelsur.net/",img2:"img/flag-cr.png"}
const hotel10 = {img:"img/casos/hoteles/Puerto Azul.png",url:"www.puertoazulboutiqueresort.com/",img2:"img/flag-cr.png"}
const hotel11 = {img:"img/casos/hoteles/Logo_Villa_del_Sueno_2017.png",url:"http://www.villadelsueno.com/",img2:"img/flag-cr.png"}
const hotel12 = {img:"img/casos/hoteles/Chachagua_Eco_Lodge.png",url:"http://www.chachaguarainforesthotel.com/",img2:"img/flag-cr.png"}
const hotel13 = {img:"img/casos/hoteles/downtown.png",url:"http://www.fortunadowntowninn.com/",img2:"img/flag-cr.png"}
const hotel14 = {img:"img/casos/hoteles/Finca Luna Nueva Lodge.jpg",url:"http://www.fincalunanuevalodge.com/",img2:"img/flag-cr.png"}
const hotel15 = {img:"img/casos/hoteles/LOGOTIPO HOTEL LOS ROBLES.jpg",url:"http://www.hotellosrobles.com",img2:"img/flag-cr.png"}
const hotel16 = {img:"img/casos/hoteles/Logo Punta Teonoste.png",url:"http://www.puntateonoste.com/",img2:"img/flag-cr.png"}
const hotel17 = {img:"img/casos/hoteles/Taormina.png",url:"http://www.taorminahotelandcasino.com/",img2:"img/flag-cr.png"}
const hotel18 = {img:"img/casos/hoteles/Hotel_Executive_Managua.jpg",url:"http://www.executivemanagua.online.com.ni/",img2:"img/flag-cr.png"}
const hotel19 = {img:"img/casos/hoteles/Logo Bergerac.png",url:"http://www.bergerachotel.com/",img2:"img/flag-cr.png"}
const hotel20 = {img:"img/casos/hoteles/agualcas.jpg",url:"http://www.hotelagualcas.com/",img2:"img/flag-cr.png"}
const hotel21 = {img:"img/casos/hoteles/HCC_Guana LOGO.png",url:"http://www.casacondebeach.com/",img2:"img/flag-cr.png"}
const hotel22 = {img:"img/casos/hoteles/Logo HCC.JPEG",url:"http://www.casacondecity.com/",img2:"img/flag-cr.png"}
const hotel23 = {img:"img/casos/hoteles/Logo helsm.png",url:"http://www.lagunasanmartin.com.ni/",img2:"img/flag-cr.png"}
const hotel24 = {img:"img/casos/hoteles/logo marbella.png",url:"http://www.marbella.com.ni/",img2:"img/flag-cr.png"}
const hotel25 = {img:"img/casos/hoteles/Casa Roland Marina Golfito.png",url:"http://www.casarolandgolfito.com/",img2:"img/flag-cr.png"}
const hotel26 = {img:"img/casos/hoteles/Logo-Casa-Ronald-SJ-200px.png",url:"http://www.casarolandsanjose.com/",img2:"img/flag-cr.png"}
const hotel27 = {img:"img/casos/hoteles/Villas-Lirio.png",url:"http://www.villaslirio.com/",img2:"img/flag-cr.png"}
const hotel28 = {img:"img/casos/hoteles/arenal_rabfer.png",url:"http://www.arenalrabfer.com/",img2:"img/flag-cr.png"}
const hotel29 = {img:"img/casos/hoteles/las colinas.png",url:"http://www.lascolinasarenal.com/",img2:"img/flag-cr.png"}
const hotel30 = {img:"img/casos/hoteles/Hilton-Garden-Inn-Hero.jpg",url:"http://www.hiltonhotels.com/es_XM/costa-rica/hilton-garden-inn-san-jose-la-sabana/",img2:"img/flag-cr.png"}
const hoteles1 = [
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
  hotel8,
  hotel9,
  hotel10,
  hotel11,
  hotel12,
  hotel13,
  hotel14,
  hotel15,
  hotel16,
  hotel17,
  hotel18,
  hotel19,
  hotel20,
  hotel21,
  hotel22,
  hotel23,
  hotel24,
  hotel25,
  hotel26,
  hotel27,
  hotel28,
  hotel29,
  hotel30
]

const restaurante1 = {img:"img/casos/restaurantes/elgranescape.jpg",url:"http://www.elgranescapequepos.com/",img2:"img/flag-cr.png"}
const restaurante2 = {img:"img/casos/restaurantes/lo sabroso maiz.png",url:"http://losabrosodelmaiz.com/",img2:"img/flag-cr.png"}
const restaurante3 = {img:"img/casos/restaurantes/Logo EF.jpg",url:"http://elfloriditanicaragua.com/",img2:"img/flag-cr.png"}
const restaurantes1 = [restaurante1,restaurante2,restaurante3]

const tour1 = {img:"img/casos/tours/TIMON_COLOR.JPG",url:"http://www.bayislandcruises.com/",img2:"img/flag-cr.png"}
const tour2 = {img:"img/casos/tours/Logo_Rancho_Los_Tucanes_Rep.png",url:"http://www.tucanestours.com/",img2:"img/flag-cr.png"}
const tours1 = [tour1,tour2]

const comercio1 = {img:"img/casos/comercios/vallejo.png",url:"http://www.ferreteriavallejo.com/",img2:"img/flag-cr.png"}
const comercio2 = {img:"img/casos/comercios/Inso.jpg",url:"http://www.insocr.com/",img2:"img/flag-cr.png"}
const comercios1 = [comercio1,comercio2]

const empresa1 = {img:"img/casos/empresas/Uniseguros.png",url:"http://www.unisegurosagencia.com/",img2:"img/flag-cr.png"}
const empresa2 = {img:"img/casos/empresas/eco quintas.png",url:"https://www.grupoecoquintas.com/",img2:"img/flag-cr.png"}
const empresa3 = {img:"img/casos/empresas/job solutions.png",url:"http://www.jobsolutionsca.com/",img2:"img/flag-cr.png"}
const empresas1 = [empresa1,empresa2,empresa3]

const institucion1 = {img:"img/casos/instituciones/CDS-Logo.jpg",url:"https://www.cds.ed.cr/",img2:"img/flag-cr.png"}
const institucion2 = {img:"img/casos/instituciones/unitec.png",url:"http://www.unitec.edu.ni/",img2:"img/flag-cr.png"}
const institucion3 = {img:"img/casos/instituciones/og_logo_ue.png",url:"https://www.earth.ac.cr/es/",img2:"img/flag-cr.png"}
const instituciones1 = [institucion1,institucion2,institucion3]

const hoteles = {item1: hoteles1}
const restaurantes = {item1: restaurantes1}
const tours = {item1: tours1}
const comercios = {item1: comercios1}
const empresas = {item1: empresas1}
const instituciones = {item1: instituciones1}

var items = [hoteles,restaurantes,tours,comercios,empresas,instituciones]

function itemsF(ite,index){
  var x = `<div class="item" data-hash="${'i'+index}">
    <div class="owl-carousel owl-theme coki2">

        ${casos(ite.item1)}

    </div>
  </div>`
  return x
}

function casos(vak){
  var x = ""
  for (var i = 0; i < vak.length; i++) {
    const val = vak[i]
    x += `
    <div class="item casos-item">
      <div class="flex-center">
        <img class="img-item" src="${val.img}">
      </div>
      <div class="flex-center">
        <a href="${val.url}" target="_blank">${val.url}</a>
      </div>
      <div class="flex-center">
        <img class="img-cr" src="${val.img2}">
      </div>
    </div>`
  }
  return x
}

var ret = ""
for (var i = 0; i < items.length; i++) {
  const x = items[i]
  ret += itemsF(x,i)
}
$("#imgs").html(ret)
$(".casos").click(function(){
  $(".casos").removeClass("active");
  $(this).addClass("active");
})
