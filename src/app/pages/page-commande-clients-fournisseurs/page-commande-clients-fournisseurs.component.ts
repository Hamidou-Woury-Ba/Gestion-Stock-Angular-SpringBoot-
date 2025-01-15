import { Component } from '@angular/core';
import { DetailCommandeClientsFournisseursComponent } from "../../composants/detail-commande-clients-fournisseurs/detail-commande-clients-fournisseurs.component";
import { DetailCommandeComponent } from "../../composants/detail-commande/detail-commande.component";
import { BoutonActionComponent } from "../../composants/bouton-action/bouton-action.component";
import { PaginationComponent } from "../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-commande-clients-fournisseurs',
  standalone: true,
  imports: [DetailCommandeClientsFournisseursComponent, DetailCommandeComponent, BoutonActionComponent, PaginationComponent],
  templateUrl: './page-commande-clients-fournisseurs.component.html',
  styleUrl: './page-commande-clients-fournisseurs.component.css'
})
export class PageCommandeClientsFournisseursComponent {

}
