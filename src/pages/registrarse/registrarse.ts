import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
acceder = PrincipalPage;
nombre = '';
correo;
contra;
telefono;
usuarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
              public alertCtrl: AlertController) {
                this.usuarios = this.navParams.get("usuarios");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }

  clickRegistro(){
    if(this.nombre.length > 0 && this.contra.length >8 ){
      this.usuarios.push(
        {id:0,
          nombre: this.nombre,
          correo: this.correo,
          contraseña: this.contra,
          telefono: this.telefono
        }
      );
      this.storage.set('usuarios', JSON.stringify(this.usuarios));
      this.navCtrl.pop();
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'La contraseña debe de tener más de 8 caracteres',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}

