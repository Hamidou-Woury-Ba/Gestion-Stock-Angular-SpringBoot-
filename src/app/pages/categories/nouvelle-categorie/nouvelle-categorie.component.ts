import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../font-awesome-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.css'
})
export class NouvelleCategorieComponent implements OnInit{

  faCancel = Icons['faCancel'];
  faSave = Icons['faSave'];

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  cancel() : void {
    this.route.navigate(['categorie']);
  }

  save() : void {

  }

}
