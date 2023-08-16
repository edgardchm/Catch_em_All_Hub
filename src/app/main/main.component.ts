import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router, private pokemonService: PokemonService) {}

  viewPokemonDetails(idOrName: string) {
    this.pokemonService.getPokemonByIdOrName(idOrName)
      .subscribe(
        (pokemonDetails) => {
          // Redirige a la pantalla de detalles del Pokémon y pasa los datos
          this.router.navigate(['/pokemon-details'], { state: { pokemon: pokemonDetails } });
        },
        (error) => {
          console.error('Error obteniendo detalles del Pokémon', error);
        }
      );
  }
}