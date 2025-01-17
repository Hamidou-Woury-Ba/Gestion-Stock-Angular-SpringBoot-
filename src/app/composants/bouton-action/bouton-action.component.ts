import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../font-awesome-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bouton-action',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.css'
})
export class BoutonActionComponent implements OnInit{

  @Input()
  isNouveauVisible = true;
  @Input()
  isImporterVisible = true;
  @Input()
  isExporterVisible = true; 

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
