import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  signIn() {
    this.authService.signIn(this.email, this.password)
      .then(response => {
         'Inicio de sesión exitoso, seras redirigido a la pantalla Prinicipal'
      })
      .catch(error => {
        'Error al imgresar los datos, reintente.'
      });
  }
}
