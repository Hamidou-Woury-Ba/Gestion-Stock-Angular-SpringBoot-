import { Component } from '@angular/core';
import { DetailClientFournisseurComponent } from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";
import { PaginationComponent } from "../../../composants/pagination/pagination.component";
import { BoutonActionComponent } from "../../../composants/bouton-action/bouton-action.component";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [DetailClientFournisseurComponent, PaginationComponent, BoutonActionComponent],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.css'
})
export class PageClientComponent {

}