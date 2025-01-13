import { faSave, faCancel } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { Icons } from '../../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.css'
})
export class NouvelArticleComponent {

  faInfoCircle = Icons['faInfoCircle'];
  faSave = Icons['faSave'];
  faCancel = Icons['faCancel'];

}
