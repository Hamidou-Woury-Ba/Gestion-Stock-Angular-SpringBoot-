import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-bouton-action',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.css'
})
export class BoutonActionComponent {

  faPlus = Icons['faPlus']; 
  faCloudUpload = Icons['faCloudUpload'];
  faCloudDownload = Icons['faCloudDownload'];

}
