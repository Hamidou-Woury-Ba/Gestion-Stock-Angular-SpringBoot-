import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-nouveau-client-fournisseur',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrl: './nouveau-client-fournisseur.component.css'
})
export class NouveauClientFournisseurComponent implements OnInit {

  origin = '';

  faInfoCircle = Icons['faInfoCircle'];
  faCancel = Icons['faCancel'];
  faSave = Icons['faSave'];

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

  saveClick(): void {
  }

  cancelClick(): void {
    if (this.origin == 'client') {
      this.route.navigate(['clients']);
    } else if (this.origin == 'fournisseur') {
      this.route.navigate(['fournisseurs']);
    }
  }

}
