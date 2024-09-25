import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAplicacionComponent } from './vista-aplicacion.component';

describe('VistaAplicacionComponent', () => {
  let component: VistaAplicacionComponent;
  let fixture: ComponentFixture<VistaAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaAplicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
