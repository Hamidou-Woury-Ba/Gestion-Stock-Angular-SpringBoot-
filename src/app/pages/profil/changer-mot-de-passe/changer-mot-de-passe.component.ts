import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../font-awesome-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.css'
})
export class ChangerMotDePasseComponent implements OnInit{

  faCancel = Icons["faCancel"];
  faSave = Icons["faSave"];

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
      
  }

  cancel() : void {
    this.router.navigate(["profil"]);
  }

}
