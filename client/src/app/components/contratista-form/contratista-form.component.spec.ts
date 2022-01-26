import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaFormComponent } from './contratista-form.component';

describe('ContratistaFormComponent', () => {
  let component: ContratistaFormComponent;
  let fixture: ComponentFixture<ContratistaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratistaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
