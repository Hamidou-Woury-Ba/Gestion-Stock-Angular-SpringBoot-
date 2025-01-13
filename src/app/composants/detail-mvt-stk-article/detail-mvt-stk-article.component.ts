import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-detail-mvt-stk-article',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrl: './detail-mvt-stk-article.component.css'
})
export class DetailMvtStkArticleComponent {

  faBox = Icons['faBox'];
  faCubesStacked = Icons['faCubesStacked'];
  faInfoCircle = Icons['faInfoCircle'];
  faDollar = Icons['faDollar'];

}
