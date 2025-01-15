import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';

@Component({
  selector: 'app-bouton-action',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.css'
})
export class BoutonActionComponent implements OnInit{

  faPlus = Icons['faPlus']; 
  faCloudUpload = Icons['faCloudUpload'];
  faCloudDownload = Icons['faCloudDownload'];

  @Output()
  clickEvent = new EventEmitter()

  ngOnInit(): void {
      
  }

  boutonNouveauClick() : void{
    this.clickEvent.emit()
  }

}
