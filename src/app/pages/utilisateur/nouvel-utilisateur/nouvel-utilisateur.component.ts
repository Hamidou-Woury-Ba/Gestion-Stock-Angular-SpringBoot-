import { Component } from '@angular/core';
import { Icons } from '../../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

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

  constructor(
    private route: Router,
  ) { }

  save(): void {

  }

  cancel(): void {
    this.route.navigate(['utilisateurs']);
  }

}
