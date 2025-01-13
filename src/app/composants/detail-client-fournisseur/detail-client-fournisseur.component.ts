import { Component } from '@angular/core';
import { Icons } from '../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-detail-client-fournisseur',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail-client-fournisseur.component.html',
  styleUrl: './detail-client-fournisseur.component.css'
})
export class DetailClientFournisseurComponent {

  faPhoneAlt = Icons['faPhoneAlt'];
  faHome = Icons['faHome'];
  faMapMarkedAlt = Icons['faMapMarkedAlt'];
  faGlobeEurope = Icons['faGlobeEurope'];
  faInfoCircle = Icons['faInfoCircle'];
  faPencil = Icons['faPencil'];
  faTrash = Icons['faTrash'];
  faList  = Icons['faList'];

}
