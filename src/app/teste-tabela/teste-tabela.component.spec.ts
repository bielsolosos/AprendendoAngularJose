import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteTabelaComponent } from './teste-tabela.component';

describe('TesteTabelaComponent', () => {
  let component: TesteTabelaComponent;
  let fixture: ComponentFixture<TesteTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
