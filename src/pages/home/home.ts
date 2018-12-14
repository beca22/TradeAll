import { Component, keyframes } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { RegistrarsePage } from '../registrarse/registrarse';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inicio = PrincipalPage
  regis = RegistrarsePage
  usuario = '';
  usuarios = [];
  producto ;
  correo = '';
  contrasena = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
this.storage.keys()
.then(keys =>{
  if(keys.some(k=>k == 'usuarios')) {
    this.storage.get('usuarios')
    .then(usuarios=>{
      console.log(usuarios)
      this.usuarios = JSON.parse(usuarios);
    });
  }
});
  }
  clickInicio(){
    //this.navCtrl.push(this.inicio)
    let index = this.usuarios.findIndex(usuario => usuario.correo== this.correo && usuario.contraseña == this.contrasena)
    if (index >= 0 ){
      const alert = this.alertCtrl.create({
        title : 'Usuario Registrado',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(this.inicio);
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Usuario no registrado',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  clickRegistro(){
    this.navCtrl.push(this.regis, {usuarios: this.usuarios});
  }
    
}

