import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  email = '';
  password = '';

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {}

  async register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  
  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  ngOnInit() {}

}
