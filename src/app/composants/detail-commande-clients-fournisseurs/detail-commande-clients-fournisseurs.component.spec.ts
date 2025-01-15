import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandeClientsFournisseursComponent } from './detail-commande-clients-fournisseurs.component';

describe('DetailCommandeClientsFournisseursComponent', () => {
  let component: DetailCommandeClientsFournisseursComponent;
  let fixture: ComponentFixture<DetailCommandeClientsFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCommandeClientsFournisseursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommandeClientsFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
