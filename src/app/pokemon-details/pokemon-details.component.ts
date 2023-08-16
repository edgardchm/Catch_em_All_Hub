import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  pokemonDetails: any;

  constructor(private route: ActivatedRoute) {
    this.pokemonDetails = this.route.snapshot.data['pokemon'];
  }
}
