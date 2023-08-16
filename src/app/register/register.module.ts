import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component'; // Asegúrate de importar el componente correctamente

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class RegisterModule {}
