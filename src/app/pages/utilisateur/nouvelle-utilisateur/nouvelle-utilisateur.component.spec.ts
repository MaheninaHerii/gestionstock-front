import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleUtilisateurComponent } from './nouvelle-utilisateur.component';

describe('NouvelleUtilisateurComponent', () => {
  let component: NouvelleUtilisateurComponent;
  let fixture: ComponentFixture<NouvelleUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
