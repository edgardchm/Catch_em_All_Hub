import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Asegúrate de importar LoginComponent
import { MainComponent } from './main/main.component'; // Asegúrate de importar MainComponent
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcp27p6zUBT6LTnSGHJXeN1uEFi-KtPAw",
  authDomain: "appmobilepokemon.firebaseapp.com",
  projectId: "appmobilepokemon",
  storageBucket: "appmobilepokemon.appspot.com",
  messagingSenderId: "540027940044",
  appId: "1:540027940044:web:9b15dc0d7595f8be9be669",
  measurementId: "G-5W4SNNHJEF"
};


@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
