import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../font-awesome-icons';

@Component({
  selector: 'app-page-profil',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.css'
})
export class PageProfilComponent {

  faPencilAlt = Icons["faPencilAlt"];
  faLock = Icons["faLock"];

}
