import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooInputAddItensComponent } from './too-input-add-itens.component';

describe('TooInputAddItensComponent', () => {
  let component: TooInputAddItensComponent;
  let fixture: ComponentFixture<TooInputAddItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooInputAddItensComponent]
    });
    fixture = TestBed.createComponent(TooInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
