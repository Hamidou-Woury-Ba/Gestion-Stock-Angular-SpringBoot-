import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../font-awesome-icons';

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.css'
})
export class ChangerMotDePasseComponent {

  faCancel = Icons["faCancel"];
  faSave = Icons["faSave"];

}
