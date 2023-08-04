import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDiretivesComponent } from './custom-diretives.component';

describe('CustomDiretivesComponent', () => {
  let component: CustomDiretivesComponent;
  let fixture: ComponentFixture<CustomDiretivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDiretivesComponent]
    });
    fixture = TestBed.createComponent(CustomDiretivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
