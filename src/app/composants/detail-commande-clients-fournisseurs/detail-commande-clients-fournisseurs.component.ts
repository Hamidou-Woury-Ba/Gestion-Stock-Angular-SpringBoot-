import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-detail-commande-clients-fournisseurs',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail-commande-clients-fournisseurs.component.html',
  styleUrl: './detail-commande-clients-fournisseurs.component.css'
})
export class DetailCommandeClientsFournisseursComponent {

  faInfoCircle = Icons['faInfoCircle']
  faPhoneAlt = Icons['faPhoneAlt']
  faQrcode = Icons['faQrcode']
  faCalendarCheck = Icons['faCalendarCheck']
  faCartArrowDown = Icons['faCartArrowDown']
  faPencil = Icons['faPencil']
  faTrash = Icons['faTrash']

}
