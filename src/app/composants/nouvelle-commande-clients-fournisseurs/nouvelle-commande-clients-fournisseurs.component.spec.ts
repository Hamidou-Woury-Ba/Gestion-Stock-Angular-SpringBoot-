import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCommandeClientsFournisseursComponent } from './nouvelle-commande-clients-fournisseurs.component';

describe('NouvelleCommandeClientsFournisseursComponent', () => {
  let component: NouvelleCommandeClientsFournisseursComponent;
  let fixture: ComponentFixture<NouvelleCommandeClientsFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleCommandeClientsFournisseursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCommandeClientsFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
