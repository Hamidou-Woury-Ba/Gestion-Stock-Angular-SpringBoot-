import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-inscription',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.css'
})
export class PageInscriptionComponent {
  faCheck = faCheck;
}
