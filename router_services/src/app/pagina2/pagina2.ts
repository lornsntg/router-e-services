import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenteServices } from '../services/studente-services';

@Component({
  selector: 'app-pagina2',
  imports: [CommonModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {

  constructor(private studentiService: StudenteServices) {}

   studenti: any[] = [];

  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
}

  aggiungiStudente(nome: string, classe: string, media: number) {
    this.studentiService.aggiungiStudente(nome, classe, media);
  }

}
