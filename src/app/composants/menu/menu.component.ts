  import { Component, OnInit } from '@angular/core';
  import { Menu } from './menu';
  import { CommonModule } from '@angular/common';
  import { Router } from '@angular/router';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { Icons } from '../../font-awesome-icons';

  @Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
  })
  export class MenuComponent implements OnInit {

    icon = Icons;

    public menuProperties: Menu[] = [
      {
        id: 1,
        titre: "Tableau de bord",
        icon: this.icon["faChartLine"],
        url: "",
        sousMenu: [
          {
            id: 11,
            titre: "Vue d'ensemble",
            icon: this.icon["faChartPie"],
            url: ""
          },
          {
            id: 12,
            titre: "Statistiques",
            icon: this.icon["faChartSimple"],
            url: "statistiques"
          }
        ]
      },
      {
        id: 2,
        titre: "Articles",
        icon: this.icon["faBoxesStacked"],
        url: "",
        sousMenu: [
          {
            id: 21,
            titre: "Articles",
            icon: this.icon["faBoxesStacked"],
            url: "articles"
          },
          {
            id: 22,
            titre: "Mouvement du stock",
            icon: this.icon["faCubesStacked"],
            url: "mouvementstock"
          }
        ]
      },
      {
        id: 3,
        titre: "Clients",
        icon: this.icon["faUsers"],
        url: "",
        sousMenu: [
          {
            id: 31,
            titre: "Clients",
            icon: this.icon["faUsers"],
            url: ""
          },
          {
            id: 32,
            titre: "Commandes clients",
            icon: this.icon["faShoppingBasket"],
            url: ""
          }
        ]
      },
      {
        id: 4,
        titre: "Fournisseurs",
        icon: this.icon["faUsers"],
        url: "",
        sousMenu: [
          {
            id: 41,
            titre: "Fournisseurs",
            icon: this.icon["faUsers"],
            url: ""
          },
          {
            id: 42,
            titre: "Commandes fournisseurs",
            icon: this.icon["faTruck"],
            url: ""
          },
        ]
      },
      {
        id: 5,
        titre: "Paramètrages",
        icon: this.icon["faCog"],
        url: "",
        sousMenu: [
          {
            id: 51,
            titre: "Catégories",
            icon: this.icon["faTools"],
            url: ""
          },
          {
            id: 52,
            titre: "Utitlisateurs",
            icon: this.icon["faUserCog"],
            url: ""
          },
        ]
      }
    ]

    constructor(
      private router: Router
    ) { }

    ngOnInit(): void {
    }

    navigate(url?: string): void {
      this.router.navigate([url]);
    }

  }

