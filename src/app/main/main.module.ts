import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, IonicModule], // Asegúrate de que IonicModule esté presente en los imports
})
export class MainModule {}
