import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteBindingComponent } from './teste-binding.component';

describe('TesteBindingComponent', () => {
  let component: TesteBindingComponent;
  let fixture: ComponentFixture<TesteBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
