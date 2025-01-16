import { Component } from '@angular/core';
import { Icons } from '../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-detail-utilisateur',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail-utilisateur.component.html',
  styleUrl: './detail-utilisateur.component.css'
})
export class DetailUtilisateurComponent {

  faPhoneAlt = Icons['faPhoneAlt'];
  faHome = Icons['faHome'];
  faMapMarkedAlt = Icons['faMapMarkedAlt'];
  faGlobeEurope = Icons['faGlobeEurope'];
  faInfoCircle = Icons['faInfoCircle'];
  faPencil = Icons['faPencil'];
  faTrash = Icons['faTrash'];
  faList = Icons['faList'];

}
