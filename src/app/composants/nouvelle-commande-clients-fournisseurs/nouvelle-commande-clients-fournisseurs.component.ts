import { Component, OnInit } from '@angular/core';
import { Icons } from '../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailArticleComponent } from "../detail-article/detail-article.component";
import { DetailCommandeComponent } from "../detail-commande/detail-commande.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvelle-commande-clients-fournisseurs',
  standalone: true,
  imports: [FontAwesomeModule, DetailCommandeComponent],
  templateUrl: './nouvelle-commande-clients-fournisseurs.component.html',
  styleUrl: './nouvelle-commande-clients-fournisseurs.component.css'
})
export class NouvelleCommandeClientsFournisseursComponent implements OnInit{

  origin = '';

  faHourglassHalf = Icons['faHourglassHalf']
  faInfoCircle = Icons['faInfoCircle']
  faPhoneAlt = Icons['faPhoneAlt']
  faCancel = Icons['faCancel']
  faSave = Icons['faSave']
  faPlus = Icons['faPlus']

  constructor(
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(data => {
        this.origin = data['origin'];
      })
  }

}
