import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { LoginComponent } from './login.component'; // Asegúrate de importar el componente

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, IonicModule]
})
export class LoginModule {}
