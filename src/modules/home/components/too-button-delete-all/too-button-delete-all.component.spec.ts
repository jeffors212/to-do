import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooButtonDeleteAllComponent } from './too-button-delete-all.component';

describe('TooButtonDeleteAllComponent', () => {
  let component: TooButtonDeleteAllComponent;
  let fixture: ComponentFixture<TooButtonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooButtonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(TooButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
