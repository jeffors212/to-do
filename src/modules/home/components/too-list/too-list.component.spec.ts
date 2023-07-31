import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooListComponent } from './too-list.component';

describe('TooListComponent', () => {
  let component: TooListComponent;
  let fixture: ComponentFixture<TooListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooListComponent]
    });
    fixture = TestBed.createComponent(TooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
