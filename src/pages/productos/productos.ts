import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
imagen = '';
nombre = '';
vendedor = '';
fecha = '';
precio = '';
review = '';
disponibles = '';
principal = PrincipalPage;

carrito = [];
producto;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

    this.producto = this.navParams.get('productos');
    this.carrito = this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }
  clickCarro(){
    this.carrito.push(this.producto);
    this.navCtrl.pop();
  }
}
