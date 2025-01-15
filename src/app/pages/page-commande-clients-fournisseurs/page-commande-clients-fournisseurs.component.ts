import { Component, OnInit } from '@angular/core';
import { DetailCommandeClientsFournisseursComponent } from "../../composants/detail-commande-clients-fournisseurs/detail-commande-clients-fournisseurs.component";
import { DetailCommandeComponent } from "../../composants/detail-commande/detail-commande.component";
import { BoutonActionComponent } from "../../composants/bouton-action/bouton-action.component";
import { PaginationComponent } from "../../composants/pagination/pagination.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-commande-clients-fournisseurs',
  standalone: true,
  imports: [DetailCommandeClientsFournisseursComponent, DetailCommandeComponent, BoutonActionComponent, PaginationComponent],
  templateUrl: './page-commande-clients-fournisseurs.component.html',
  styleUrl: './page-commande-clients-fournisseurs.component.css'
})
export class PageCommandeClientsFournisseursComponent implements OnInit{

  constructor(
    private router : Router
  ){}

  ngOnInit(): void {
      
  }

  nouvelleCommande() : void {
    this.router.navigate(['nouvelle-commande-client'])
  }

}
