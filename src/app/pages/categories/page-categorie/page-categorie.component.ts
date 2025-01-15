import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutonActionComponent } from "../../../composants/bouton-action/bouton-action.component";
import { PaginationComponent } from "../../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-categorie',
  standalone: true,
  imports: [BoutonActionComponent, PaginationComponent],
  templateUrl: './page-categorie.component.html',
  styleUrl: './page-categorie.component.css'
})
export class PageCategorieComponent implements OnInit{

  constructor(
    private route : Router
  ){}

  ngOnInit(): void {
      
  }

  nouvelCategorie() : void{
    this.route.navigate(['nouvel-categorie'])
  }

}
