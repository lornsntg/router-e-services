import { Component } from '@angular/core';
import { Student } from '../student/student';
import { CommonModule } from '@angular/common';
import { StudenteServices } from '../services/studente-services';


@Component({
  selector: 'app-pagina3',
  imports: [Student,CommonModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {

  studenti: any[] = [];

  constructor(private studentiService: StudenteServices) {}

  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();

    
}
}
