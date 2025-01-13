import { Component } from '@angular/core';
import { Icons } from '../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.css'
})
export class DetailArticleComponent {

  faInfoCircle = Icons["faInfoCircle"];
  faDollar = Icons["faDollar"];
  faFlag = Icons["faFlag"];
  faPencil = Icons["faPencil"];
  faTrash = Icons["faTrash"];
  faList = Icons["faList"];

}
