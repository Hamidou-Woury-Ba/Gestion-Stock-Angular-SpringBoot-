import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../font-awesome-icons';
import { BoutonActionComponent } from "../../../composants/bouton-action/bouton-action.component";
import { DetailMvtStkArticleComponent } from "../../../composants/detail-mvt-stk-article/detail-mvt-stk-article.component";
import { PaginationComponent } from "../../../composants/pagination/pagination.component";
import { CommonModule } from '@angular/common';
import { DetailMvtStkComponent } from "../../../composants/detail-mvt-stk/detail-mvt-stk.component";

@Component({
  selector: 'app-page-mwtsk',
  standalone: true,
  imports: [FontAwesomeModule, BoutonActionComponent, DetailMvtStkArticleComponent, PaginationComponent, CommonModule, DetailMvtStkComponent],
  templateUrl: './page-mwtsk.component.html',
  styleUrl: './page-mwtsk.component.css'
})
export class PageMwtskComponent {

}
