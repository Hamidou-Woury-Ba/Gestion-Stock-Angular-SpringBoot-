import { Component } from '@angular/core';
import { Icons } from '../../font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  faAngleDoubleLeft = Icons['faAngleDoubleLeft'];
  faAngleDoubleRight = Icons['faAngleDoubleRight'];
  faAngleLeft = Icons['faAngleLeft'];
  faAngleRight = Icons['faAngleRight'];

}
