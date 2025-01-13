import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-detail-mvt-stk',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail-mvt-stk.component.html',
  styleUrl: './detail-mvt-stk.component.css'
})
export class DetailMvtStkComponent {

  faInfoCircle = Icons['faInfoCircle'];
  faBox = Icons['faBox'];
  faCubesStacked = Icons['faCubesStacked'];

}
