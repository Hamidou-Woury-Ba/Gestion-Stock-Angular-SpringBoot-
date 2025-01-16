import { Component } from '@angular/core';
import { Icons } from '../../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nouvel-utilisateur',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrl: './nouvel-utilisateur.component.css'
})
export class NouvelUtilisateurComponent {

  faInfoCircle = Icons['faInfoCircle']
  faCancel = Icons['faCancel']
  faSave = Icons['faSave']

}
