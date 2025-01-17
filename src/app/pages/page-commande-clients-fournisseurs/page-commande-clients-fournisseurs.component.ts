import { Component, OnInit } from '@angular/core';
import { DetailCommandeClientsFournisseursComponent } from "../../composants/detail-commande-clients-fournisseurs/detail-commande-clients-fournisseurs.component";
import { DetailCommandeComponent } from "../../composants/detail-commande/detail-commande.component";
import { BoutonActionComponent } from "../../composants/bouton-action/bouton-action.component";
import { PaginationComponent } from "../../composants/pagination/pagination.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-commande-clients-fournisseurs',
  standalone: true,
  imports: [DetailCommandeClientsFournisseursComponent, DetailCommandeComponent, BoutonActionComponent, PaginationComponent],
  templateUrl: './page-commande-clients-fournisseurs.component.html',
  styleUrl: './page-commande-clients-fournisseurs.component.css'
})
export class PageCommandeClientsFournisseursComponent implements OnInit {

  origin = '';

  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    })
  }

  nouvelleCommande(): void {
    if (this.origin == 'client') {
      this.router.navigate(['nouvelle-commande-client'])
    }
    else if (this.origin == 'fournisseur') {
      this.router.navigate(['nouvelle-commande-fournisseur'])
    }
  }
}
