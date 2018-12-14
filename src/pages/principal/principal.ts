import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosPage } from '../productos/productos';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',

})
export class PrincipalPage {
  productospage=ProductosPage;
  carr = CarritoPage;
  carrito = [];
  
  productos = [
    {
      id:0,
    imagen: "../assets/Reloj.jpg",
    nombre: "Reloj",
    vendedor: "Daniela Noal",
    fecha: "2012",
    precio:"$2500",
    disponibles: "Disponiles: 2",
    valoracion: [1,2,3,4,5]

    },

    {
      id:1,
    imagen: "../assets/chamara.jpg",
    nombre: "Chamarra",
    vendedor: "Braulio Reyes",
    fecha: "2017",
    precio:"$1500",
    disponibles: "Disponiles: 3",
    valoracion: [1,2,3,]
  
    },

    {
      id:2,
    imagen: "../assets/zapatos.jpg",
    nombre: "Zapatos",
    vendedor: "Daniel de la Torre",
    fecha: "2015",
    precio:"$1250",
    disponibles: "Disponiles: 1",
    valoracion: [1,2,3,4]
    },

    {
      id:3,
    imagen: "../assets/impermeable.jpg",
    nombre: "Impermiable",
    vendedor: "Marlene Cobian",
    fecha: "2018",
    precio:"$800",
    disponibles: "Disponiles: 30",
    valoracion: [1,2,3,4,5]
    },

    {
      id:4,
    imagen: "../assets/gorra.jfif",
    nombre: "Gorra",
    vendedor: "Mauricio Ramirez-España",
    fecha: "2017",
    precio:"$620",
    disponibles: "Disponiles: 1",
    valoracion: [1,2,3,4,5]
    },

    {
      id:5,
    imagen: "../assets/mochila.jpg",
    nombre: "Mochila",
    vendedor: "Nelly Garcia",
    fecha: "2018",
    precio:"$800",
    disponibles: "Disponiles: 7",
    valoracion: [1,2]
    },

    {
      id:6,
    imagen: "../assets/playeras.jpg",
    nombre: "Playeras",
    vendedor: "Pablo Blanco",
    fecha: "2015",
    precio:"$1436",
    disponibles: "Disponiles: 10",
    valoracion: [1,2,3,4]
    },

    {
      id:7,
    imagen: "../assets/blusas.jpg",
    nombre: "Blusas",
    vendedor: "Montse JImenez",
    fecha: "2016",
    precio:"$400",
    disponibles: "Disponiles: 3",
    valoracion: [1]
    },

    {
      id:8,
    imagen: "../assets/camisa.jfif",
    nombre: "Camisas",
    vendedor: "Salvador Rodriguez",
    fecha: "2018",
    precio:"$1143",
    disponibles: "Disponiles: 1",
    valoracion: [1,2,3,4,5]
    },

    {
      id:9,
    imagen: "../assets/vestidos.jpg",
    nombre: "Vestido",
    vendedor: "Sofia Perez",
    fecha: "2017",
    precio:"$2344",
    disponibles: "Disponiles: 4",
    valoracion: [1,2,3]
    },

    {
      id:10,
    imagen: "../assets/sombrero.jfif",
    nombre: "Sombrero",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:11,
    imagen: "../assets/Bolsas.jpg",
    nombre: "Bolsa",
    vendedor: "Michelle Davalos",
    fecha: "2013",
    precio:"$3012",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:12,
    imagen: "../assets/botas.jpg",
    nombre: "Botas",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:13,
    imagen: "../assets/Carteras.jpg",
    nombre: "Cartera",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:14,
    imagen: "../assets/corbata.jfif",
    nombre: "Corbata",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:15,
    imagen: "../assets/Moño.jfif",
    nombre: "Moño",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:16,
    imagen: "../assets/saco.jpg",
    nombre: "Saco",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:17,
    imagen: "../assets/Tirantes.jpg",
    nombre: "Tirantes",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:18,
    imagen: "../assets/Pulseras.png",
    nombre: "Pulseras",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:19,
    imagen: "../assets/sueter.jpg",
    nombre: "Sueter",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    },

    {
      id:20,
    imagen: "../assets/pa.jpg",
    nombre: "Pañales",
    vendedor: "Héctor Gomez",
    fecha: "2018",
    precio:"$900",
    disponibles: "Disponiles: 6",
    valoracion: [1,2,3,4]
    }

   
 
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  
clickNombre(p){
  this.navCtrl.push(this.productospage, {productos: p, carrito: this.carrito});
}
clickCarrito(){
  this.navCtrl.push(this.carr, {carrito: this.carrito})
}




}
