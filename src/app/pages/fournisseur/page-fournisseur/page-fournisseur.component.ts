import { Component } from '@angular/core';
import { BoutonActionComponent } from "../../../composants/bouton-action/bouton-action.component";
import { PaginationComponent } from "../../../composants/pagination/pagination.component";
import { DetailClientFournisseurComponent } from "../../../composants/detail-client-fournisseur/detail-client-fournisseur.component";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
  imports: [BoutonActionComponent, PaginationComponent, DetailClientFournisseurComponent],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.css'
})
export class PageFournisseurComponent {

}
