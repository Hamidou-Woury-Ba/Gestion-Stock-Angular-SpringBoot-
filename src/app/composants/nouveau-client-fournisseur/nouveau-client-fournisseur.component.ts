import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-nouveau-client-fournisseur',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrl: './nouveau-client-fournisseur.component.css'
})
export class NouveauClientFournisseurComponent {

  faInfoCircle = Icons['faInfoCircle'];
  faCancel = Icons['faCancel'];
  faSave = Icons['faSave'];

}
