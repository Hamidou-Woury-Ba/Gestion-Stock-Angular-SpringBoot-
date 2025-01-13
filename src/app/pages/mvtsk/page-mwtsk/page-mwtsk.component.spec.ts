import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMwtskComponent } from './page-mwtsk.component';

describe('PageMwtskComponent', () => {
  let component: PageMwtskComponent;
  let fixture: ComponentFixture<PageMwtskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMwtskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMwtskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
