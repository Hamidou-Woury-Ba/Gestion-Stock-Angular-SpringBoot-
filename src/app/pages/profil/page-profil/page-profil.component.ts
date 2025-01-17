import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../font-awesome-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.css'
})
export class PageProfilComponent implements OnInit{

  faPencilAlt = Icons["faPencilAlt"];
  faLock = Icons["faLock"];

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
      
  }

  ModifierMotDePasse() : void{
    this.route.navigate(['changer-mot-de-passe']);
  }

}
