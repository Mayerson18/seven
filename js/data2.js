"use strict";
var operaciones = ["Operaciones sobre Habitaciones","Operaciones sobre Folios","Reservas"]
var titulo = "FRONT DESK"
var texto = "Front Desk, con sus más de 160 opciones entre operativas,configuración y reportes, es a nivel de hoteles el más importanteentre los módulos.  Una vez configurado el Front Parámetros, estemódulo nos permite de una forma muy eficiente controlar lasoperaciones diarias con reportes muy útiles y facilidad demanipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro."
var imagen1 = "img/l2.png"
var imagen2 = "img/img1.png"
var obj = {
            title:titulo,
            text:texto,
            img1:imagen1,
            img2:imagen2,
            ops:operaciones//ARRAY DE CADENAS DE TEXTO
          }
var json = [obj,obj]

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
        <div class="column is-4">\
          <h4 class="content-sub-title">Algunas Funcioneas</h4>\
          <ul id="function">\
            ${op(operations)}\
          </ul>\
          <div class="boton-products">SOLICITA MAS INFORMACIÓN</div>\
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
    <div class="columns">
      ${casos(ite.item1)}
    </div>
    <div class="columns">
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
    <div class="column casos-item">
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
